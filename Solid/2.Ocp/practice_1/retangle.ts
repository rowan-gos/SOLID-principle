import { Shape } from "./shape";

export class Rectangle extends Shape {
  constructor(
    public height: number,
    public width: number,
  ) {
    super();
  }
  calculateArea(): number {
    return this.height * this.width;
  }
}
