import client, { Channel, Connection, ConsumeMessage, Options } from "amqplib";
import { TicketPayload } from "./ticket-payload";
export class App {
  private _channel: Channel | null = null;
  private _connection: Connection | null = null;
  private _queueName = "something";

  constructor(settings: Options.Connect) {
    this._initialize(settings);
  }

  private async _initialize(settings: Options.Connect): Promise<void> {
    try {
      this._connection = await client.connect(settings);
      this._channel = await this._connection.createChannel();

      console.log("Connected!");

      await this._channel.assertQueue(this._queueName, { durable: true });
      console.log("Queue checked!");

      this._channel.consume(this._queueName, (message: ConsumeMessage) => {
        try {
          const ticketPayload: TicketPayload = JSON.parse(
            message.content.toString()
          );

          console.log(ticketPayload);
        } catch (error) {
          console.error(error);
        } finally {
          //NOTE: should we remove the message when we fail to parse it?
          this._channel.ack(message);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async dispose(): Promise<void> {
    await this._channel?.close();
    await this._connection?.close();
    console.log("Disposed!");
  }
}
