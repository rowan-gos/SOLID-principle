import { Shape } from "./shape";

export class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
