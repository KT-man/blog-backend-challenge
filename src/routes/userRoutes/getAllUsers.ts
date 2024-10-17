import { FastifyInstance, FastifyPluginOptions } from 'fastify';

const getAllUsers = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  fastify.get('/getAllUsers', async (request, response) => {
    return { allUsers: 'Gottem' };
  });
  done();
};

export default getAllUsers;
