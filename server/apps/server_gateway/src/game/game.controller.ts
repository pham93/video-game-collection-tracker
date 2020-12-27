import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/createGame.dto';
import { DeleteGamesDto } from './dto/deleteGames.dto';
import { UpdateGameDto, UpdateGameParam } from './dto/updateGame.dto';
import { GameService } from './game.service';

@ApiTags('videogames')
@Controller('videogames')
export class GameController {

  constructor(private gameService: GameService) { }

  /**
   * Get all video games for this user
   * 
   */
  @Get()
  getVideoGames() {
    return this.gameService.getAllGames();
  }

  /**
   * Create or Update and existing video game
   * 
   * @param createGameDto
   */
  @Post()
  saveVideoGame(@Body() createGameDto: CreateGameDto) {
    return this.gameService.saveGame(createGameDto)
  }

  /**
   * Update a video game
   *
   * @param params 
   * @param updateGameDto 
   */
  @Put(':id')
  updateVideoGame(@Param() params: UpdateGameParam, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.updateGame(params.id, updateGameDto);
  }

  /**
   * Delete multiple games
   * 
   * @param deleteGamesDto 
   */
  @Delete()
  deleteVideoGames(@Body() deleteGamesDto: DeleteGamesDto) {
    return this.gameService.deleteGames(deleteGamesDto.ids);
  }
}