import { VehicleEventInterface } from './../vehicleEventInterfce';

export class VrmChangeEvent implements VehicleEventInterface {
  date: Date;
  fromVrm: string;
  toVRM: string;

  constructor(props?: object) {
    Object.assign(this, props);
  }

  hasMileageData(): boolean {
    return false;
  }
}