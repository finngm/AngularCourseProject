import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.action';
import * as RecipeActions from '../recipes/store/recipe.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  isAuthenticated = false;
  private userSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.userSubscription = this.store.select('auth')
      .pipe(map(authState => authState.user))
      .subscribe(user => {
        this.isAuthenticated = !user ? false : true;
      })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onSaveData() {
    // this.dataStorageService.storeRecipes();
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    // this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
    // this.authService.logout();
  }
}