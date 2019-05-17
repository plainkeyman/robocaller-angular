import { ID } from '@datorama/akita';
import { Campaign } from '@robocaller';

export interface Auth {
  uid: ID;
  email: string;
  photoURL?: string;
  displayName?: string;
  campaigns?: Array<Campaign>;
}

export const createInitalState = () => {
  return {
    uid: '',
    email: '',
    photoURL: '',
    displayName: '',
    campaigns: []
  } as Auth;
}
