// Calculate the average annual mileage using the events in the timeline

// Estimate the vehicle’s current mileage by projecting from the most recent, event using the average annual mileage

// If there are no timeline events with mileage, calculate using 7,900 miles per year as the average

import { Vehicle } from './../../model/vehicle';
import { VehicleEventInterface } from './../../model/vehicleEventInterfce';
import { MileageEstimatorInterface } from './mileageEstimatorInterface';

export class MileageEstimator implements MileageEstimatorInterface {
  vehicle: Vehicle;
  defaultAnnualMileage = 7900;

  createFrom(vehicle: Vehicle) {
    return Object.assign(this, { vehicle: vehicle });
  };

  calculateAnnualMileage(): number {
    const events = this.vehicle.events;

    events.sort((a: VehicleEventInterface, b: VehicleEventInterface) => {
      return a.date.getTime() - b.date.getTime();
    });

    const mileageByYear = this.groupMileageByYear(events, this.defaultAnnualMileage);
    const totalMileage = mileageByYear.reduce(
      (accumulator, currentValue, index, source) => {
        return (accumulator ?? 0) + (currentValue ?? 0)
      }, 0);

    const averageMileage = this.divideMileageByNofYears(totalMileage ?? 0, mileageByYear.length);

    return averageMileage;
  }

  private divideMileageByNofYears(mileage: number, numberOfYears: number): number {
    if (mileage <= 0) return 0;
    
    const average = (mileage / numberOfYears).toFixed(0);
    return parseInt(average);
  }

  private getYearRange(from: Date): Array<number> {
    const currentYear = new Date().getUTCFullYear();
    const startYear = from.getUTCFullYear();

    return Array((currentYear - startYear) + 1)
      .fill('')
      .map((v, idx) => currentYear - idx);
  }

  private groupMileageByYear(events: Array<VehicleEventInterface>, defaultAnnualMileage: number) {
    if (events.length <= 0) return [];

    const yearRange = this.getYearRange(events[0].date);

    const output = yearRange.map((year: number) => {
      const eventsInYear = events
        .filter((event: VehicleEventInterface) => {
          return event.date.getFullYear() === year && event.hasMileageData();
        });

      const mostRecentEvent = eventsInYear.pop();
      return mostRecentEvent ? mostRecentEvent.mileage : defaultAnnualMileage;
    });

    return output;
  }
}