import { VehicleEventInterface } from './vehicleEventInterfce';

export interface VehicleInterface {
  id: number;
  vrm: string;
  make: string;
  model: string;
  firstRegistrationDate: Date;
  events: VehicleEventInterface[]
}