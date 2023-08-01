import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type IUserData = {
  user: Types.ObjectId | IUser;
  name: string;
  sector: string[];
  agreeTerms: boolean;
};

export type userDataModel = Model<IUserData, Record<string, unknown>>;
