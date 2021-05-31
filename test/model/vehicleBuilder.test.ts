import { VehicleBuilder } from '../../src/model/vehicleBuilder';

describe('VehicleBuilder', () => {
  it('Should compose properties and build a Vehicle object', () => {
    const vehicle =  new VehicleBuilder();
    expect(vehicle instanceof Vehicle).toBe(true)
  });
});