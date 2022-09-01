require("dotenv").config();
import { Options } from "amqplib";
import { App } from "./main";

//TODO: add those to env/docker-compose
const rabbitSettings: Options.Connect = {
  protocol: "amqp",
  hostname: "rabbitmq",
  port: 5672,
  username: "guest",
  password: "guest",
  vhost: "/",
};

const application = new App(rabbitSettings);

process.once("SIGTERM", async () => {
  console.log("SIGTERM received - shutting down");
  await application.dispose();
  process.exit(0);
});
