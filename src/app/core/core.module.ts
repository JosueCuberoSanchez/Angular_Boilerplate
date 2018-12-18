import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AuthGuardService } from './services/authentication/auth-guard.service';
import { AuthService } from './services/authentication/auth.service';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
  ],
  providers: [
    AuthGuardService,
    AuthService
  ],
  exports: []
})
export class CoreModule { }
