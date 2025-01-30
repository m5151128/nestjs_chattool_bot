import { app } from "./bolt";

export default function () {
  app.event("app_mention", async ({ event, say }) => {
    await say(`Hello <@${event.user}>!`);
  });
}
