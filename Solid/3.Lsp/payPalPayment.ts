import { OnlinePaymentProcessor } from "./onlinePaymentProcessor";

export class PayPalPayment extends OnlinePaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    console.log("Redirecting to PayPal...");
    console.log("Completing PayPal transaction...");
  }
}
