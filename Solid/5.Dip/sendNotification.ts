import { INotificationService } from "./iNotificationService";

export class SendNotification {
  constructor(private service: INotificationService) {}

  sendNotification(message: string): void {
    this.service.send(message);
  }
}
