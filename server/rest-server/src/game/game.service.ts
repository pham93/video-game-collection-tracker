import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameEntity } from './game.entity';

@Injectable()
export class GameService {
  constructor(@InjectRepository(GameEntity) private gameRepository: Repository<GameEntity>) {

  }

  public getAllGames(): Promise<GameEntity[]> {
    return this.gameRepository.find({cache: true});
  }

  public saveGame() {
    console.log('to be implement');
  }

  public deleteGames() {
    console.log('to be implement');
  }
}