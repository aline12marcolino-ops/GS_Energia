
import {
  dadosHospital,
  calcularEconomiaEnergia,
  calcularCustos,
  calcularSistemaSolar,
  moeda
} from "../calculos/energia.js";

const energia = calcularEconomiaEnergia();
const custos = calcularCustos();
const solar = calcularSistemaSolar();

const numero = n =>
  new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2
  }).format(n);

// Atualiza os indicadores da tela

document.querySelector("#conv").textContent =
  numero(energia.convencional);

document.querySelector("#led").textContent =
  numero(energia.led);

document.querySelector("#eco").textContent =
  numero(energia.economia);

document.querySelector("#percentual").textContent =
  energia.percentual.toFixed(0) + "% de redução";

document.querySelector("#reais").textContent =
  moeda(custos.economiaFinanceira);


// Dados reais calculados do hospital

const contextoHospital = `
Você é o Citizen Assist AI, assistente inteligente
especializado em eficiência energética hospitalar.

Responda em português brasileiro, de maneira clara,
educada e natural.

Use estes dados como referência:

Quantidade de lâmpadas: ${dadosHospital.quantidadeLampadas}
Horas de funcionamento por dia: ${dadosHospital.horasPorDia}
Dias por mês: ${dadosHospital.diasPorMes}

Consumo convencional: ${numero(energia.convencional)} kWh/mês.
Consumo LED: ${numero(energia.led)} kWh/mês.
Economia de energia: ${numero(energia.economia)} kWh/mês.
Redução de consumo: ${energia.percentual.toFixed(0)}%.

Custo convencional: ${moeda(custos.custoConvencional)} por mês.
Custo LED: ${moeda(custos.custoLed)} por mês.
Economia financeira: ${moeda(custos.economiaFinanceira)} por mês.

Estimativa solar:
Quantidade de painéis: ${solar.quantidadePaineis}.
Potência de cada painel: ${dadosHospital.potenciaPainelW} W.
Potência instalada estimada: ${numero(solar.potenciaInstaladaKwp)} kWp.

A estimativa solar é preliminar e precisa de avaliação técnica.

Não invente números. Quando não souber uma informação,
explique que ela não está disponível nos dados do projeto.
Responda diretamente ao que a pessoa perguntou.
`;


// Exibir mensagens na tela

function mensagem(texto, tipo) {
  const p = document.createElement("p");

  p.className = tipo;
  p.textContent = texto;

  const area = document.querySelector("#mensagens");

  area.appendChild(p);
  area.scrollTop = area.scrollHeight;

  return p;
}


// Conversar com o Gemma pelo servidor

async function responder(pergunta) {
  const resposta = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      pergunta: `${contextoHospital}\n\nPergunta do usuário: ${pergunta}`
    })
  });

  const resultado = await resposta.json();

  if (!resposta.ok) {
    throw new Error(resultado.erro || "Erro ao consultar o Gemma.");
  }

  return resultado.resposta;
}


// Enviar pergunta

async function enviar(q) {
  if (!q.trim()) return;

  mensagem(q, "usuario");

  const carregando = mensagem(
    "Estou pensando na melhor resposta...",
    "bot"
  );

  try {
    const resposta = await responder(q);
    carregando.textContent = resposta;
  } catch (erro) {
    carregando.textContent =
      "Não consegui acessar a inteligência artificial. Verifique se o Ollama está funcionando e tente novamente.";

    console.error(erro);
  }

  const area = document.querySelector("#mensagens");
  area.scrollTop = area.scrollHeight;
}


// Evento do formulário

document.querySelector("#form").addEventListener(
  "submit",
  async e => {
    e.preventDefault();

    const input = document.querySelector("#pergunta");
    const pergunta = input.value;

    input.value = "";

    await enviar(pergunta);
  }
);


// Botões de perguntas prontas

document.querySelectorAll("[data-q]").forEach(botao => {
  botao.addEventListener("click", async () => {
    await enviar(botao.dataset.q);
  });
});
