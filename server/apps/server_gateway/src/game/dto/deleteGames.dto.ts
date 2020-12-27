import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteGamesDto {
  @IsArray()
  @ArrayMinSize(1)
  @IsUUID(undefined, {
    each: true,
  })
  ids!: string[]
}