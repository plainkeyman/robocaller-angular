import { Campaign } from '../robocaller/campaign/state';

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  campaigns?: Array<Campaign>;
}
