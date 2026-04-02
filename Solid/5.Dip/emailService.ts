import { INotificationService } from "./iNotificationService";

export class EmailService implements INotificationService {
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}
