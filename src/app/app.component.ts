import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

// Modules
import { SharedModule } from './shared/shared.module';

// Services
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthGuardService } from './core/services/authentication/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  authenticated: boolean;

  constructor(private spinner:NgxSpinnerService, private authGuardService:AuthGuardService, private router:Router) {

    // subscribe to a route observer, each time route changes it will decide if navbar is shown
    router.events.subscribe((val) =>
      this.authenticated = this.authGuardService.isLoggedIn()
    );

  }

  ngOnInit() {

    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 2000);

  }

  logout() {
    this.authGuardService.logout();
  }
}
