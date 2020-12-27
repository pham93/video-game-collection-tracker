import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/createGame.dto';
import { GameEntity } from './game.entity';

@Injectable()
export class GameService {
  constructor(@InjectRepository(GameEntity) private gameRepository: Repository<GameEntity>) {

  }

  getAllGames(): Promise<GameEntity[]> {
    return this.gameRepository.find({cache: true});
  }

  /**
   * create or update. 
   * Update if id is defined
   * @param createGameDto 
   */
  async saveGame(createGameDto: CreateGameDto): Promise<GameEntity> {
    const newGame = this.createGame({
      ...createGameDto,
      upload: createGameDto.upload ?? 'undefined'
    });
    return this.gameRepository.save(newGame);
  }

  updateGame(createGameDto: Partial<CreateGameDto>): string {
    return 'is working';
  }

  deleteGames() {
    console.log('to be implement');
  }

  private createGame(entityLike: GameEntity): GameEntity {
    const newGame = new GameEntity();
    return {...newGame, ...entityLike};
  }
}