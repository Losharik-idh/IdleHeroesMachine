export interface ScrollData {
  handle: string;
  description: string;
  scrolls?: number;
  orbs?: number;
  dynamicIncome?: boolean;
}

export interface ScrollDataGroup {
  title: string;
  selectOneOnly: boolean;
  subdata: Array<ScrollData>;
}
