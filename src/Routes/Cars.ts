import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carsRouter = Router();

carsRouter.post('/cars', (req, res, next) =>
  new CarsController(req, res, next).createCar());

export default carsRouter;
