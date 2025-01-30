import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BtsController } from './controllers/bts.controller';

@Module({
  imports: [],
  controllers: [AppController, BtsController],
  providers: [AppService],
})
export class AppModule {}
