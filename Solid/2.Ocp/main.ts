/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

/*=========== START PRACTICE 1 ===============*/
import {
  AreaCalculator,
  Triangle,
  Circle,
  Rectangle,
  Shape,
} from "./practice_1/sample";

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 5),
  new Triangle(3, 4),
];
const calculator = new AreaCalculator();
console.log(calculator.calculate(shapes)); // No instanceof, no modification needed

/*=========== END PRACTICE 1 ===============*/

/*=========== START PRACTICE 2 ===============*/
import {
  FullTimeEmployee,
  PartTimeEmployee,
  InternEmployee,
} from "./practice_2/sample";

const fullTimeEmployee = new FullTimeEmployee("Alice");
console.log(
  `${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`,
);

const partTimeEmployee = new PartTimeEmployee("Bob");
console.log(
  `${partTimeEmployee.name}'s salary is ${partTimeEmployee.calculateSalary()}`,
);

const internEmployee = new InternEmployee("Charlie");
console.log(
  `${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`,
);
/*=========== END PRACTICE 2 ===============*/
