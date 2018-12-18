import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PlanetComponent } from '../featured/planets/components/planet/planet.component';
import { VehicleComponent } from '../featured/vehicles/components/vehicle/vehicle.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'character', loadChildren: 'app/featured/characters/character.module#CharacterModule' },
  { path: 'planet/:id', component: PlanetComponent },
  { path: 'vehicle/:id', component: VehicleComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})], //this strategy will load the lazy modules on background
  exports: [RouterModule]
})
export class AppRoutingModule { }
