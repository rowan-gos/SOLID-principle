import { IPrinter } from "./iPrinter";

export class OldFashionedPrinter implements IPrinter {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}
