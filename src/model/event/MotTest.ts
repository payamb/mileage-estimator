import { VehicleEventInterface } from './../vehicleEventInterfce';

export class MotTestEvent implements VehicleEventInterface {
  date: Date;
  mileage: number;
  result: boolean;

  hasMileageData(): boolean {
    return true;
  }
}