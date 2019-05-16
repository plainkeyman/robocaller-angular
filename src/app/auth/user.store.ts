import { Injectable } from '@angular/core';

import { EntityState, StoreConfig, EntityStore } from '@datorama/akita';

import { User } from './user.model';
import { Campaign } from '../robocaller/campaign/state';

export interface State extends EntityState<User> { }

const mockCampaigns = [
  {
    id: '',
    title: 'Title',
    scheduled: false,
    lastRan: Date.now()
  } as Campaign
];

const initalState: User = {
  uid: '',
  email: '',
  displayName: '',
  photoURL: '',
  campaigns: mockCampaigns
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
