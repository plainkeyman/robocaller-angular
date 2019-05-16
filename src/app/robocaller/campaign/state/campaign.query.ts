import { QueryEntity } from '@datorama/akita';
import { CampaignStore, CampaignState, campaignStore } from './campaign.store';
import { Campaign } from './campaign.model';

export class CampaignQuery extends QueryEntity<CampaignState, Campaign> {

  constructor(protected store: CampaignStore) {
    super(store);
  }

}

export const campaignQuery = new CampaignQuery(campaignStore);
