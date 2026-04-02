# OCP Refactor Notes

## Problem

- Practice 1: `Shape.calculateArea()` used instanceof chain to handle each shape type
- Practice 2: `Employee.calculateSalary()` used switch on EmployeeType enum
- Both required modifying existing classes to add new types

## Solution

### Practice 1

- `Shape` became an abstract class with abstract `calculateArea()`
- Each shape owns its own area formula
- `AreaCalculator` aggregates shapes without knowing concrete types

### Practice 2

- `Employee` became an abstract class with abstract `calculateSalary()`
- Each employee type owns its own salary logic
- Removed EmployeeType enum, no longer needed

## Files

### Practice 1

- `shape.ts` - abstract Shape base class
- `circle.ts` - implements calculateArea with PI formula
- `retangle.ts` - implements calculateArea with h x w
- `triangle.ts` - implements calculateArea with 0.5 x base x height
- `areaCalculator.ts` - sums areas with no instanceof checks
- `sample.ts` - barrel export

### Practice 2

- `employee.ts` - abstract Employee base class
- `fullTimeEmployee.ts` - salary 5000
- `partTimeEmployee.ts` - salary 3000
- `internEmployee.ts` - salary 1000
- `sample.ts` - barrel export

## Result

- Adding a new shape or employee type requires a new file only
- No existing class is modified
