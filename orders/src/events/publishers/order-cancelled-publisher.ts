import { Subjects, Publisher, OrderCancelledEvent } from '@amirfanny/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
