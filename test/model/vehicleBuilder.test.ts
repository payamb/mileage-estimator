import { Vehicle } from '../../src/model/vehicle';
import { VehicleBuilder } from '../../src/model/vehicleBuilder';

describe('VehicleBuilder', () => {
  it('Should compose properties and build a Vehicle object', () => {
    const vehicle =  new VehicleBuilder().build();

    expect(vehicle instanceof Vehicle).toBe(true)
  });
});