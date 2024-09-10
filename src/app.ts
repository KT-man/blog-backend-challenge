import 'reflect-metadata';
import Fastify from 'fastify';

const fastify = Fastify({});

fastify.get('/', function (request, response) {
  response.send({ hello: 'world' });
});

fastify.listen({ port: 8001 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
