export interface ScrollData {
  handle: string;
  description: string;
  scrolls: number;
}

export interface ScrollDataGroup {
  title: string;
  selectOneOnly: boolean;
  subdata: Array<ScrollData>;
}

export const TARGET_EVENTS = [
  {
    event: 'Christmas 2019',
    date: '2019-12-26T23:00:00.000Z',
    neededPerRound: 550,
    maxRounds: 4,
    duration: 7,
  },
  {
    event: 'Chinese New Year',
    date: '2020-02-14T23:00:00.000Z',
    neededPerRound: 550,
    maxRounds: 4,
    duration: 7,
  },
  {
    event: 'Anniversary 2020',
    date: '2020-06-14T23:00:00.000Z',
    neededPerRound: 550,
    maxRounds: 4,
    duration: 7,
  },
];

export const MONTHLY_SCROLLS_DATA: Array<ScrollDataGroup> = [
  {
    title: 'Can you complete Miracle (Non L/D part)?',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'miracleNonLD',
        description: 'Yes, I can complete the event',
        scrolls: 24
      },

    ]
  },
  {
    title: 'Do you reroll and get Scrolls in tavern daily?',
    selectOneOnly: true,
    subdata: [
      {
        handle: 'tavernRerollDailyYesHighVip',
        description: 'Yes (Higher VIP)',
        scrolls: 38
      },
      {
        handle: 'tavernRerollDailyYesLowVip',
        description: 'Yes (Lower VIP)',
        scrolls: 22
      },
      {
        handle: 'tavernRerollDailyNo',
        description: 'No',
        scrolls: 12
      },

    ]
  },
  {
    title: 'Do you take Scrolls from Campaign Drop event?',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'campaignDropYes',
        description: 'I take Scrolls from Drop event',
        scrolls: 24
      },
      {
        handle: 'campaignDropSplit',
        description: 'I Split between orbs and scrolls',
        scrolls: 12
      },
      {
        handle: 'campaignDropSometimes',
        description: 'I only take Orbs or something else',
        scrolls: 0
      },
      {
        handle: 'campaignDropGemBox',
        description: 'I always buy the 5 scroll gem box',
        scrolls: 5
      },
    ]
  },
  {
    title: 'Do you buy scrolls from Market and Aspen?',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'dailyFromMarket',
        description: 'Daily from the market',
        scrolls: 240
      },
      {
        handle: 'everySecondDayFromMarket',
        description: 'Every second day from the market',
        scrolls: 120
      },
      {
        handle: 'everyThirdDayFromMarket',
        description: 'Every third day from the market',
        scrolls: 80
      },
      {
        handle: 'everyFourthDayFromMarket',
        description: 'Every third day from the market',
        scrolls: 60
      },
      {
        handle: 'fromAsperDungeonWhenSeniosHasScroll',
        description: 'From Aspen Dungeon whenever Senior merchant have scrolls',
        scrolls: 70
      },
    ]
  },
  {
    title: 'How do you usually compare in Free Team-up Arena?',
    selectOneOnly: true,
    subdata: [
      {
        handle: 'teamUpAreaTop20OrBetter',
        description: 'Top 20 or better',
        scrolls: 0
      },
      {
        handle: 'teamUpAreaTop21_50',
        description: 'Top 21 - 50',
        scrolls: 16
      },
      {
        handle: 'teamUpAreaTop51_100',
        description: 'Top 51 - 100',
        scrolls: 12
      },
      {
        handle: 'teamUpAreaTop101_200',
        description: 'Top 101 - 200',
        scrolls: 8
      },
      {
        handle: 'teamUpAreaTop201_500',
        description: 'Top 201 - 500',
        scrolls: 4
      },
    ]
  },
  {
    title: 'Feeling lucky!',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'feelingLuckyAspen',
        description: 'Aspen Dungeon give 1.5x more scrolls for puchase',
        scrolls: 35
      },
      {
        handle: 'feelingLuckyCampaign',
        description: 'Campaign drops are set for 2600 instead of average 2400',
        scrolls: 2
      },
      {
        handle: 'feelingLuckyTavernReroll',
        description: 'Lucky with scrolls from tavern rerolls',
        scrolls: 10
      },
      {
        handle: 'feelingLuckySuperWishingCoin',
        description: 'Super Wishing coin scrolls',
        scrolls: 10
      },
    ]
  },
  {
    title: 'Do you use scrolls during Heroic Summon events?',
    selectOneOnly: true,
    subdata: [
      {
        handle: 'useScrollsDuringHeroicSummonNone',
        description: 'No',
        scrolls: 0
      },
      {
        handle: 'useScrollsDuringHeroicSummon50',
        description: 'Use 50 scrolls',
        scrolls: -40
      },
      {
        handle: 'useScrollsDuringHeroicSummon100',
        description: 'Use 100 scrolls',
        scrolls: -80
      },
    ]
  },
  {
    title: 'Do you use scrolls to finish Daily quest?',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'useScrollsToFinishDaily',
        description: 'I do!',
        scrolls: -15
      },
    ]
  },
  {
    title: 'FreeScrolls',
    selectOneOnly: false,
    subdata: [
      {
        handle: 'freeScrollsDailyLogin',
        description: 'Daily login reward during Scrolls event',
        scrolls: 21
      },
      {
        handle: 'freeScrollsMonthlyLoginReward',
        description: 'Monthly login reward',
        scrolls: 4
      },
      {
        handle: 'freeScrollsMonthlyEvent4StarQuest',
        description: 'Monthly Event Tavern scrolls reward for ★★★★ quests',
        scrolls: 10
      },
      {
        handle: 'freeScrollsBraveTrails',
        description: 'Clear State 15 of day mode in Brave Trails',
        scrolls: 10
      },
    ]
  },
];

