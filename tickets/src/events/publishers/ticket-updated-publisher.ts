import { Publisher, Subjects, TicketUpdatedEvent } from '@amirfanny/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
