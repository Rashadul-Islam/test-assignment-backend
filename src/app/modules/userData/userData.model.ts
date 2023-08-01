import { Schema, model } from 'mongoose';
import { IUserData, userDataModel } from './userData.interface';

export const UserDataSchema = new Schema<IUserData, userDataModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    sector: { type: [String], required: true },
    agreeTerms: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const UserData = model<IUserData, userDataModel>(
  'UserData',
  UserDataSchema
);
