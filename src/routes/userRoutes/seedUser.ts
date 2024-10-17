import { FastifyInstance, FastifyPluginOptions } from 'fastify';

const seedUser = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  fastify.get('/seedUser', async (request, response) => {
    return { allUsers: 'Gottem' };
  });
  done();
};

export default seedUser;
