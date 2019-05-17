import { Component, OnInit, OnDestroy } from '@angular/core';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { AuthQuery, AuthService } from '@auth';
import { Campaign } from '../campaign/state';

@Component({
  selector: 'app-campaign-list-container',
  template: `
    <app-campaign-list
     [campaigns]="(user$ | async)?.campaigns"
     (toggleCampaign)="toggleCampaign($event)"
    ></app-campaign-list>
    <pre>{{ user$ | async | json  }}</pre>
  `
})
export class CampaignListContainer implements OnInit, OnDestroy {
  user$;

  constructor(private authService: AuthService, private authQuery: AuthQuery) { }

  ngOnInit() {
    this.user$ = this.authQuery.select();
  }

  toggleCampaign = (campaign: Campaign) => {
    this.authService.toggleCampaign(campaign).pipe(untilDestroyed(this)).subscribe();
  }

  ngOnDestroy() { /* Note: This is needed for the untilDestoryed pipe */ }

}
