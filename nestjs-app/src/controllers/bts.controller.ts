import { Controller, Post, Body } from '@nestjs/common';
import { BtsService } from 'src/services/bts.service';

@Controller('api/bts')
export class BtsController {
  constructor(
    private btsService: BtsService,
  ) {}

  @Post('message')
  // TODO: DTOの作成
  createMessage(@Body() body: { event: { text: string } }) {
    this.btsService.postMessage(body);

    return { message: `NestJS Received: ${body.event.text}` };
  }
}
