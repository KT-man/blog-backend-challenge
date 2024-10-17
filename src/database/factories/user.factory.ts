import { setSeederFactory } from 'typeorm-extension';
import { User } from '../entity/users.entity.ts';

const SetUserFactory = setSeederFactory(User, (faker) => {
  const user = new User();

  user.id = faker.string.uuid();
  user.username = faker.string.alpha(15);
  user.password_hash = faker.string.uuid();
  user.created_at = faker.date.recent();

  return user;
});

export default SetUserFactory;
