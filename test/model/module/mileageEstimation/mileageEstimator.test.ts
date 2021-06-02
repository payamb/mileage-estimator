import { Vehicle } from './../../../../src/model/vehicle';
import { MileageEstimator } from '../../../../src/module/mileageEstimation/mileageEstimator';
import { AdvertisedForSaleEvent } from './../../../../src/model/event/advertisedForSale';
import { MotTestEvent } from './../../../../src/model/event/MotTest';

describe('EstimateMileage Module', () => {
  it('Should calculate average annual mileage correctly with events available for every year', () => {

    const vehicle = new Vehicle({
      id: 123,
      make: 'ford',
      model: '1989',
      vrm: 'a123ed',
      firstRegistrationDate: new Date(),
      events: []
    });

    vehicle.events.push(new AdvertisedForSaleEvent({
      date: new Date('2020-12-10T03:24:00'),
      mileage: 500
    }));

    vehicle.events.push(new AdvertisedForSaleEvent({
      date: new Date('2020-10-01T03:24:00'),
      mileage: 200
    }));

    vehicle.events.push(new MotTestEvent({
      date: new Date('2021-05-01T01:01:00'),
      mileage: 1000
    }));

    const estimator = new MileageEstimator()
      .createFrom(vehicle);

    expect(estimator.calculateAnnualMileage()).toEqual(750);
  });
});