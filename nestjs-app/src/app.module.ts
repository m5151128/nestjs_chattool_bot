import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BtsController } from './controllers/bts.controller';
import { SlackService } from './services/slack.service';

@Module({
  imports: [],
  controllers: [AppController, BtsController],
  providers: [AppService, SlackService],
})
export class AppModule {}
