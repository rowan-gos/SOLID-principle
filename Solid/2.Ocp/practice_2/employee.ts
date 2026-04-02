export abstract class Employee {
  constructor(public name: string) {}
  abstract calculateSalary(): number;
}
