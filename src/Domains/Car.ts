import ICar from '../Interfaces/ICar';

export default class Car {
  private doorsQty: number;
  private seatsQty: number;
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  // public get doorsQty(): number {
  //   return this._doorsQty;
  // }

  // public set doorsQty(doorsQty: number) {
  //   this._doorsQty = doorsQty;
  // }

  // public get seatsQty(): number {
  //   return this._seatsQty;
  // }

  // public set seatsQty(seatsQty: number) {
  //   this._seatsQty = seatsQty;
  // }
}
