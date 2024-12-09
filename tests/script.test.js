import { capitalize } from "../src/script";
import { reversedString } from "../src/script";
test("hello should be Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("kid should be dik", () => {
  expect(reversedString("kid")).toBe("dik");
});
