import { ID } from '@datorama/akita';

export interface Campaign {
  id: ID;
  title: string;
  scheduled: boolean;
  lastRan?: Date | number;
}
