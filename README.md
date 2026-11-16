# Hospital Inteligente e Sustentável

**Projeto acadêmico FIAP – Global Solution 2026.2**
**Citizen Assist AI – Assistente Inteligente para Eficiência Energética Hospitalar**

## Integrantes

- **Aline Medri Marcolino** – RM: 569349
- **Luís Fernando de Azevedo** – RM: 574167
- **Rafael Ferreirinha Quaresma** – RM: 571949

## 1. Objetivo

O projeto tem como objetivo desenvolver um assistente digital inteligente para apoiar a análise de eficiência energética em hospitais.

O Citizen Assist AI permite consultar estimativas de consumo elétrico da iluminação hospitalar, comparar lâmpadas convencionais com lâmpadas LED, calcular a economia de energia e apresentar um pré-dimensionamento de um sistema de energia solar.

O sistema utiliza inteligência artificial generativa por meio do modelo Gemma 3:4b, executado localmente com Ollama.

## 2. Público e problema

O público considerado são hospitais, gestores e equipes responsáveis pela infraestrutura e pelo consumo de energia.

Hospitais possuem funcionamento contínuo, o que pode elevar o consumo de energia elétrica e os custos operacionais.

O projeto busca demonstrar como a tecnologia e a inteligência artificial podem facilitar o acesso a informações sobre eficiência energética e apoiar a tomada de decisões.

## 3. Tecnologias utilizadas

- HTML5: estrutura da aplicação.
- CSS3: estilização e interface do chatbot.
- JavaScript: lógica da aplicação e cálculos.
- Node.js: execução do servidor.
- Ollama: execução local do modelo de inteligência artificial.
- Gemma 3:4b: modelo de IA utilizado para interpretar perguntas e gerar respostas.
- Node.js Test Runner: execução dos testes automatizados.

## 4. Premissas e origem dos dados

Os cálculos de iluminação consideram um cenário hipotético de hospital, com os seguintes parâmetros:

| Parâmetro | Valor adotado | Origem |
|---|---:|---|
| Quantidade de lâmpadas | 1.500 unidades | Premissa da equipe |
| Funcionamento diário | 24 horas | Cenário hipotético |
| Período mensal | 30 dias | Critério de cálculo |
| Horas mensais | 720 horas | Resultado do cálculo |
| Potência convencional | 40 W | Premissa acadêmica |
| Potência LED | 18 W | Premissa acadêmica |
| Tarifa de energia | R$ 0,7894/kWh | Valor de referência do exercício |
| Potência de cada painel solar | 550 W | Premissa de dimensionamento |
| Geração solar estimada | 100,2 kWh/kWp/mês | Hipótese preliminar |

Os dados utilizados estão organizados no arquivo `dados/consumo.csv`.

As fontes institucionais e tecnológicas consultadas, assim como as premissas e limitações do estudo, estão descritas no arquivo `referencias.md`.

Os valores adotados não representam necessariamente dados reais de uma instituição hospitalar.

## 5. Resultados dos cálculos

Os cálculos comparam o consumo de lâmpadas convencionais de 40 W com lâmpadas LED de 18 W, considerando 1.500 unidades funcionando 24 horas por dia durante 30 dias.

| Indicador | Resultado |
|---|---:|
| Consumo convencional | 43.200 kWh/mês |
| Consumo LED | 19.440 kWh/mês |
| Economia de energia | 23.760 kWh/mês |
| Redução do consumo | 55% |
| Custo convencional | R$ 34.102,08/mês |
| Custo LED | R$ 15.345,94/mês |
| Economia financeira | R$ 18.756,14/mês |
| Economia financeira anual | R$ 225.073,73 |

### 5.1 Energia solar

O pré-dimensionamento considera o consumo mensal da iluminação LED, painéis solares de referência de 550 W e geração estimada de 100,2 kWh/kWp/mês.

**Resultado estimado: 353 painéis solares.**

Essa quantidade é uma estimativa inicial. Um projeto real exige avaliação de localização, irradiação solar, orientação, inclinação, sombreamento, perdas e condições de instalação.

### 5.2 Justificativas das recomendações: custos, viabilidade e impactos ambientais

