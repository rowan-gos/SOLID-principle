import {
  OldFashionedPrinter,
  MultiFunctionPrinter,
} from "../../Solid/4.Isp/sample";
import { IPrinter } from "../../Solid/4.Isp/iPrinter";
import { IScanner } from "../../Solid/4.Isp/iScanner";
import { IFax } from "../../Solid/4.Isp/iFax";

describe("OldFashionedPrinter", () => {
  let printer: OldFashionedPrinter;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    printer = new OldFashionedPrinter();
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should not throw when print is called", () => {
    expect(() => printer.print("Document 1")).not.toThrow();
  });

  test("should log the correct print message", () => {
    printer.print("Document 1");
    expect(consoleSpy).toHaveBeenCalledWith("Printing document: Document 1");
  });

  test("should satisfy the IPrinter interface", () => {
    const p: IPrinter = printer;
    expect(typeof p.print).toBe("function");
  });

  test("should NOT have a scan method", () => {
    expect((printer as any).scan).toBeUndefined();
  });

  test("should NOT have a fax method", () => {
    expect((printer as any).fax).toBeUndefined();
  });
});

describe("MultiFunctionPrinter", () => {
  let printer: MultiFunctionPrinter;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    printer = new MultiFunctionPrinter();
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should not throw when print is called", () => {
    expect(() => printer.print("Document 1")).not.toThrow();
  });

  test("should not throw when scan is called", () => {
    expect(() => printer.scan("Document 2")).not.toThrow();
  });

  test("should not throw when fax is called", () => {
    expect(() => printer.fax("Document 3")).not.toThrow();
  });

  test("should log the correct print message", () => {
    printer.print("Document 1");
    expect(consoleSpy).toHaveBeenCalledWith("Printing document: Document 1");
  });

  test("should log the correct scan message", () => {
    printer.scan("Document 2");
    expect(consoleSpy).toHaveBeenCalledWith("Scanning document: Document 2");
  });

  test("should log the correct fax message", () => {
    printer.fax("Document 3");
    expect(consoleSpy).toHaveBeenCalledWith("Faxing document: Document 3");
  });

  test("should satisfy IPrinter, IScanner, and IFax interfaces", () => {
    const p: IPrinter = printer;
    const s: IScanner = printer;
    const f: IFax = printer;
    expect(typeof p.print).toBe("function");
    expect(typeof s.scan).toBe("function");
    expect(typeof f.fax).toBe("function");
  });
});
