import { Controller, Post, Body } from '@nestjs/common';

@Controller('api/bts')
export class BtsController {
  @Post('message')
  // TODO: DTOの作成
  createMessage(@Body() body: { event: { text: string } }) {
    // TODO: バイトルトークへのメッセージ送信処理
    return { message: `NestJS Received: ${body.event.text}` };
  }
}
