import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(){}

  public login() {
    localStorage.setItem('token','123');
  }

  public logout() {
    localStorage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if(token === null)
      return false;
    return true;
  }

}
