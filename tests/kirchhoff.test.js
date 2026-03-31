const { calcularVoltajeFaltante } = require("../src/kirchhoff.js");

test("calcula correctamente el voltaje faltante", () => {
  expect(calcularVoltajeFaltante(5, 3)).toBe(-8);
});

test("funciona con valores negativos", () => {
  expect(calcularVoltajeFaltante(-2, 4)).toBe(-2);
});