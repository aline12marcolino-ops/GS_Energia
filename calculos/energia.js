
export const dadosHospital = {
  quantidadeLampadas: 1500,
  horasPorDia: 24,
  diasPorMes: 30,
  potenciaConvencionalW: 40,
  potenciaLedW: 18,
  tarifaKwh: 0.7894,
  potenciaPainelW: 550,
  geracaoPorKwpMesKwh: 100.2
};

export const horasMes = d =>
  d.horasPorDia * d.diasPorMes;

export function calcularConsumoMensal(
  potenciaW,
  d = dadosHospital
) {
  return (
    d.quantidadeLampadas *
    potenciaW *
    horasMes(d)
  ) / 1000;
}

export function calcularEconomiaEnergia(
  d = dadosHospital
) {
  const convencional = calcularConsumoMensal(
    d.potenciaConvencionalW, d
  );

  const led = calcularConsumoMensal(
    d.potenciaLedW, d
  );

  const economia = convencional - led;

  return {
    convencional,
    led,
    economia,
    percentual: (economia / convencional) * 100
  };
}

export function calcularCustos(d = dadosHospital) {
  const r = calcularEconomiaEnergia(d);

  return {
    custoConvencional: r.convencional * d.tarifaKwh,
    custoLed: r.led * d.tarifaKwh,
    economiaFinanceira: r.economia * d.tarifaKwh
  };
}

export function calcularSistemaSolar(d = dadosHospital) {
  const alvo = calcularConsumoMensal(
    d.potenciaLedW, d
  );

  const kwp = alvo / d.geracaoPorKwpMesKwh;

  const quantidadePaineis = Math.ceil(
    kwp / (d.potenciaPainelW / 1000)
  );

  return {
    consumoAlvoKwh: alvo,
    potenciaNecessariaKwp: kwp,
    quantidadePaineis,
    potenciaInstaladaKwp:
      quantidadePaineis * d.potenciaPainelW / 1000
  };
}

export const moeda = valor =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valor);
