export abstract class OnlinePaymentProcessor {
  abstract processPayment(amount: number): void;
}
