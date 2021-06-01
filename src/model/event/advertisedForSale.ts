import { VehicleEventInterface } from './../vehicleEventInterfce';

export class AdvertisedForSale implements VehicleEventInterface {
  date: Date;
  mileage: number;
  price: number;

  hasMileageData(): boolean {
    return true;
  }
}