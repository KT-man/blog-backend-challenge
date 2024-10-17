import { FastifyInstance, FastifyPluginOptions } from 'fastify';

const createUser = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  fastify.post('/createUser', async (request, response) => {
    // Do something with POST request body

    return { allUsers: 'Gottem' };
  });
  done();
};

export default createUser;
