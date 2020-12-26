import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum PlatformE {
  PS4 = 'PS4',
  XB1 = 'XB1',
  SWTCH = 'SWTCH',
  PC = 'PC'
}

export enum OwnedE {
    Owned = 'Owned',
    Wish = 'Wish',
    Unowned = 'Unowned'
}

export enum ProgressE {
    Unplayed = 'Unplayed',
    In_Progress = 'In Progress',
    Main_Story_Completed = 'Main Story Completed',
    Completed = '100% Completed',
}

@Entity()
export class GameEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 100})
  title: string;

  @Column({length: 100})
  summary: string;

  @Column({length: 300})
  developer: string;

  @Column({length: 300})
  publisher: string;

  @Column({type: 'smallint'})
  rating: number;

  @Column({type: 'enum', enum: PlatformE, nullable: true})
  platform: PlatformE;

  @Column({type:'enum', enum: OwnedE , nullable: true})
  owned: OwnedE;

  @Column({type: 'enum', enum: ProgressE, nullable: true})
  progress: ProgressE;

  @Column({length: 300, nullable: true})
  upload: string;

}