import { VehicleEventInterface } from './../vehicleEventInterfce';

export class VrmChange implements VehicleEventInterface {
  date: Date;
  fromVrm: string;
  toVRM: string;

  hasMileageData(): boolean {
    return false;
  }
}