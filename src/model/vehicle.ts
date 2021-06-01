import { VehicleInterface } from './vehicleInterface';
import { VehicleEventInterface } from './vehicleEventInterfce';

export class Vehicle implements VehicleInterface {
  id: number;
  vrm: string;
  make: string;
  model: string;
  firstRegistrationDate: Date;
  events: Array<VehicleEventInterface> = [];

  constructor(vehicle: Vehicle) {
    Object.assign(this, vehicle);
  }
}