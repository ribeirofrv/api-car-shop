import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter
  .post('/motorcycles', (req, res, next) =>
    new MotorcycleController(req, res, next).createMotorcycle())
  .get('/motorcycles', (req, res, next) =>
    new MotorcycleController(req, res, next).getMotorcycles())
  .get('/motorcycles/:id', (req, res, next) =>
    new MotorcycleController(req, res, next).getMotorcycleById())
  .put('/motorcycles/:id', (req, res, next) =>
    new MotorcycleController(req, res, next).updateMotorcycle());

export default motorcycleRouter;
