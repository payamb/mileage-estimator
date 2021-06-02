import { Vehicle } from '../../src/model/vehicle';
import { AdvertisedForSaleEvent } from './../../src/model/event/advertisedForSale';
import { MotTestEvent } from './../../src/model/event/MotTest';
import { VrmChangeEvent } from './../../src/model/event/VrmChange';

describe('Vehicle', () => {
  it('Should be able to add different event types to vehicle event timeline', () => {
    const vehicle = new Vehicle({
      id: 123, 
      make: 'ford', 
      model: '1989', 
      vrm: 'a123ed', 
      firstRegistrationDate: new Date(),
      events: []
    });

    const advertisedForSaleEvent = new AdvertisedForSaleEvent();
    const MotTest = new MotTestEvent();
    const VrmChange = new VrmChangeEvent();

    vehicle.events.push(advertisedForSaleEvent);
    vehicle.events.push(MotTest);
    vehicle.events.push(VrmChange);

    const asseration = vehicle.events.every(event => {
      return event instanceof AdvertisedForSaleEvent ||
        event instanceof MotTestEvent ||
        event instanceof VrmChangeEvent
    });

    expect(asseration).toEqual(true);
    expect(vehicle.events.length).toEqual(3);
  });
});