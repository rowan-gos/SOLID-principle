/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import {
  OnlinePaymentProcessor,
  CreditCardPayment,
  PayPalPayment,
  CashPayment,
} from "./sample";

function handlePayment(
  processor: OnlinePaymentProcessor,
  amount: number,
): void {
  processor.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handlePayment(creditCardPayment, 100);

const payPalPayment = new PayPalPayment();
handlePayment(payPalPayment, 200);

const cashPayment = new CashPayment();
cashPayment.recordPayment(50);
