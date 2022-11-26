import { expect } from 'chai';
import sinon from 'sinon';
// import { Model } from 'mongoose';

import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';

describe('CarService', function () {
  const carService = new CarService();

  afterEach(function () {
    sinon.restore();
  });

  describe('createCar', function () {
    it('should return a Car', async function () {
      const car: ICar = {
        model: 'Marea',
        year: 2002,
        color: 'Red',
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carDomain = new Car(car);

      const carODM = {
        create: sinon.stub().resolves(car),
      };

      sinon.stub(carService, 'carODM').get(() => carODM);

      const result = await carService.createCar(car);

      expect(result).to.be.deep.equal(carDomain);
    });
  });

  describe('getCars', function () {
    it('should return an array of Car', async function () {
      const car: ICar = {
        model: 'Marea',
        year: 2002,
        color: 'Red',
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carDomain = new Car(car);

      const carODM = {
        getAll: sinon.stub().resolves([car]),
      };

      sinon.stub(carService, 'carODM').get(() => carODM);

      const result = await carService.getCars();

      expect(result).to.be.deep.equal([carDomain]);
    });
  });

  describe('getCarById', function () {
    it('should return a car', async function () {
      const car = {
        id: '638188346e8b6f22d8bcef7e',
        model: 'Marea',
        year: 2002,
        color: 'Red',
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carDomain = new Car(car);

      const carODM = {
        getById: sinon.stub().resolves(car),
      };

      sinon.stub(carService, 'carODM').get(() => carODM);

      const result = await carService.getCarById('638188346e8b6f22d8bcef7e');

      expect(result).to.be.deep.equal(carDomain);
    });
  });
});
