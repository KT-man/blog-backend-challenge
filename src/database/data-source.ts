import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'bloguser',
  password: '0801',
  database: 'personal_blog',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
