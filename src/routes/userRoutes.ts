import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { User } from '../database/entity/users.entity';
import AppDataSource from '../database/appDataSource';

async function seedUsers(request: any, reply: FastifyReply) {
  const userRepository = AppDataSource.getRepository(User);
  const users = request.body;

  try {
    await userRepository.save(users);
    reply.send({ message: 'Users seeded successfully' });
  } catch (error) {
    reply.status(500).send({ error: 'Failed to seed users' });
  }
}

async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  const userRepository = AppDataSource.getRepository(User);

  try {
    const users = await userRepository.find();
    reply.send(users);
  } catch (error) {
    reply.status(500).send({ error: 'Failed to fetch users' });
  }
}

const userRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/seed-users', seedUsers);
  fastify.get('/users', getUsers);
};

export default userRoutes;
