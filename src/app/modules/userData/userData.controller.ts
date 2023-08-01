import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserDataService } from './userData.service';
import { IUserData } from './userData.interface';

const createUserData: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = { user: req?.user?._id, ...req.body };
    const result = await UserDataService.createUserData(data);

    sendResponse<IUserData>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User data created successfully !',
      data: result,
    });
  }
);

const getUserData: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserDataService.getUserData(req?.user?._id);

    sendResponse<IUserData>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User data retrieved successfully !',
      data: result,
    });
  }
);

const updateUserData: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserDataService.updateUserData(
      req?.user?._id,
      req?.body
    );

    sendResponse<IUserData>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User data upadte successfully !',
      data: result,
    });
  }
);

export const UserDataController = {
  createUserData,
  getUserData,
  updateUserData,
};
