import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

// Components
import { VehicleComponent } from './components/vehicle/vehicle.component';

@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    RouterModule
  ],
  providers: []
})
export class VehicleModule { }
