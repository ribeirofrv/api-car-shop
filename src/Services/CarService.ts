import { isValidObjectId } from 'mongoose';

import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';
import UnprocessableEntityError from '../Errors/UnprocessableEntityError';
import NotFoundError from '../Errors/NotFoundError';

export default class CarService {
  private carODM: CarODM;

  constructor() {
    this.carODM = new CarODM();
  }

  private createCarDomain(car: ICar | null): Car | null | undefined {
    if (car) return new Car(car);
    return null;
  }

  public async createCar(car: ICar) {
    const newCar = await this.carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getCars() {
    const cars = await this.carODM.getAll();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async getCarById(id: string) {
    if (!isValidObjectId(id)) throw new UnprocessableEntityError('Invalid mongo id');
    
    const car = await this.carODM.getById(id);
    
    if (!car) throw new NotFoundError('Car not found');
    
    return this.createCarDomain(car);
  }
}
