import { Component, OnInit } from '@angular/core';
import { AuthState } from '../state/auth-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(
        private authState: AuthState,
        private router: Router,
    ) { }    

    logIn = () => this.authState.logIn();

}
