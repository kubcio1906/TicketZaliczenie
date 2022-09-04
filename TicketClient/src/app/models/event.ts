import { TicketOption } from './ticket-option';

export interface Event {
  id: string;
  image: string;
  name: string;
  description: string;
  ticketOptions: TicketOption[];
}
