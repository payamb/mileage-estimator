import { Vehicle } from './../../model/vehicle';

interface MileageEstimatorInterface {
  vehicle: Vehicle;

  constructor(vehicle: Vehicle): MileageEstimatorInterface;
  calculateAnnualMileage(): number;
}