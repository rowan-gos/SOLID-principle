# ISP Refactor Notes

## Problem
- Single fat `Machine` interface forced `print`, `scan`, `fax` on all implementors
- `OldFashionedPrinter` threw errors on `scan` and `fax` it never supported

## Solution
- Split `Machine` into three focused interfaces: `IPrinter`, `IScanner`, `IFax`
- `OldFashionedPrinter` implements `IPrinter` only
- `MultiFunctionPrinter` implements all three

## Files
- `iPrinter.ts` - IPrinter interface
- `iScanner.ts` - IScanner interface
- `iFax.ts` - IFax interface
- `oldFashionedPrinter.ts` - implements IPrinter only
- `multiFunctionPrinter.ts` - implements IPrinter, IScanner, IFax
- `sample.ts` - barrel export

## Result
- No class implements methods it does not use
- Adding new device types requires no changes to existing classes
