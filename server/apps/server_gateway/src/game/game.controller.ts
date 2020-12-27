import { Controller, Get, Post, Body, Put, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/createGame.dto';
import { UpdateGameDto, UpdateGameParam } from './dto/updateGame.dto';
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

  @Put(':id')
  updateVideoGame(@Param() params: UpdateGameParam, @Body() updateGameDto: UpdateGameDto): string {
    return this.gameService.updateGame({...updateGameDto, id: params.id});
  }
}