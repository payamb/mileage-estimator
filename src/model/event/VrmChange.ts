import { VehicleEventInterface } from './../vehicleEventInterfce';

export class VrmChangeEvent implements VehicleEventInterface {
  date: Date;
  fromVrm: string;
  toVRM: string;

  hasMileageData(): boolean {
    return false;
  }
}