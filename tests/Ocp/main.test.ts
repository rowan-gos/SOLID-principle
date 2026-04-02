import {
  Shape,
  Circle,
  Rectangle,
  Triangle,
  AreaCalculator,
} from "../../Solid/2.Ocp/practice_1/sample";
import {
  Employee,
  FullTimeEmployee,
  PartTimeEmployee,
  InternEmployee,
} from "../../Solid/2.Ocp/practice_2/sample";

describe("AreaCalculator - Practice 1", () => {
  let calculator: AreaCalculator;

  beforeEach(() => {
    calculator = new AreaCalculator();
  });

  test("should calculate area of a Circle correctly", () => {
    const circle = new Circle(5);
    expect(circle.calculateArea()).toBeCloseTo(Math.PI * 25);
  });

  test("should calculate area of a Rectangle correctly", () => {
    const rectangle = new Rectangle(4, 5);
    expect(rectangle.calculateArea()).toBe(20);
  });

  test("should calculate area of a Triangle correctly", () => {
    const triangle = new Triangle(3, 4);
    expect(triangle.calculateArea()).toBe(6);
  });

  test("should calculate total area of multiple shapes", () => {
    const shapes: Shape[] = [
      new Circle(5),
      new Rectangle(4, 5),
      new Triangle(3, 4),
    ];
    const total = calculator.calculate(shapes);
    expect(total).toBeCloseTo(Math.PI * 25 + 20 + 6);
  });

  test("should return 0 when no shapes are provided", () => {
    expect(calculator.calculate([])).toBe(0);
  });

  test("should calculate total area of a single shape", () => {
    const shapes: Shape[] = [new Rectangle(3, 3)];
    expect(calculator.calculate(shapes)).toBe(9);
  });
});

describe("Employee Salary - Practice 2", () => {
  let fullTime: FullTimeEmployee;
  let partTime: PartTimeEmployee;
  let intern: InternEmployee;

  beforeEach(() => {
    fullTime = new FullTimeEmployee("Alice");
    partTime = new PartTimeEmployee("Bob");
    intern = new InternEmployee("Charlie");
  });

  test("should return correct salary for a FullTimeEmployee", () => {
    expect(fullTime.calculateSalary()).toBe(5000);
  });

  test("should return correct salary for a PartTimeEmployee", () => {
    expect(partTime.calculateSalary()).toBe(3000);
  });

  test("should return correct salary for an InternEmployee", () => {
    expect(intern.calculateSalary()).toBe(1000);
  });

  test("should store the employee name correctly", () => {
    expect(fullTime.name).toBe("Alice");
    expect(partTime.name).toBe("Bob");
    expect(intern.name).toBe("Charlie");
  });

  test("should treat all employee types as Employee instances", () => {
    const employees: Employee[] = [fullTime, partTime, intern];
    const salaries = employees.map((e) => e.calculateSalary());
    expect(salaries).toEqual([5000, 3000, 1000]);
  });
});
