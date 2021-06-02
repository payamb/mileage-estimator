import { Vehicle } from './../../../../src/model/vehicle';
import { calculateMileage } from './../../../../src/module/mileageEstimation/calculateMileage';
import { AdvertisedForSaleEvent } from './../../src/model/event/advertisedForSale';
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
    vehicle.events.push(advertisedForSaleEvent);
  });
});