import { IsEnum, IsNotEmpty, IsNumberString, IsOptional, IsString, IsUrl, IsUUID } from 'class-validator';
import { OwnedE, PlatformE, ProgressE } from '../game.entity';

export class UpdateGameParam {
  @IsNotEmpty()
  @IsUUID()
  id!: string;
}
/**
 * Data Transfer object for creating a game
 */
export class UpdateGameDto {

  title?: string;

  summary?: string;

  developer?: string;

  publisher?: string;

  @IsOptional()
  @IsEnum(OwnedE)
  owned?: OwnedE;

  @IsOptional()
  @IsEnum(PlatformE)
  platform?: PlatformE;

  @IsOptional()
  @IsEnum(ProgressE)
  progress?: ProgressE;

  rating?: number;

  @IsOptional()
  @IsString()
  @IsUrl()
  upload?: string;

}