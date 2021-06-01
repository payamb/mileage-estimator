import { Vehicle } from '../../src/model/vehicle';
import { VehicleBuilder } from '../../src/model/vehicleBuilder';

describe('VehicleBuilder', () => {
  it('Should compose properties and build a Vehicle object', () => {
    const regDate = new Date();
    const vehicle = new VehicleBuilder()
      .withId(123)
      .withMake('Ford')
      .withModel('1989')
      .withVrm('a1233b')
      .withFirstRegistrationDate(regDate)
      .build();

    expect(vehicle instanceof Vehicle).toEqual(true);
    expect(vehicle.id).toEqual(123);
    expect(vehicle.make).toEqual('Ford');
    expect(vehicle.model).toEqual('1989');
    expect(vehicle.vrm).toEqual('a1233b');
    expect(vehicle.firstRegistrationDate).toEqual(regDate);
    expect(vehicle.events).toEqual([]);
  });
});