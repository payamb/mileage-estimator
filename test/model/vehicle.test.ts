import { Vehicle } from '../../src/model/vehicle';
import { VehicleBuilder } from './../../src/model/vehicleBuilder';

describe('Vehicle', () => {
  it('Should allow adding and listing events timeline', () => {
    const vehicle = new VehicleBuilder()
      .withId(123)
      .withMake('Ford')
      .withModel('1989')
      .withVrm('a1233b')
      .withFirstRegistrationDate(new Date())
      .build();

      vehicle.getEvents();
  });
});