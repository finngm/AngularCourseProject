import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.action';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    private storeSub: Subscription;

    constructor(private authService: AuthService, private router: Router, private store: Store<fromApp.AppState>) {}

    ngOnInit() {
        this.storeSub = this.store.select('auth').subscribe(authState => {
            this.isLoading = authState.loading;
            this.error = authState.authError;
        });
    }

    ngOnDestroy() {
        if (this.storeSub) { this.storeSub.unsubscribe(); }
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        // let authObs: Observable<AuthResponseData>

        // this.isLoading = true;
        if (this.isLoginMode) {
            this.store.dispatch(new AuthActions.LoginStart({email: email, password: password}))
            // authObs = this.authService.login(email, password)
        } else {
            this.store.dispatch(new AuthActions.SignupStart({ email: email, password: password }))
            // authObs = this.authService.signup(email, password)
        }

        // authObs.subscribe(
        //     resData => {
        //         console.log(resData);
        //         this.isLoading = false;
        //         this.router.navigate(['/recipes']);
        //     },
        //     errorMessage => {
        //         console.log(errorMessage);
        //         this.error = errorMessage;
        //         this.isLoading = false;
        //     }
        // );

        form.reset();
    }

    onHandleError() {
        this.store.dispatch(new AuthActions.ClearError());
    }
}