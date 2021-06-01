import { Vehicle } from './vehicle';
import { VehicleInterface } from './vehicleInterface';
import { VehicleEventInterface } from './vehicleEventInterfce';

export class VehicleBuilder implements Partial<VehicleInterface> {
  id: number;
  vrm: string;
  make: string;
  model: string;
  firstRegistrationDate: Date;
  events: Array<VehicleEventInterface> = [];

  withId(id: number): this & Pick<VehicleInterface, 'id'> {
    return Object.assign(this, { id: id });
  }

  withVrm(vrm: string): this & Pick<VehicleInterface, 'vrm'> {
    return Object.assign(this, { vrm: vrm });
  }

  withMake(make: string): this & Pick<VehicleInterface, 'make'> {
    return Object.assign(this, { make: make });
  }

  withModel(model: string): this & Pick<VehicleInterface, 'make'> {
    return Object.assign(this, { model: model });
  }

  withFirstRegistrationDate(date: Date): this & Pick<VehicleInterface, 'firstRegistrationDate'> {
    return Object.assign(this, { firstRegistrationDate: date });
  }

  withEvents(events: Array<VehicleEventInterface>): this & Pick<VehicleInterface, 'events'> {
    return Object.assign(this, { events: events });
  }

  build(this: Vehicle) {
    return new Vehicle(this);
  }
}