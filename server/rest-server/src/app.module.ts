import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Configuration, { DatabaseConfig } from './config/configuration';

const dbConfig: DatabaseConfig = Configuration().database;

@Module({
  imports: [TypeOrmModule.forRoot({
    ...dbConfig,
    entities: [],
    synchronize: process.env.NODE_ENV === 'development',
  }),
  ConfigModule.forRoot({
    isGlobal: true,
    load: [Configuration]
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
  }
}
