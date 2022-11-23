import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import MongoODM from './MongoODM';

export default class CarODM extends MongoODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: String, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    
    super('Car', schema);
  }
}