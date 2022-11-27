import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('MotorcycleService', function () {
  const motorcycleService = new MotorcycleService();

  afterEach(function () {
    sinon.restore();
  });

  describe('createMotorcycle', function () {
    it('should create a Motorcycle', async function () {
      const motorcycle: IMotorcycle = {
        model: 'Honda CBR 600',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 1599,
        category: 'Street',
        engineCapacity: 125,
      };

      const motorcycleDomain = new Motorcycle(motorcycle);

      sinon.stub(Model, 'create').resolves(motorcycle);

      const createdMotorcycle = await motorcycleService.createMotorcycle(
        motorcycle,
      );

      expect(createdMotorcycle).to.deep.equal(motorcycleDomain);
    });
  });

  describe('getMotorcycles', function () {
    it('should return an array of Motorcycles', async function () {
      const motorcyclesArray: IMotorcycle[] = [
        {
          model: 'Honda CBR 600',
          year: 2002,
          color: 'Black',
          status: true,
          buyValue: 1599,
          category: 'Street',
          engineCapacity: 125,
        },
        {
          model: 'Honda CBR 1000',
          year: 2005,
          color: 'Black',
          status: true,
          buyValue: 1599,
          category: 'Street',
          engineCapacity: 125,
        },
      ];

      const motorcyclesDomainArray = motorcyclesArray.map(
        (motorcycle) => new Motorcycle(motorcycle),
      );

      sinon.stub(Model, 'find').resolves(motorcyclesArray);

      const motorcycles = await motorcycleService.getMotorcycles();

      expect(motorcycles).to.deep.equal(motorcyclesDomainArray);
    });
  });

  describe('getMotorcycleById', function () {
    it('should return a Motorcycle by id', async function () {
      const motorcycle: IMotorcycle = {
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };

      const motorcycleDomain = new Motorcycle(motorcycle);

      sinon.stub(Model, 'findById').resolves(motorcycle);

      const foundMotorcycle = await motorcycleService.getMotorcycleById(
        '6382e44ca86a42f63f2c0f86',
      );

      expect(foundMotorcycle).to.deep.equal(motorcycleDomain);
    });
  });
});
