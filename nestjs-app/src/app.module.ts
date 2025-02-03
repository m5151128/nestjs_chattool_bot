import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BtsController } from './controllers/bts.controller';
import { SlackService } from './services/slack.service';
import { AuthService } from './services/auth.service';
import { BtsService } from './services/bts.service';

@Module({
  imports: [],
  controllers: [AppController, BtsController],
  providers: [AppService, SlackService, AuthService, BtsService],
})
export class AppModule {}
