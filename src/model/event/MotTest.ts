import { VehicleEventInterface } from './../vehicleEventInterfce';

export class MotTestEvent implements VehicleEventInterface {
  date: Date;
  mileage: number;
  result: boolean;

  constructor(props?: object) {
    Object.assign(this, props);
  }

  hasMileageData(): boolean {
    return (this.mileage !== undefined) ?? false;
  }
}