#### Substituição de lâmpadas convencionais por LED

**Custos e economia**

A substituição de lâmpadas convencionais de 40 W por lâmpadas LED de 18 W apresenta potencial de redução do consumo de energia elétrica.

Considerando os resultados calculados, a economia estimada é de 23.760 kWh por mês, representando uma redução de 55% no consumo da iluminação.

Com a tarifa de referência de R$ 0,7894/kWh, a economia financeira estimada é de R$ 18.756,14 por mês, aproximadamente R$ 225.073,73 por ano.

**Viabilidade**

A substituição por LED pode ser realizada gradualmente, por setores do hospital. Antes da implementação, devem ser avaliadas a compatibilidade das luminárias, a qualidade dos equipamentos e a necessidade de manter níveis adequados de iluminação em cada ambiente.

A confirmação do retorno financeiro depende dos custos reais de aquisição, instalação e manutenção.

**Impactos ambientais**

A redução do consumo de energia pode diminuir os impactos ambientais associados à geração de eletricidade. As lâmpadas LED também podem apresentar maior vida útil, reduzindo a frequência de substituição e a quantidade de resíduos gerados. O descarte deve seguir as regras aplicáveis de gerenciamento de resíduos.

#### Utilização de energia solar fotovoltaica

**Custos e economia**

A energia solar foi considerada uma alternativa complementar para reduzir a dependência de eletricidade adquirida da rede.

O pré-dimensionamento estimou aproximadamente 353 painéis solares de 550 W, considerando o consumo mensal da iluminação LED e a hipótese de geração de 100,2 kWh/kWp/mês.

A geração própria pode contribuir para reduzir os gastos com eletricidade. Entretanto, não foi calculado o investimento total nem o prazo de retorno financeiro, pois seriam necessários orçamentos e dados técnicos específicos.

**Viabilidade**

A implantação depende de avaliação da área disponível, irradiação solar local, orientação, inclinação, sombreamento, perdas do sistema, custos de instalação e manutenção e regras de conexão à rede elétrica.

Em hospitais, a instalação deve ser planejada para não comprometer a continuidade e a segurança dos serviços.

O sistema fotovoltaico não garante fornecimento durante interrupções da rede elétrica sem equipamentos e soluções específicas de armazenamento e operação.

**Impactos ambientais**

A energia solar utiliza uma fonte renovável e pode reduzir a necessidade de eletricidade proveniente de fontes com maiores emissões de gases de efeito estufa.

Também devem ser considerados os impactos da fabricação, transporte, instalação e descarte dos painéis e demais componentes.

#### Comparação das alternativas

| Critério | Iluminação LED | Energia solar |
|---|---|---|
| Economia de energia | Reduz o consumo da iluminação | Gera parte da energia consumida |
| Economia financeira | Estimada em R$ 18.756,14/mês | Depende da geração e do investimento |
| Viabilidade | Pode ser implementada gradualmente | Exige avaliação técnica do local |
| Impacto ambiental | Reduz o consumo elétrico | Utiliza fonte renovável |
| Limitações | Aquisição e compatibilidade | Investimento, espaço e condições de geração |

#### Recomendação final

Com base nos resultados, recomenda-se priorizar a substituição da iluminação convencional por LED, pois essa alternativa apresentou redução estimada de 55% no consumo de energia da iluminação.

A energia solar fotovoltaica é recomendada como alternativa complementar, condicionada à realização de um estudo técnico e econômico específico para o hospital.

A combinação das duas soluções pode contribuir para melhorar a eficiência energética, reduzir custos operacionais e diminuir os impactos ambientais associados ao consumo de eletricidade.

Os resultados são estimativas acadêmicas e não substituem um projeto técnico elaborado com dados reais de uma unidade hospitalar.

## 6. Funcionamento do Citizen Assist AI

O chatbot permite que o usuário faça perguntas em linguagem natural sobre eficiência energética hospitalar.

O funcionamento ocorre da seguinte maneira:

1. O usuário digita uma pergunta na interface do chatbot.
2. O servidor Node.js recebe a solicitação.
3. O servidor encaminha a pergunta ao Ollama.
4. O modelo Gemma 3:4b interpreta a pergunta e gera uma resposta.
5. Os dados calculados do hospital são fornecidos como contexto para orientar as respostas.
6. A resposta é apresentada na interface do chatbot.

