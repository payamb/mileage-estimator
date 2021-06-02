import { VehicleEventInterface } from './../vehicleEventInterfce';

export class AdvertisedForSaleEvent implements VehicleEventInterface {
  date: Date;
  mileage: number;
  price: number;

  constructor(props?: object) {
    Object.assign(this, props);
  }

  hasMileageData(): boolean {
    return (this.mileage !== undefined) ?? false;
  }
}