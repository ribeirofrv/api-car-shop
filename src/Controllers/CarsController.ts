import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarsController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;
    this.response = response;
    this.next = next;
    this.service = new CarService();
  }

  public async createCar(): Promise<Response | undefined> {
    const car: ICar = {
      model: this.request.body.model,
      year: this.request.body.year,
      color: this.request.body.color,
      status: this.request.body.status,
      buyValue: this.request.body.buyValue,
      doorsQty: this.request.body.doorsQty,
      seatsQty: this.request.body.seatsQty,
    };

    try {
      const newCar = await this.service.createCar(car);
      return this.response.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCars(): Promise<Response | undefined> {
    try {
      const cars = await this.service.getCars();
      return this.response.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarById(): Promise<Response | undefined> {
    const { id } = this.request.params;

    try {
      const car = await this.service.getCarById(id);
      return this.response.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}
