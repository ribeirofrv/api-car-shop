import { Model, models, Schema, model } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(modelName: string, schema: Schema) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(_id: string): Promise<T | null> {
    return this.model.findById({ _id });
  }

  /** https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype */
  public async updateById(_id: string, vehicle: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate({ _id }, vehicle, { new: true });
  }
}
