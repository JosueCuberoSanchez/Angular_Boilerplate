import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';

// Imports
import './shared/vendor/imports';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CharacterModule } from './featured/characters/character.module';
import { PlanetModule } from './featured/planets/planet.module';
import { VehicleModule } from './featured/vehicles/vehicle.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CharacterModule,
    PlanetModule,
    VehicleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
