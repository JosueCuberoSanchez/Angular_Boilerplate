import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

// Components
import { PlanetComponent } from './components/planet/planet.component';

@NgModule({
  declarations: [
    PlanetComponent
  ],
  imports: [
    RouterModule
  ],
  providers: []
})
export class PlanetModule { }
