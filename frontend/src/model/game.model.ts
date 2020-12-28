export enum PlatformE {
  PS4 = 'PS4',
  XB1 = 'XB1',
  SWTCH = 'SWTCH',
  PC = 'PC'
}

export enum ProgressE {
  Owned = 'Owned',
  Wish = 'Wish',
  Unowned = 'Unowned'
}

export enum OwnedE {
  Unplayed = 'Unplayed',
  In_Progress = 'In Progress',
  Main_Story_Completed = 'Main Story Completed',
  Completed = '100% Completed',
}

export interface GameT {
  id: string;
  title: string;
  summary: string;
  developer: string;
  publisher: string;
  progress: ProgressE;
  owned: OwnedE;
  platform: PlatformE;
  rating: number;
  upload: string;
}