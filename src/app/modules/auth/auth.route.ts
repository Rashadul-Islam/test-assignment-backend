import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

router.post('/logout', auth(), AuthController.userLogout);

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  auth(),
  AuthController.refreshToken
);

export const AuthRoutes = router;
