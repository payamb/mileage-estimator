// Calculate the average annual mileage using the events in the timeline

// Estimate the vehicle’s current mileage by projecting from the most recent, event using the average annual mileage

// If there are no timeline events with mileage, calculate using 7,900 miles per year as the average
import { Vehicle } from './../../model/vehicle';
import { MileageEstimatorInterface } from './mileageEstimatorInterface';

export class MileageEstimator implements MileageEstimatorInterface {
  vehicle: Vehicle;

  createFrom(vehicle: Vehicle) {
    return Object.assign(this, {vehicle: vehicle});
    // this.vehicle = vehicle;
    // return this;
  };

  calculateAnnualMileage(): number {
    return 0;
  }
} 