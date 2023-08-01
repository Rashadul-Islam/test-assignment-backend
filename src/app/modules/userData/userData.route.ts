import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserDataValidation } from './userData.validation';
import { UserDataController } from './userData.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-user-data',
  validateRequest(UserDataValidation.createUserDataZodSchema),
  auth(),
  UserDataController.createUserData
);

router.patch(
  '/update-user-data',
  validateRequest(UserDataValidation.createUserDataZodSchema),
  auth(),
  UserDataController.updateUserData
);

router.get('/', auth(), UserDataController.getUserData);

export const UserDataRoutes = router;
