import { IsEnum, IsNotEmpty, IsNumberString, IsOptional, IsString, IsUrl, IsUUID } from 'class-validator';
import { OwnedE, PlatformE, ProgressE } from '../game.entity';
/**
 * Data Transfer object for creating a game
 */
export class CreateGameDto {

  @IsOptional()
  @IsUUID()
  id?: string;

  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  summary!: string;

  @IsNotEmpty()
  developer!: string;

  @IsNotEmpty()
  publisher!: string;

  @IsNotEmpty()
  @IsEnum(OwnedE)
  owned!: OwnedE;

  @IsNotEmpty()
  @IsEnum(PlatformE)
  platform!: PlatformE;

  @IsNotEmpty()
  @IsEnum(ProgressE)
  progress!: ProgressE;

  @IsNotEmpty()
  @IsNumberString()
  rating!: number;

  @IsOptional()
  @IsString()
  @IsUrl()
  upload?: string;

}