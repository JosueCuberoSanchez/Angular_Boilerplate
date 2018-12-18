import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthService, private router:Router) {}

  login(): boolean {
    this.authService.login();
    this.router.navigate(['character/list']);
    return true;
  }

  logout(): boolean {
    this.authService.logout();
    this.router.navigate(['login']);
    return true;
  }

  isLoggedIn(): boolean {
    if (this.authService.isAuthenticated())
      return true;
    return false;
  }
  
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
