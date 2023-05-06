import lenk from "./main.js";
describe("Given a length function", () => {
  describe("When it receives an array", () => {
    test("Then it should return 3", () => {
      const array = ["nube", "sol", "estrellas"];
      const expectedResult = 3;

      const result = lenk(array);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives an array", () => {
    test("Then it should return 5", () => {
      const array = ["tren", "rail", "estación", "parada", "línea"];
      const expectedResult = 5;

      const result = lenk(array);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives an string", () => {
    test("Then it should return 7", () => {
      const string = "bacalao";
      const expectedResult = 7;

      const result = lenk(string);

      expect(result).toBe(expectedResult);
    });
  });
});
