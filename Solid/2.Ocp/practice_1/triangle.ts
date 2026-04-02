import { Shape } from "./shape";

export class Triangle extends Shape {
  constructor(
    public base: number,
    public height: number,
  ) {
    super();
  }
  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}
