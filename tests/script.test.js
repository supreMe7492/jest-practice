import { calculator, capitalize, reversedString } from "../src/script";

test("hello should be Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("kid should be dik", () => {
  expect(reversedString("kid")).toBe("dik");
});

test("add from calculator", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("subtract from calculator", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
test("multiply from calculator", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});
test("divide from calculator", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
