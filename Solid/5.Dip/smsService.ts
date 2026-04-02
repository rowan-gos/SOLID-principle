import { INotificationService } from "./iNotificationService";

export class SmsService implements INotificationService {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}
