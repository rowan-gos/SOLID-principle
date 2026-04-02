import { Shape } from "./shape";

export class AreaCalculator {
  calculate(shapes: Shape[]): number {
    return shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
  }
}
