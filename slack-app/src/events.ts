import { app } from "./bolt";
import { post } from "./nest";

export default function () {
  app.event("app_mention", async ({ event, say }) => {
    post("/bts/message", { event }).then(async (data) => {
      await say(`Hello <@${event.user}> ${data.message}`);
    });
  });
}
