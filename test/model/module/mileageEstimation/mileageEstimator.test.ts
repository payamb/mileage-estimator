import { Vehicle } from './../../../../src/model/vehicle';
import { MileageEstimator } from '../../../../src/module/mileageEstimation/mileageEstimator';
import { AdvertisedForSaleEvent } from './../../../../src/model/event/advertisedForSale';
// import { MotTestEvent } from './../../src/model/event/MotTest';

describe('EstimateMileage Module', () => {
  it('Should calculate average annual mileage', () => {

    const vehicle = new Vehicle({
      id: 123,
      make: 'ford',
      model: '1989',
      vrm: 'a123ed',
      firstRegistrationDate: new Date(),
      events: []
    });

    const advertisedForSaleEvent = new AdvertisedForSaleEvent();
    
    vehicle
      .events
      .push(advertisedForSaleEvent);

    const estimator = new MileageEstimator()
      .createFrom(vehicle);

    expect(estimator.calculateAnnualMileage()).toEqual(0);
  });
});