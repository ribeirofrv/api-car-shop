import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motocycle: IMotorcycle) {
    super(motocycle);
    this.category = motocycle.category;
    this.engineCapacity = motocycle.engineCapacity;
  }
}
