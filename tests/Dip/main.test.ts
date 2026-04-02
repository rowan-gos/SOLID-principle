import {
  EmailService,
  SmsService,
  SendNotification,
} from "../../Solid/5.Dip/sample";
import { INotificationService } from "../../Solid/5.Dip/iNotificationService";

describe("EmailService", () => {
  let service: EmailService;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    service = new EmailService();
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should not throw when send is called", () => {
    expect(() => service.send("Hello")).not.toThrow();
  });

  test("should log the correct email message", () => {
    service.send("Hello");
    expect(consoleSpy).toHaveBeenCalledWith("Sending email: Hello");
  });

  test("should satisfy INotificationService interface", () => {
    const s: INotificationService = service;
    expect(typeof s.send).toBe("function");
  });
});

describe("SmsService", () => {
  let service: SmsService;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    service = new SmsService();
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should not throw when send is called", () => {
    expect(() => service.send("Hello")).not.toThrow();
  });

  test("should log the correct SMS message", () => {
    service.send("Hello");
    expect(consoleSpy).toHaveBeenCalledWith("Sending SMS: Hello");
  });

  test("should satisfy INotificationService interface", () => {
    const s: INotificationService = service;
    expect(typeof s.send).toBe("function");
  });
});

describe("SendNotification - DIP substitutability", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should send via EmailService when injected", () => {
    const notification = new SendNotification(new EmailService());
    notification.sendNotification("Hello");
    expect(consoleSpy).toHaveBeenCalledWith("Sending email: Hello");
  });

  test("should send via SmsService when injected", () => {
    const notification = new SendNotification(new SmsService());
    notification.sendNotification("Hello");
    expect(consoleSpy).toHaveBeenCalledWith("Sending SMS: Hello");
  });

  test("should work with a mock INotificationService", () => {
    const mockService: INotificationService = {
      send: jest.fn(),
    };
    const notification = new SendNotification(mockService);
    notification.sendNotification("Hello");
    expect(mockService.send).toHaveBeenCalledWith("Hello");
  });

  test("should not throw for any INotificationService implementation", () => {
    const services: INotificationService[] = [
      new EmailService(),
      new SmsService(),
    ];
    services.forEach((service) => {
      const notification = new SendNotification(service);
      expect(() => notification.sendNotification("Hello")).not.toThrow();
    });
  });
});
