import * as Scrolls from './scrolls';
import * as Orbs from './orbs';
import * as ArenaTokens from './arenaTokens';
import { ScrollDataGroup } from './interfaces';

export const TARGET_EVENTS = [
  {
    event: 'Christmas 2019',
    date: '2019-12-26T23:00:00.000Z',
    neededPerRound: 500,
    maxRounds: 4,
    duration: 7,
  },
  {
    event: 'Chinese New Year',
    date: '2020-02-14T23:00:00.000Z',
    neededPerRound: 500,
    maxRounds: 4,
    duration: 7,
  },
  {
    event: 'Anniversary 2020',
    date: '2020-06-14T23:00:00.000Z',
    neededPerRound: 500,
    maxRounds: 4,
    duration: 7,
  },
];

export const MONTHLY_SCROLLS_DATA: Array<ScrollDataGroup> = Scrolls.MONTHLY_SCROLLS_DATA;
export const MONTHLY_ORBS_DATA: Array<ScrollDataGroup> = Orbs.MONTHLY_ORBS_DATA;
export const MONTHLY_ARENA_TOKENS_DATA: Array<ScrollDataGroup> = ArenaTokens.MONTHLY_ARENA_TOKENS_DATA;
