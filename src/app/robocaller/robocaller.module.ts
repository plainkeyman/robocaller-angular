import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignListContainer } from './campaign-list/campaign-list.container';
import { NewCampaignDialogComponent } from './new-campaign-dialog/new-campaign-dialog.component';

@NgModule({
  declarations: [
    CampaignListComponent,
    CampaignListContainer,
    CampaignComponent,
    NewCampaignDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CampaignListComponent,
    CampaignListContainer,
    CampaignComponent
  ],
  entryComponents: [NewCampaignDialogComponent]
})
export class RobocallerModule { }
