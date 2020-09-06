import { Publisher, Subjects, TicketCreatedEvent } from '@amirfanny/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
