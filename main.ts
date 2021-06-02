import { VehicleBuilder } from './src/model/vehicleBuilder';
import { MileageEstimator } from './src/module/mileageEstimation/mileageEstimator';

const output = new VehicleBuilder()
  .withId(123)
  .withMake('Ford')
  .withModel('1989')
  .build();

 const est = new MileageEstimator().createFrom(output);

console.log(est);