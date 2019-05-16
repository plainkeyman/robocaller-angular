import { Component, OnInit } from '@angular/core';
import { AuthQuery } from '@auth';

@Component({
  selector: 'app-campaign-list-container',
  template: `<app-campaign-list [campaigns]="(user$ | async)?.campaigns"></app-campaign-list>`
})
export class CampaignListContainer implements OnInit {
  user$;

  constructor(private authQuery: AuthQuery) { }

  ngOnInit() {
    this.user$ = this.authQuery.select();
  }

}
