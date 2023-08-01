import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUserData } from './userData.interface';
import { UserData } from './userData.model';

const createUserData = async (
  userData: IUserData
): Promise<IUserData | null> => {
  const { user } = userData;
  const isExist = await UserData.findOne({ user });
  if (isExist) {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, 'Already submited...!');
  }
  const result = await UserData.create(userData);

  return result;
};

const getUserData = async (id: string): Promise<IUserData | null> => {
  const result = await UserData.findOne({ user: id });

  return result;
};

const updateUserData = async (
  id: string,
  payload: IUserData
): Promise<IUserData | null> => {
  const result = await UserData.findOneAndUpdate({ user: id }, payload, {
    new: true,
  });

  return result;
};

export const UserDataService = {
  createUserData,
  getUserData,
  updateUserData,
};
