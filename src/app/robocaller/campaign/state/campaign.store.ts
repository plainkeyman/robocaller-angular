import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Campaign } from './campaign.model';

export interface CampaignState extends EntityState<Campaign> {}

@StoreConfig({ name: 'campaign' })
export class CampaignStore extends EntityStore<CampaignState, Campaign> {

  constructor() {
    super();
  }

}

export const campaignStore = new CampaignStore();

