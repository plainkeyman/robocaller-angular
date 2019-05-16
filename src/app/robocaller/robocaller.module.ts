import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignListContainer } from './campaign-list/campaign-list.container';

@NgModule({
  declarations: [
    CampaignListComponent,
    CampaignListContainer,
    CampaignComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CampaignListComponent,
    CampaignListContainer,
    CampaignComponent
  ]
})
export class RobocallerModule { }
