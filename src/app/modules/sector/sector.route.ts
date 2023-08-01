import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { SectorValidation } from './sector.validation';
import { SectorController } from './sector.controller';
const router = express.Router();

router.post(
  '/create-sector',
  validateRequest(SectorValidation.createSectorZodSchema),
  auth(),
  SectorController.createSector
);

router.get('/', auth(), SectorController.getAllSector);

export const SectorRoutes = router;
