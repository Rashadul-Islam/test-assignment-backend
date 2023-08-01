import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { SectorRoutes } from '../modules/sector/sector.route';
import { UserDataRoutes } from '../modules/userData/userData.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/sectors',
    route: SectorRoutes,
  },
  {
    path: '/userData',
    route: UserDataRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
