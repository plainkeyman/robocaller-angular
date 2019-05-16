import { Injectable } from '@angular/core';

import { EntityState, StoreConfig, EntityStore } from '@datorama/akita';

import { User } from './user.model';

export interface State extends EntityState<User> { }

const initalState: User = {
  uid: '',
  email: '',
  displayName: '',
  photoURL: ''
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'user',
  resettable: true
})
export class UserStore extends EntityStore<State, User> {
  constructor() {
    super(initalState);
  }
}
