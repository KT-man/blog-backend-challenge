import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from '../entity/users.entity.ts';

class UserSeeder implements Seeder {
  /**
   * Track seeder execution.
   *
   * Default: false
   */

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const userTable = dataSource.getRepository('users');

    const userFactory = await factoryManager.get(User);
    await userFactory.save();
  }
}

export default UserSeeder;
