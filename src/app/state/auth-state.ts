import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { take, shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class AuthState {

    private loggedInSubject: Subject<boolean>;
    private loggedIn: Observable<boolean>;

    constructor() {
        console.log("Constructor");
        this.loggedInSubject = new Subject<boolean>();        
        this.loggedIn = this.loggedInSubject.pipe(
            shareReplay(1),
        );        
        
        this.loggedIn.subscribe(a => {
            console.log("SUBSCR:" + a);
        });

        this.loggedInSubject.next(false);
    }

    isLogged = () : Observable<boolean> => this.loggedIn;

    logIn = () => this.loggedInSubject.next(true);
    logOut = () => this.loggedInSubject.next(false);

}
