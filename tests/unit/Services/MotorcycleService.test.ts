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
});
