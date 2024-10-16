import 'reflect-metadata';
import Fastify from 'fastify';
import 'dotenv/config';
import postgres from '@fastify/postgres';
import userRoutes from './routes/userRoutes';

/** Create new fastify instance  */
const fastify = Fastify({});

/** Register plugins into fastify instance */
fastify.register((instance, opts, done) => {
  /** Register DB to instance */
  instance.register(postgres, { connectionString: process.env.DB_URL });
  userRoutes(instance);
  /** Register routes to instance */
  done();
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

const start = async () => {
  try {
    await fastify.listen({ port: 8001 }, (err, address) => {});
  } catch (err) {
    fastify.log.error(err);
    console.error('Error with starting the server');

    process.exit(1);
  }
};

start();
