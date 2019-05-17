import { Injectable } from '@angular/core';

import { QueryEntity } from '@datorama/akita';

import { AuthStore, AuthState, authStore } from './auth.store';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends QueryEntity<AuthState, Auth> {
  user$ = this.select();

  constructor(protected store: AuthStore) {
    super(store);
  }

}

export const authQuery = new AuthQuery(authStore);
