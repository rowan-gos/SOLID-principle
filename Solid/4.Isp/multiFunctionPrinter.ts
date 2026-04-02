import { IPrinter } from "./iPrinter";
import { IScanner } from "./iScanner";
import { IFax } from "./iFax";

export class MultiFunctionPrinter implements IPrinter, IScanner, IFax {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning document: ${document}`);
  }

  fax(document: string): void {
    console.log(`Faxing document: ${document}`);
  }
}
