import IVehicle from './IVehicle';
import Category from './Utils/MotorcycleCategory';

export default interface IMotorcycle extends IVehicle {
  category: Category;
  engineCapacity: number;
}
