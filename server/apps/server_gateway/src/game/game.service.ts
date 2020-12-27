import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/createGame.dto';
import { UpdateGameDto } from './dto/updateGame.dto';
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
  async saveGame(createGameDto: CreateGameDto) {
    const newGame = this.createGame({
      ...createGameDto,
      upload: createGameDto.upload ?? 'undefined'
    });
    return this.gameRepository.save(newGame);
  }

  async updateGame(id: string, updateGameDto: Partial<UpdateGameDto>) {
    if (id) {
      const game = await this.gameRepository.findOneOrFail(id)
      const updatedGame = {...game, ...updateGameDto }
      return this.gameRepository.save(updatedGame);
    }
    throw new HttpException('Could not save a video game.', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  async deleteGames(ids: string[]) {
    const games = await this.gameRepository.findByIds(ids);
    return this.gameRepository.remove(games);
  }

  private createGame(entityLike: GameEntity) {
    const newGame = new GameEntity();
    return {...newGame, ...entityLike};
  }
}