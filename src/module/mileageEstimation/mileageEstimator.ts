import { Vehicle } from './../../model/vehicle';
import { VehicleEventInterface } from './../../model/vehicleEventInterfce';
import { MileageEstimatorInterface } from './mileageEstimatorInterface';

export class MileageEstimator implements MileageEstimatorInterface {
  vehicle: Vehicle;
  defaultAnnualMileage = 7900;

  createFrom(vehicle: Vehicle) {
    return Object.assign(this, { vehicle });
  };

  calculateAnnualMileage(): number {
    const events = this.vehicle.events;

    if (events.length === 0) return this.defaultAnnualMileage;

    events.sort((a: VehicleEventInterface, b: VehicleEventInterface) => {
      return a.date.getTime() - b.date.getTime();
    });

    const yearRange = this.getYearRange(events[0].date, new Date());
    const mileageHistory = this.groupMileageByYear(events, yearRange);
    const NofRecords = mileageHistory.length;

    if (!mileageHistory.length) {
      return 0;
    }

    const [lastKnownMileage]:number[] = Object.values(mileageHistory[NofRecords - 1]);

    const averageMileage = this.divideMileageByNofYears(
      lastKnownMileage,
      mileageHistory.length
    );

    return averageMileage;
  }

  private divideMileageByNofYears(mileage: number, numberOfYears: number): number {
    if (mileage <= 0) return 0;

    const average = (mileage / numberOfYears).toFixed(0);
    return parseInt(average, 10);
  }

  private getYearRange(from: Date, to: Date): number[] {
    const currentYear = new Date().getUTCFullYear();
    const startYear = from.getUTCFullYear();

    return Array((currentYear - startYear) + 1)
      .fill('')
      .map((v, idx) => currentYear - idx);
  }

  private groupMileageByYear(events: VehicleEventInterface[], yearRange: number[]) {
    if (events.length === 0) return [];

    const output: { [x: number]: number }[] = [];

    yearRange
      .reverse()
      .map((year: number, index, source) => {
        const eventsInYear = events
          .filter((event: VehicleEventInterface) => {
            return event.date.getFullYear() === year && event.hasMileageData();
          });

        const mostRecentEvent = eventsInYear.pop();
        return mostRecentEvent?.mileage || 0;
      })
      .reduce((previousValue, current, index) => {
        if (current === 0) {
          current = previousValue + this.defaultAnnualMileage;
        }

        const year = yearRange[index];
        output.push({ [year]: current });
        return current;
      }, 0);

    return output;
  }
}