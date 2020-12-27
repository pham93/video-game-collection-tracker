import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/createGame.dto';
import { GameEntity } from './game.entity';
import { GameService } from './game.service';

@ApiTags('videogames')
@Controller('videogames')
export class GameController {

  constructor(private gameService: GameService) { }

  @Get()
  getVideoGames(): Promise<GameEntity[]> {
    return this.gameService.getAllGames();
  }

  @Post()
  saveVideoGame(@Body() createGameDto: CreateGameDto): Promise<GameEntity> {
    return this.gameService.saveGame(createGameDto)
  }
}