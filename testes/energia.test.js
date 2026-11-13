
import test from "node:test";
import assert from "node:assert/strict";

import {
  calcularConsumoMensal,
  calcularEconomiaEnergia,
  calcularCustos,
  calcularSistemaSolar
} from "../calculos/energia.js";

test("Consumo convencional", () => {
  assert.equal(
    calcularConsumoMensal(40),
    43200
  );
});

test("Consumo LED", () => {
  assert.equal(
    calcularConsumoMensal(18),
    19440
  );
});

test("Economia e percentual", () => {

  const r = calcularEconomiaEnergia();

  assert.equal(r.economia, 23760);

  assert.ok(
    Math.abs(r.percentual - 55) < 0.000001
  );

});

test("Custos", () => {

  const r = calcularCustos();

  assert.equal(r.custoConvencional, 34102.08);

  assert.ok(
    Math.abs(r.custoLed - 15345.936) < 0.000001
  );

  assert.ok(
    Math.abs(r.economiaFinanceira - 18756.144) < 0.000001
  );

});

test("Dimensionamento preliminar solar", () => {

  assert.equal(
    calcularSistemaSolar().quantidadePaineis,
    353
  );

});
