import { Component, OnInit } from '@angular/core';
import { AuthState } from './state/auth-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-routing-cli';

    logged: boolean = false;

    constructor(
        private authState: AuthState,
        private router: Router,
    ) {

    }

    ngOnInit() {
        this.authState.isLogged().subscribe(loggedIn => {            
            this.logged = loggedIn;
            if (loggedIn)
                this.router.navigate(['/']);
            else
                this.router.navigate(['/login']);
        });
    }

    logout = () => this.authState.logOut();

}
