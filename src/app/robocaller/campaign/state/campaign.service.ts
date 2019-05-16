import { ID } from '@datorama/akita';
import { CampaignStore, campaignStore } from './campaign.store';

export class CampaignService {

  constructor(private campaignStore: CampaignStore) {
  }

}

export const campaignService = new CampaignService(campaignStore);