O sistema também possui indicadores visuais de consumo convencional, consumo LED, economia de energia e economia financeira.

## 7. Estrutura do projeto

```text
GS_Energia/
│
├── calculos/
│   └── energia.js
│
├── dados/
│   └── consumo.csv
│
├── chatbot/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── testes/
│   ├── resultados.md
│   └── energia.test.js
│
├── referencias.md
├── README.md
├── package.json
└── servidor.js
```

## 8. Como executar o projeto

### Requisitos

- Node.js instalado.
- Ollama instalado.
- Modelo Gemma 3:4b disponível no Ollama.

### Etapas de execução

**1. Abrir o terminal**

Acesse a pasta principal do projeto:

```bash
cd GS_Energia
```

**2. Verificar o modelo instalado**

```bash
ollama list
```

**3. Garantir que o Gemma esteja disponível**

```bash
ollama run gemma3:4b
```

Depois de verificar o funcionamento, saia da conversa com:

```text
/bye
```

**4. Executar os testes automatizados**

```bash
npm test
```

**5. Iniciar o servidor**

```bash
npm run start
```
## 9. Testes e validação

### 9.1 Testes automatizados

O projeto possui testes automatizados para verificar:

- Consumo das lâmpadas convencionais.
- Consumo das lâmpadas LED.
- Economia de energia.
- Percentual de redução.
- Custos mensais.
- Pré-dimensionamento do sistema solar.

Os cinco testes automatizados foram executados com sucesso durante o desenvolvimento.

Os resultados estão documentados em `testes/resultados.md`.

### 9.2 Testes com usuários

Esta seção deverá registrar a validação prática do chatbot com usuários.

Após a realização dos testes, deverão ser documentados:

- Quantidade de pessoas participantes.
- Perguntas realizadas ao chatbot.
- Qualidade e clareza das respostas.
- Problemas ou dificuldades identificados.
- Ajustes realizados a partir das observações dos participantes.

Os registros devem corresponder a testes realmente realizados, sem substituir a validação com pessoas pelos testes automatizados.

## 10. Limitações

- Os cálculos dependem das premissas informadas para o estudo.
- O chatbot utiliza o modelo Gemma 3:4b, cuja qualidade das respostas depende da pergunta e do contexto fornecido.
- O modelo é executado localmente por meio do Ollama.
- As respostas da inteligência artificial devem ser verificadas, especialmente quando envolverem decisões técnicas.
- O pré-dimensionamento solar não substitui um projeto elaborado por profissionais habilitados.
- Tarifas, custos de instalação e condições de geração solar precisam ser validados para cada hospital.
- Não foi realizado orçamento comercial validado para instalação e manutenção dos sistemas.

## 11. Referências

As referências institucionais e tecnológicas utilizadas, bem como as fontes de consulta, premissas e limitações do estudo, estão organizadas no arquivo `referencias.md`.

## 12. Contribuição da Disciplina de Energias Renováveis e Sustentáveis

A contribuição desta disciplina para o projeto Hospital Inteligente e Sustentável – Citizen Assist AI está relacionada ao estudo da eficiência energética e à análise de alternativas sustentáveis para reduzir o consumo de eletricidade em ambientes hospitalares.

As atividades desenvolvidas incluem:

- Levantamento das premissas de consumo energético hospitalar.
- Cálculo do consumo mensal de lâmpadas convencionais.
- Comparação do consumo entre lâmpadas convencionais e lâmpadas LED.
- Cálculo da economia mensal de energia elétrica.
- Estimativa da redução dos custos com a substituição por iluminação LED.
- Dimensionamento preliminar de um sistema de geração de energia solar fotovoltaica.
- Análise dos benefícios econômicos e ambientais das alternativas propostas.
- Organização dos dados e cálculos utilizados para apoiar as recomendações do sistema.

Essa contribuição demonstra como a eficiência energética e o uso de fontes renováveis podem auxiliar na construção de hospitais mais econômicos, inteligentes e sustentáveis.
