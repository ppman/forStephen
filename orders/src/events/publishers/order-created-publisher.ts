import { Publisher, OrderCreatedEvent, Subjects } from '@amirfanny/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
