// This module is lazy loaded on background

import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [],
  providers: []
})
export class AuthenticationModule { }
