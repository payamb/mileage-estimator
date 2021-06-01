import { Vehicle } from '../../src/model/vehicle';
import { AdvertisedForSaleEvent } from './../../src/model/event/advertisedForSale';
// import { MotTestEvent } from './../../src/model/event/MotTest';
// import { VrmChangeEvent } from './../../src/model/event/VrmChange';

describe('VehicleBuilder', () => {
  it('Should be able to add different event types to vehicle event timeline', () => {
    const vehicle = new Vehicle({
      id: 123, 
      make: 'ford', 
      model: '1989', 
      vrm: 'a123ed', 
      firstRegistrationDate: new Date(),
      events: []
    })

    const advertisedForSaleEvent = new AdvertisedForSaleEvent();
    // const MotTest = new MotTestEvent();
    vehicle.events.push({});
  });
});