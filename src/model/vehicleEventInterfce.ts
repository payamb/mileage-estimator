export interface VehicleEventInterface {
  date: Date;
  mileage?: number;

  hasMileageData(): boolean;
}