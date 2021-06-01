import { VehicleEventInterface } from './../vehicleEventInterfce';

export class MotTest implements VehicleEventInterface {
  date: Date;
  mileage: number;
  result: boolean;

  hasMileageData(): boolean {
    return true;
  }
}