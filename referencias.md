# Referências e Premissas

## 1. Briefing da disciplina

FIAP. Global Solution 2026.2. Soluções em Energias Renováveis e Sustentáveis. Briefing e orientações da atividade acadêmica disponibilizados pela instituição na plataforma da disciplina.

## 2. Fontes institucionais

### 2.1 Empresa de Pesquisa Energética (EPE)

EMPRESA DE PESQUISA ENERGÉTICA (EPE). Balanço Energético Nacional (BEN). Disponível em:

https://www.epe.gov.br/pt/publicacoes-dados-abertos/publicacoes/balanco-energetico-nacional-ben

Acesso em: 13 nov. 2026.

**Utilização no projeto:** consulta a informações e estatísticas sobre oferta e consumo de energia no Brasil, como referência para contextualizar o estudo de eficiência energética.

### 2.2 Agência Nacional de Energia Elétrica (ANEEL)

AGÊNCIA NACIONAL DE ENERGIA ELÉTRICA (ANEEL). Tarifas de energia elétrica. Disponível em:

https://www.gov.br/aneel/pt-br/assuntos/consumidores/tarifas

Acesso em: 13 nov. 2026.

**Utilização no projeto:** consulta a informações sobre tarifas de energia elétrica e regulação do setor. A tarifa de R$ 0,7894/kWh utilizada nos cálculos foi adotada como premissa do exercício, não sendo apresentada como tarifa oficial validada para um hospital específico.

### 2.3 Instituto Nacional de Pesquisas Espaciais (INPE)

INSTITUTO NACIONAL DE PESQUISAS ESPACIAIS (INPE). Atlas Brasileiro de Energia Solar. Disponível em:

https://www.gov.br/pt-br/servicos/obter-dados-do-atlas-brasileiro-de-energia-solar-atlas-solar

Acesso em: 13 nov. 2026.

**Utilização no projeto:** referência para consulta do potencial de energia solar e da variação do recurso solar entre diferentes regiões brasileiras. O dimensionamento apresentado é preliminar e não utiliza uma avaliação solar específica do local de instalação.

## 3. Referências tecnológicas

### 3.1 Ollama

OLLAMA. Documentação da API. Disponível em:

https://github.com/ollama/ollama/blob/main/docs/api.md

Acesso em: 13 nov. 2026.

**Utilização no projeto:** referência para a integração entre o servidor Node.js e o serviço local do Ollama, responsável por executar o modelo de inteligência artificial.

### 3.2 Gemma 3

GOOGLE DEEPMIND. Gemma 3: documentação e informações do modelo. Disponível em:

https://ai.google.dev/gemma/docs/core/model_card_3?hl=pt-br

Acesso em: 13 nov. 2026.

**Utilização no projeto:** referência técnica do modelo Gemma 3:4b, utilizado para interpretar perguntas e gerar respostas em linguagem natural no Citizen Assist AI.

## 4. Premissas adotadas no exercício

Os valores abaixo foram definidos para a realização dos cálculos acadêmicos e não representam necessariamente dados reais de uma instituição hospitalar.

| Parâmetro | Valor adotado | Origem do dado |
|---|---:|---|
| Quantidade de lâmpadas | 1.500 unidades | Definido pela equipe |
| Potência convencional | 40 W | Premissa acadêmica |
| Potência LED | 18 W | Premissa acadêmica |
| Funcionamento diário | 24 horas | Cenário hipotético |
| Período mensal | 30 dias | Critério de cálculo |
| Horas mensais | 720 horas | Resultado do cálculo |
| Tarifa de energia | R$ 0,7894/kWh | Valor de referência do exercício |
| Potência de cada painel solar | 550 W | Premissa de dimensionamento |
| Geração solar de referência | 100,2 kWh/kWp/mês | Hipótese de geração solar |

## 5. Critérios e metodologia dos cálculos

O consumo mensal de energia foi estimado considerando a quantidade de lâmpadas, a potência individual e o tempo de funcionamento.

A fórmula utilizada para calcular o consumo mensal foi:

**Consumo (kWh) = Quantidade de lâmpadas × Potência (W) × Horas de funcionamento ÷ 1.000**

A economia energética foi calculada pela diferença entre o consumo estimado das lâmpadas convencionais e o consumo das lâmpadas LED.

A economia financeira foi estimada multiplicando a economia de energia pela tarifa adotada no exercício.

O percentual de redução do consumo foi calculado comparando a economia energética com o consumo convencional.

O pré-dimensionamento solar considerou o consumo mensal da iluminação LED, a potência dos painéis e a geração mensal de referência por kWp.

## 6. Limitações do estudo

- A quantidade de lâmpadas e o tempo de funcionamento são premissas acadêmicas e devem ser confirmados por medições em um hospital real.
- A tarifa utilizada não representa necessariamente o custo total da fatura hospitalar, que pode incluir impostos, encargos, demanda contratada e outros componentes.
- A geração solar depende da localização geográfica, irradiação, orientação, inclinação, sombreamento, perdas e características dos equipamentos.
- O fator de geração de 100,2 kWh/kWp/mês é uma hipótese preliminar do exercício, não um valor validado pelo INPE para um local específico.
- A quantidade estimada de painéis não substitui um projeto fotovoltaico elaborado por profissional habilitado.
- Não foi realizado orçamento comercial validado para instalação, manutenção ou cálculo de retorno financeiro.
- As respostas produzidas pela inteligência artificial devem ser conferidas, especialmente quando utilizadas para apoiar decisões técnicas.

## 7. Considerações finais

As fontes institucionais foram selecionadas para apoiar a contextualização energética, a consulta de tarifas e a análise do potencial solar brasileiro.

As premissas numéricas foram adotadas para permitir a demonstração dos cálculos e o funcionamento do Citizen Assist AI em um cenário acadêmico.

Os resultados apresentados são estimativas e não substituem estudos técnicos realizados com dados reais de uma unidade hospitalar.