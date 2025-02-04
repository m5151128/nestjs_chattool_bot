import axios from "axios";
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SlackService } from './slack.service';

const BTS_BACKEND_API_URL = process.env.BTS_BACKEND_API_URL;

@Injectable()
export class BtsService {
  constructor(private authService: AuthService,
    private slackService: SlackService
  ) {}

  async postMessage(slackEventBody: any) {
    const postMessageInfo = this.slackService.convertPostMessageInfoFromEvent(slackEventBody);
    const token = this.authService.createToken(postMessageInfo.talkUser.id, postMessageInfo.talkUser.email);
    const talkId = postMessageInfo.talkId;

    const body = {
      messageType: "text",
      messageText: postMessageInfo.messageText,
    }

    try {
      await axios.post(`${BTS_BACKEND_API_URL}/app/v1/talks/${talkId}/messages`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}
