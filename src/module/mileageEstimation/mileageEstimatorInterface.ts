import { Vehicle } from './../../model/vehicle';

interface MileageEstimator {
  vehicle: Vehicle;

  constructor(vehicle: Vehicle): MileageEstimator;
  calculateAnnualMileage(): number;
}