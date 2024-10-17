import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { User } from './entity/users.entity.ts';
import { Post } from './entity/posts.entity.ts';
import UserSeeder from './seeds/user.seeder.ts';
import SetUserFactory from './factories/user.factory.ts';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Post],
  subscribers: [],
  // To update Migrations next time
  migrations: [],
  seeds: [UserSeeder],
  seedTracking: false,
  factories: [SetUserFactory],
};

const AppDataSource = new DataSource(options);

export default AppDataSource;
