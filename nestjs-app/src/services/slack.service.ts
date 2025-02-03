import { Injectable } from '@nestjs/common';

@Injectable()
export class SlackService {
  convertPostMessageInfoFromEvent(body: any) {
    const messageText = body.event.text;
    const talkId = this.getTalkIdByChannelId(body.event.channel);
    const talkUser = this.getTalkUserByUserId(body.event.user);

    return {
      messageText: `${talkUser.name}さんからのメッセージ\n${messageText}`,
      talkId,
      talkUser,
    };
  }

  getTalkIdByChannelId(channelId: string) {
    // TODO: DBから取得。このメソッド自体がmodelsに移動する可能性もある
    return 1;
  }

  getTalkUserByUserId(userId: string) {
    // TODO: DBから取得。このメソッド自体がmodelsに移動する可能性もある
    return {
      id: '',
      name: 'テスト太郎',
      email: ''
    }
  }
}
