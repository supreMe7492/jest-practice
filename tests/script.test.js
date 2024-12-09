import { capitalize } from "../src/script";

test("hello should be Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});
