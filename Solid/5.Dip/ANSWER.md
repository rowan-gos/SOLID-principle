# DIP Refactor Notes

## Problem

- `SendNotification` directly instantiated `EmailService` via `new EmailService()` inside constructor
- High-level module depended on a concrete low-level class
- Impossible to swap channel or inject a mock without modifying the class

## Solution

- Introduced `INotificationService` abstraction with a single `send` method
- `EmailService` and `SmsService` implement the interface
- `SendNotification` receives `INotificationService` via constructor injection

## Result

- High-level and low-level modules both depend on the abstraction
- Swapping channel requires no changes to SendNotification
- Fully testable via mock injection
