import { Controller, Get } from '@nestjs/common';
import { GameEntity } from './game.entity';
import { GameService } from './game.service';

@Controller('videogames')
export class GameController {

  constructor(private gameService: GameService) { }

  @Get()
  getVideoGames(): Promise<GameEntity[]> {
    return this.gameService.getAllGames();
  }
}