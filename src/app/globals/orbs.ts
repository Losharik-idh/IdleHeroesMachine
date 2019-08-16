import { ScrollDataGroup } from './interfaces';

export const MONTHLY_ORBS_DATA: Array<ScrollDataGroup> = [
  {
    title: 'Free orbs',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'dailyLoginOrbEvent-Orb',
        description: 'Daily login reward during orb event',
        orbs: 7
      },
    ]
  },
];

