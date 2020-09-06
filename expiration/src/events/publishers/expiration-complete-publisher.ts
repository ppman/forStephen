import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@amirfanny/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
