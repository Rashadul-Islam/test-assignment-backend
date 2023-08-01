import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';

const auth =
  () =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

      if (!verifiedUser) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }

      req.user = verifiedUser;

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;