import { isValidObjectId } from 'mongoose';

import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

import UnprocessableEntityError from '../Errors/UnprocessableEntityError';
import NotFoundError from '../Errors/NotFoundError';

export default class MotorcycleService {
  private MotorcycleODM: MotorcycleODM;

  constructor() {
    this.MotorcycleODM = new MotorcycleODM();
  }

  private createMotorcycleDomain(moto: IMotorcycle | null): Motorcycle | null | undefined {
    if (moto) return new Motorcycle(moto);
    return null;
  }

  public async createMotorcycle(moto: IMotorcycle) {
    const newMotorcycle = await this.MotorcycleODM.create(moto);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getMotorcycles() {
    const motorcycles = await this.MotorcycleODM.getAll();
    return motorcycles.map((moto) => this.createMotorcycleDomain(moto));
  }

  public async getMotorcycleById(id: string) {
    if (!isValidObjectId(id)) throw new UnprocessableEntityError('Invalid mongo id');

    const motorcycle = await this.MotorcycleODM.getById(id);

    if (!motorcycle) throw new NotFoundError('Motorcycle not found');
    
    return this.createMotorcycleDomain(motorcycle);
  }

  public async updateMotorcycle(id: string, moto: IMotorcycle) {
    if (!isValidObjectId(id)) throw new UnprocessableEntityError('Invalid mongo id');

    const updatedMotorcycle = await this.MotorcycleODM.updateById(id, moto);

    if (!updatedMotorcycle) throw new NotFoundError('Motorcycle not found');

    return this.createMotorcycleDomain(updatedMotorcycle);
  }
}
