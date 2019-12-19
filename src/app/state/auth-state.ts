import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { shareReplay, distinctUntilChanged, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class AuthState {

    private loggedInSubject: BehaviorSubject<boolean>;
    private loggedIn: Observable<boolean>;

    constructor() {
        this.loggedInSubject = new BehaviorSubject<boolean>(false);        
        this.loggedIn = this.loggedInSubject.pipe(
            shareReplay(1),
        );        
    }

    isLogged = () : Observable<boolean> => this.loggedIn.pipe(
        distinctUntilChanged()
    );

    logIn = () => this.loggedInSubject.next(true);
    logOut = () => this.loggedInSubject.next(false);

}
