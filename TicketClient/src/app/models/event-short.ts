import { Event } from './event';
export interface EventShort extends Omit<Event, 'ticketOptions'> {}
