import lenk from "./main.js";
describe("Given a length function", () => {
  describe("When it receives an array", () => {
    test("Then it should return true", () => {
      const array = ["nube", "sol", "estrellas"];
      const expectedResult = true;

      const result = lenk(array);

      expect(result).toBe(expectedResult);
    });
  });
});
