import { Component, OnInit } from '@angular/core';

import { AuthGuardService } from '../../../../core/services/authentication/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authGuardService:AuthGuardService) {}

  ngOnInit(){
    this.authGuardService.logout();
  }

  login(){
    this.authGuardService.login();
  }

}
