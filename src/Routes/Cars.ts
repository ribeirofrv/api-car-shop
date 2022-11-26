import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carsRouter = Router();

carsRouter.post('/cars', (req, res, next) =>
  new CarsController(req, res, next).createCar())
  .get('/cars', (req, res, next) =>
    new CarsController(req, res, next).getCars())
  .get('/cars/:id', (req, res, next) =>
    new CarsController(req, res, next).getCarById())
  .put('/cars/:id', (req, res, next) =>
    new CarsController(req, res, next).updateCar());

export default carsRouter;
