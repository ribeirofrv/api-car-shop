import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';

describe('CarService', function () {
  const carService = new CarService();

  afterEach(function () {
    sinon.restore();
  });

  describe('createCar', function () {
    it('should create a Car', async function () {
      const car: ICar = {
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carDomain = new Car(car);

      sinon.stub(Model, 'create').resolves(car);

      const createdCar = await carService.createCar(car);

      expect(createdCar).to.deep.equal(carDomain);
    });
  });

  describe('getCars', function () {
    it('should return an array of Cars', async function () {
      const carsArray: ICar[] = [
        {
          model: 'Marea',
          year: 2002,
          color: 'Black',
          status: true,
          buyValue: 15.990,
          doorsQty: 4,
          seatsQty: 5,
        },
        {
          model: 'Tempra',
          year: 1995,
          color: 'Black',
          buyValue: 39.000,
          doorsQty: 2,
          seatsQty: 5,
        },
      ];

      const carsDomainArray = carsArray.map((car) => new Car(car));

      sinon.stub(Model, 'find').resolves(carsArray);

      const cars = await carService.getCars();

      expect(cars).to.deep.equal(carsDomainArray);
    });
  });

  describe('getCarById', function () {
    it('should return one car by id', async function () {
      const car: ICar = {
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carDomain = new Car(car);

      sinon.stub(Model, 'findById').resolves(car);

      const foundCar = await carService.getCarById('638188346e8b6f22d8bcef7e');

      expect(foundCar).to.deep.equal(carDomain);
    });
  });
});
