import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, CanActivate } from '@angular/router';

// characters import is not needed, as it is a lazy loaded module
import { LoginComponent } from '../featured/authentication/components/login/login.component';
import { PlanetComponent } from '../featured/planets/components/planet/planet.component';
import { VehicleComponent } from '../featured/vehicles/components/vehicle/vehicle.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

import { AuthGuardService } from '../core/services/authentication/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'character', loadChildren: 'app/featured/characters/character.module#CharacterModule', canActivate: [AuthGuardService] },
  { path: 'planet/:id', component: PlanetComponent, canActivate: [AuthGuardService]  },
  { path: 'vehicle/:id', component: VehicleComponent, canActivate: [AuthGuardService] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})], //this strategy will load the lazy modules on background
  exports: [RouterModule]
})
export class AppRoutingModule { }
