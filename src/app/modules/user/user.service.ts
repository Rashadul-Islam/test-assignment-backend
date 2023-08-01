import { IUser } from './user.interface';
import { User } from './user.model';
import pick from '../../../shared/pick';

const createUser = async (user: IUser): Promise<Partial<IUser> | null> => {
  const createUser = await User.create(user);

  const result = pick(createUser.toJSON(), ['_id', 'email']);

  return result;
};

export const UserService = {
  createUser,
};
