import { Module } from '@nestjs/common';
import { AppController, PersonsController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './games/games.controller';

@Module({
  imports: [],
  controllers: [AppController, PersonsController, GamesController],
  providers: [AppService],
})
export class AppModule {}
