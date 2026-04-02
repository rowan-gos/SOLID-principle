# LSP Refactor Notes

## Problem

- `CashPayment` extended `PaymentProcessor` but threw an error in `processPayment`
- `handlePayment` accepted any `PaymentProcessor`, causing a runtime crash with `CashPayment`
- Subclass broke the contract of its parent

## Solution

- Renamed base to `OnlinePaymentProcessor` as an abstract class
- Only online-capable types extend it
- `CashPayment` removed from the hierarchy, made a standalone class with `recordPayment`

## Result

- `handlePayment` only accepts types that honour the contract
- Passing `CashPayment` to `handlePayment` is a compile-time error
- No runtime throws from substituted subtypes
