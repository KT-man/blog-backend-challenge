import 'reflect-metadata';
import Fastify from 'fastify';
import 'dotenv/config';
import postgres from '@fastify/postgres';

const fastify = Fastify({});
/** DB Connection */
// Register a connection to my postgresql db with fastify
fastify.register(postgres, {
  connectionString: process.env.DB_URL,
});

/** Test PG connection */
fastify.ready().then(
  () => {
    console.log('Fastify is ready and connected to the database');
  },
  (err) => {
    console.log('Error connecting to the database', err);
  }
);

fastify.get('/testPing', function (request, response) {
  response.send({ hello: 'world' });
});

fastify.listen({ port: 8001 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
