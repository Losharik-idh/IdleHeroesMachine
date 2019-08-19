import { ScrollDataGroup } from './interfaces';

export const MONTHLY_ORBS_DATA: Array<ScrollDataGroup> = [
  {
    title: 'Can you complete Miracle (Non L/D part)?',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'miracleNonLD-Orb',
        description: 'Yes, I can complete the event',
        orbs: 10
      },
    ]
  },
  {
    title: 'Can you complete two 7★ quests?',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'tavern7starQuests-Orb',
        description: 'Yes, I can complete 2 quests',
        orbs: 10
      },
    ]
  },
  {
    title: 'How many points do you complete during the Wishing fountain event',
    selectOneOnly: true,
    subdata: [
      {
        handle: 'wishingFountain0-Orb',
        description: 'None',
        orbs: 0
      },
      {
        handle: 'wishingFountain50-Orb',
        description: '50',
        orbs: 2
      },
      {
        handle: 'wishingFountain100-Orb',
        description: '100',
        orbs: 4
      },
      {
        handle: 'wishingFountain200-Orb',
        description: '200',
        orbs: 6
      },
      {
        handle: 'wishingFountain300-Orb',
        description: '300',
        orbs: 8
      },
    ]
  },
  {
    title: 'Will you use scrolls during the Heroic Scroll event?',
    selectOneOnly: true,
    subdata: [
      {
        handle: 'heroicScrollEvent0-Orb',
        description: 'None',
        orbs: 0
      },
      {
        handle: 'heroicScrollEvent50-Orb',
        description: '50',
        orbs: 2
      },
      {
        handle: 'heroicScrollEvent100-Orb',
        description: '100',
        orbs: 4
      },
      {
        handle: 'heroicScrollEvent200-Orb',
        description: '200',
        orbs: 10
      },
      {
        handle: 'heroicScrollEvent300-Orb',
        description: '300',
        orbs: 13
      },
    ]
  },
  {
    title: 'Free orbs',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'dailyLoginOrbEvent-Orb',
        description: 'Daily login reward during Orbs event',
        orbs: 7
      },
      {
        handle: 'monthlyTavern5star-Orb',
        description: 'Monthly Event Tavern scrolls reward for 5★ quests',
        orbs: 5
      },
      {
        handle: 'monthlyTavern6star-Orb',
        description: 'Monthly Event Tavern scrolls reward for 6★ quests',
        orbs: 5
      },
      {
        handle: 'monthlyTrailOfChampion-Orb',
        description: 'Monthly Trial of the Champion rewards',
        orbs: 5
      },
      {
        handle: 'braveTrailsStage15-Orb',
        description: 'Clear Stage 15 of Day mode in Brave Trial',
        orbs: 5
      },
    ]
  },
  {
    title: 'Do you take orbs from the Campaign Drop event?',
    selectOneOnly: true,
    subdata: [
      {
        handle: 'scrollsDropEvent-Orb',
        description: 'I take Scrolls from Drop event',
        orbs: 0
      },
      {
        handle: 'splitDropEvent-Orb',
        description: 'I split between Orbs and Scrolls',
        orbs: 4
      },
      {
        handle: 'orbsDropEvent-Orb',
        description: 'I take only Orbs',
        orbs: 8
      },
    ]
  },
  {
    title: 'Do you take orbs from the Gem box event?',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'gemBoxEvent-Orb',
        description: 'I always buy 8 orbs gem box',
        orbs: 8
      },
    ]
  },
  {
    title: 'Do you buy orbs from Market?',
    selectOneOnly: true,
    subdata: [
      {
        handle: 'marketBuyDaily-Orb',
        description: 'Yes, daily.',
        orbs: 30
      },
      {
        handle: 'marketBuyEveryTwoDays-Orb',
        description: 'Yes, every two days.',
        orbs: 15
      },
      {
        handle: 'marketBuyEveryThreeDays-Orb',
        description: 'Yes, every third day.',
        orbs: 10
      },
      {
        handle: 'marketBuyEveryFourthDays-Orb',
        description: 'Yes, every fourth day.',
        orbs: 7
      },
      {
        handle: 'marketBuyNeverDays-Orb',
        description: 'No, never',
        orbs: 0
      },
    ]
  },
  {
    title: 'Aspen Dungeon',
    selectOneOnly: false,
    subdata: [
      {
        dynamicIncome: true,
        handle: 'aspenDungeonBaroness-Orb',
        description: 'Do you buy orbs from the Baroness?',
        orbs: 0,
      },
      {
        dynamicIncome: true,
        handle: 'aspenDungeonOldLady-Orb',
        description: 'Do you buy orbs from the Old Lady?',
        orbs: 0,
      },
    ]
  },
  {
    title: 'How do you usually compare in Free Team-up Arena?',
    selectOneOnly: true,
    subdata: [
      {
        handle: 'freeTeamUpArena1-Orb',
        description: 'Top 1',
        orbs: 5,
      },
      {
        handle: 'freeTeamUpArena2to3-Orb',
        description: 'Top 2 / 3',
        orbs: 4,
      },
      {
        handle: 'freeTeamUpArena4to10-Orb',
        description: 'Top 4-10',
        orbs: 3,
      },
      {
        handle: 'freeTeamUpArena11to20-Orb',
        description: 'Top 11-20',
        orbs: 2,
      },
      {
        handle: 'freeTeamUpArena21to3000-Orb',
        description: 'Top 21-3000',
        orbs: 0,
      },
    ]
  },
];

