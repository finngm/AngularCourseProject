import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { User } from './user.model';
import { Store } from '@ngrx/store';
import * as FromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.action';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    private expirationTimer: any;

    constructor(private store: Store<FromApp.AppState>) {}

    setLogoutTimer(expirationDuration: number) {
        this.expirationTimer = setTimeout(() => {
            this.store.dispatch(new AuthActions.Logout());
        }, expirationDuration);
    }

    clearLogoutTimer() {
        if (this.expirationTimer) {
            clearTimeout(this.expirationTimer);
            this.expirationTimer = null;
        }
    }
}