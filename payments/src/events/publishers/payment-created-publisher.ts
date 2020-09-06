import { Subjects, Publisher, PaymentCreatedEvent } from '@amirfanny/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
