import 'reflect-metadata';
import Fastify, { FastifyInstance, FastifyPluginOptions } from 'fastify';
import 'dotenv/config';
import postgres from '@fastify/postgres';
import getAllUsers from './routes/userRoutes/getAllUsers.ts';
import createUser from './routes/userRoutes/createUser.ts';
import AppDataSource from './database/appDataSource.ts';
import seedUser from './routes/userRoutes/seedUser.ts';
import { runSeeders } from 'typeorm-extension';

/** Create new fastify instance  */
const fastify = Fastify({});

/** Register plugins into fastify instance */
/** Register DB to instance */
fastify.register((instance, opts, done) => {
  instance.register(postgres, { connectionString: process.env.DB_URL });

  done();
});

/** Register user routes into fastify instance */
fastify.register(
  (instance, opts, done) => {
    instance.register(getAllUsers);
    instance.register(createUser);
    instance.register(seedUser);
    done();
  },
  { prefix: '/users' }
);

/** Test PG connection */
fastify.ready().then(
  () => {
    console.log('Fastify is ready and connected to the database');
  },
  (err) => {
    console.log('Error connecting to the database', err);
  }
);

const start = async () => {
  try {
    await AppDataSource.initialize();

    await runSeeders(AppDataSource);

    await fastify.listen({ port: 8001 }, (err, address) => {});
  } catch (err) {
    fastify.log.error(err);
    console.error('Error with starting the server');

    process.exit(1);
  }
};

start();
