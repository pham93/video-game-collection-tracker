import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Configuration, { DatabaseConfig } from './config/configuration';
import { GameModule } from './game/game.module';

const dbConfig: DatabaseConfig = Configuration().database;

@Module({
  imports: [TypeOrmModule.forRoot({
    ...dbConfig,
    entities: [],
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV === 'development',
  }),
  ConfigModule.forRoot({
    isGlobal: true,
    load: [Configuration]
  }),
  GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
  }
}
