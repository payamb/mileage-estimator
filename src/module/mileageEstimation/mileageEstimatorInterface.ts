import { Vehicle } from './../../model/vehicle';

export interface MileageEstimatorInterface {
  vehicle: Vehicle;

  createFrom(vehicle: Vehicle): MileageEstimatorInterface;
  calculateAnnualMileage(): number;
}