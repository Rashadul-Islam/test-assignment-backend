/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IUser = {
  _id?: string;
  email: string;
  password: string;
};

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, 'email' | 'password' | '_id'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
