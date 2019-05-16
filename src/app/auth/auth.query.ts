import { Injectable } from '@angular/core';

import { QueryEntity } from '@datorama/akita';

import { State, UserStore } from './user.store';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends QueryEntity<State, User> {
  user$ = this.select();

  constructor(protected store: UserStore) {
    super(store);
  }

}
