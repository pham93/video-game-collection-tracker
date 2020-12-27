import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Configuration, { DatabaseConfig } from './config/configuration';
import { GameModule } from './game/game.module';

const dbConfig: DatabaseConfig = Configuration().database;

@Module({
  imports: [
  GameModule,
  TypeOrmModule.forRoot({
    ...dbConfig,
    autoLoadEntities: true,
    // update this. For now this is for development
    synchronize: true
  }),
  ConfigModule.forRoot({
    isGlobal: true,
    load: [Configuration]
  }),
  ]
})
export class AppModule { }
