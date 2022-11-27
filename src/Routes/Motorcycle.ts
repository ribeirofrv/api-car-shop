import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter
  .post('/motorcycles', (req, res, next) =>
    new MotorcycleController(req, res, next).createMotorcycle());

export default motorcycleRouter;
