import { VehicleInterface } from './vehicleInterface';

export class Vehicle implements VehicleInterface {
  id: number;
  vrm: string;
  make: string;
  model: string;
  firstRegistrationDate: Date;

  constructor(vehicle: Vehicle) {
    Object.assign(this, vehicle);
  }
}