import { app } from "./bolt";
import slackEvents from "./events";

(async () => {
  await app.start(process.env.PORT || 4000);
  console.log("⚡️ Bolt app is running!");
})();

slackEvents();
