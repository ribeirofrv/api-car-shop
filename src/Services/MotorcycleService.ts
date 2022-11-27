// import { isValidObjectId } from 'mongoose';

import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

// import UnprocessableEntityError from '../Errors/UnprocessableEntityError';
// import NotFoundError from '../Errors/NotFoundError';

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
}
