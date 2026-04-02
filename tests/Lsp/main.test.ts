import {
  OnlinePaymentProcessor,
  CreditCardPayment,
  PayPalPayment,
  CashPayment,
} from "../../Solid/3.Lsp/sample";

describe("CreditCardPayment", () => {
  let payment: CreditCardPayment;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    payment = new CreditCardPayment();
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should be an instance of OnlinePaymentProcessor", () => {
    expect(payment).toBeInstanceOf(OnlinePaymentProcessor);
  });

  test("should not throw when processPayment is called", () => {
    expect(() => payment.processPayment(100)).not.toThrow();
  });

  test("should log credit card payment details", () => {
    payment.processPayment(100);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Processing credit card payment of $100",
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Validating credit card details...",
    );
    expect(consoleSpy).toHaveBeenCalledWith("Charging the credit card...");
  });
});

describe("PayPalPayment", () => {
  let payment: PayPalPayment;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    payment = new PayPalPayment();
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should be an instance of OnlinePaymentProcessor", () => {
    expect(payment).toBeInstanceOf(OnlinePaymentProcessor);
  });

  test("should not throw when processPayment is called", () => {
    expect(() => payment.processPayment(200)).not.toThrow();
  });

  test("should log PayPal payment details", () => {
    payment.processPayment(200);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Processing PayPal payment of $200",
    );
    expect(consoleSpy).toHaveBeenCalledWith("Redirecting to PayPal...");
    expect(consoleSpy).toHaveBeenCalledWith("Completing PayPal transaction...");
  });
});

describe("CashPayment", () => {
  let payment: CashPayment;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    payment = new CashPayment();
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should NOT be an instance of OnlinePaymentProcessor", () => {
    expect(payment).not.toBeInstanceOf(OnlinePaymentProcessor);
  });

  test("should not throw when recordPayment is called", () => {
    expect(() => payment.recordPayment(50)).not.toThrow();
  });

  test("should log cash payment recording", () => {
    payment.recordPayment(50);
    expect(consoleSpy).toHaveBeenCalledWith("Recording cash payment of $50");
  });
});

describe("handlePayment - LSP substitutability", () => {
  let consoleSpy: jest.SpyInstance;

  function handlePayment(
    processor: OnlinePaymentProcessor,
    amount: number,
  ): void {
    processor.processPayment(amount);
  }

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should process CreditCardPayment without throwing", () => {
    expect(() => handlePayment(new CreditCardPayment(), 100)).not.toThrow();
  });

  test("should process PayPalPayment without throwing", () => {
    expect(() => handlePayment(new PayPalPayment(), 200)).not.toThrow();
  });

  test("should process all OnlinePaymentProcessor subtypes safely", () => {
    const processors: OnlinePaymentProcessor[] = [
      new CreditCardPayment(),
      new PayPalPayment(),
    ];
    processors.forEach((processor) => {
      expect(() => handlePayment(processor, 100)).not.toThrow();
    });
  });
});
