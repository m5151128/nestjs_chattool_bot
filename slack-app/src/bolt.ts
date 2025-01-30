import { App, ExpressReceiver } from "@slack/bolt";

const receiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET as string,
  endpoints: "/slack/events",
});

const config = {
  token: process.env.SLACK_BOT_TOKEN,
  receiver,
};
export const app = new App(config);
