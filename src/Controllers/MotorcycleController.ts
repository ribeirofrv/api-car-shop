import { Request, Response, NextFunction } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;
    this.response = response;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async createMotorcycle(): Promise<Response | undefined> {
    try {
      const motorcycle: IMotorcycle = {
        model: this.request.body.model,
        year: this.request.body.year,
        color: this.request.body.color,
        status: this.request.body.status,
        buyValue: this.request.body.buyValue,
        category: this.request.body.category,
        engineCapacity: this.request.body.engineCapacity,
      };

      const newMotorcycle = await this.service.createMotorcycle(motorcycle);
      return this.response.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}
