import { VehicleInterface } from './vehicleInterface';

export class VehicleBuilder implements VehicleInterface {
  id: number;
  vrm: string;
  make: string;
  model: string;
  firstRegistrationDate: Date;

  withId(id: number): this & Pick<VehicleInterface, 'id'> {
    this.id = id;
    return this;
  }

  withVrm(vrm: string): this & Pick<VehicleInterface, 'vrm'> {
    this.vrm = vrm;
    return this;
  }

  withMake(make: string): this & Pick<VehicleInterface, 'make'> {
    this.make = make;
    return this;
  }

  withModel(model: string): this & Pick<VehicleInterface, 'make'> {
    this.model = model;
    return this;
  }

  withFirstRegistrationDate(date: Date): this & Pick<VehicleInterface, 'firstRegistrationDate'> {
    this.firstRegistrationDate = date;
    return this;
  }
}