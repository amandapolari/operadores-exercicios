# Operadores - Exercícios

## Índice

-   [Exercício 1](#exercício-1)
    -   [Enunciado](#enunciado)
    -   [Resolução](#resolução)
-   [Exercício 2](#exercício-2)
    -   [Enunciado](#enunciado-1)
    -   [Resolução](#resoluc3a7c3a3o-1)
-   [Exercício 3](#exercício-3)
    -   [Enunciado](#enunciado-2)
    -   [Resolução](#resoluc3a7c3a3o-2)

## Exercício 1

### Enunciado:

Construa um programa que:

a) Peça ao usuário que insira um número **par**

b) Imprima no console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.

> 💡 **Dica**: não se esqueça de **converter** as respostas para o tipo número

### Resolução:

```js
const numeroInseridoPeloUsario = Number(
    prompt('Por favor, insira um número par:')
);

const restoDaDivisaoPorDois = numeroInseridoPeloUsario % 2;

console.log(`O resto da divisão por dois é: ${restoDaDivisaoPorDois}`);

// Qualquer número par dividido por 2 possui resto 0;

// Qualquer número ímpar dividido por 2 possui resto 1;
```

## Exercício 2

### Enunciado:

Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que o segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
```

### Resolução:

```js
const primeiroNumero = Number(prompt('Por favor, digite seu primeiro número:'));
const segundoNumero = Number(prompt('Por favor, digite seu segundo número:'));

const primeiroMaiorQueSegundo = primeiroNumero > segundoNumero;
console.log(
    `O primeiro numero é maior que o segundo? ${primeiroMaiorQueSegundo}`
);

const primeiroIgualAoSegundo = primeiroNumero === segundoNumero;
console.log(
    `O primeiro número é igual ao segundo número? ${primeiroIgualAoSegundo}`
);

const verificandoDivisibilidadePrimeiroPeloSegundo =
    primeiroNumero % segundoNumero;
const primeiroEDivisivelPeloSegundo =
    verificandoDivisibilidadePrimeiroPeloSegundo === 0;
// === Retorna um booleano, então se verif...for igual a 0, retorna true, e se não for vai retornar false.

console.log(
    `O primeiro numero é divisível pelo segundo? ${primeiroEDivisivelPeloSegundo}`
);

const verificandoDivisibilidadeSegundoPeloPrimeiro =
    segundoNumero % primeiroNumero;
const segundoEDivisivelPeloPrimeiro =
    verificandoDivisibilidadeSegundoPeloPrimeiro === 0;

console.log(
    `O segundo numero é divisível pelo primeiro? ${segundoEDivisivelPeloPrimeiro}`
);
```

## Exercício 3

### Enunciado:

# Exercício 3

### Parte 1

Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de (vinte é maior que cinquenta)

d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

Exemplo:

```jsx
const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false,
que devolve false*/
```

### Parte 2

Na aula passada começamos a implementar um sistema para o RH de uma empresa.

Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário

Calcule:

1. O salário fixo mais o auxílio creche

2. Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor\*0.2)

3. Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

4. Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

5. A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
   (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

### Resolução:

```js
console.log('PARTE 1 ------');

// a) 5 é maior que 20 e também é menor que 2;
const comparacaoA = 5 > 20 && 5 < 2;
console.log(`5 é maior que 20 e também é menor que 2? ${comparacaoA}`);

// b) 5 é igual a 5 ou é igual a “5”;
const comparacaoB = 5 === 5 || 5 === '5';
console.log(`5 é igual a 5 ou é igual a “5”? ${comparacaoB}`);

// c) negação de (vinte é maior que cinquenta);
const comparacaoC = !(20 > 50);
console.log(`negação de (vinte é maior que cinquenta): ${comparacaoC}`);

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta);
const comparacaoD = !(20 > 50 || 50 > 60);
console.log(`negação de (vinte é maior que cinquenta): ${comparacaoD}`);

console.log('PARTE 2 ------');

/*
O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.
*/

//Transformando as informações acima em variáveis úteis:
const nomeCompleto = 'Fulano de Silva';
const cpf = '000.000.000-00'; //Não sei se devo transf em number
const nascimento = '10/02/1990'; //Não sei se devo transf em number
const endereco = 'Rua dos bobos nº 0';
const quantidadeDeFilhos = 2;
const possuiHabilitação = 'Sim'; //Não sei se devo transf em boolean.
const cargo = 'vendedor';
const salario = 2000;
const comissao = 0.1; // 10%
const anoAdmissao = 2019;

// a) Auxílio creche por filho:  R$45,50:
const auxilioCrechePorFilho = 45.5;
let auxilioCrecheMensal = auxilioCrechePorFilho * quantidadeDeFilhos;
let salarioMaisAuxilio = salario + auxilioCrecheMensal;

// b) Comissão de 10% sobre o total de vendas mensal
// Total de vendas de cada mês:
const totalDeVendasJan = 5784;
const totalDeVendasFev = 3418;
const totalDeVendasMar = 4124;
const totalDeVendasAbr = 1874;
const totalDeVendasMai = 7000;
const totalDeVendasJun = 9450;

// Comissão referente a cada mês:
const comissaoDeJan = comissao * totalDeVendasJan;
const comissaoDeFev = comissao * totalDeVendasFev;
const comissaoDeMar = comissao * totalDeVendasMar;
const comissaoDeAbr = comissao * totalDeVendasAbr;
const comissaoDeMai = comissao * totalDeVendasMai;
const comissaoDeJun = comissao * totalDeVendasJun;

// d)  Desconto do INSS 5% do salário:
const porcentDescontInss = 0.05; // 5% = 0.05

// CALCULE:
// 1. O salário fixo mais o auxílio creche;
const salarioMaisAuxilioCreche = salario + auxilioCrecheMensal;
console.log(
    `O salário fixo mais o auxílio creche é igual a: R$ ${salarioMaisAuxilioCreche}`
);

// 2. Quanto Fulano de Silva receberá de comissão em Jan
console.log(`Fulano de Silva receberá de comissão em Jan: R$ ${comissaoDeJan}`);

// 3. Quanto Fulano de Silva será descontado em Jan pelo INSS
const salarioMaisComissaoDeJan = salario + comissaoDeJan;
const descontoInssDeJan = salarioMaisComissaoDeJan * 0.05;
console.log(
    `Fulano de Silva será descontado em Jan pelo INSS o valor de: R$ ${descontoInssDeJan.toFixed(
        2
    )}`
);

// 4. Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
// Calculando o desconto do INSS proporcional a cada mês:
const descontoInssJan = (salario + comissaoDeJan) * porcentDescontInss;
const descontoInssFev = (salario + comissaoDeFev) * porcentDescontInss;
const descontoInssMar = (salario + comissaoDeMar) * porcentDescontInss;
const descontoInssAbr = (salario + comissaoDeAbr) * porcentDescontInss;
const descontoInssMai = (salario + comissaoDeMai) * porcentDescontInss;
const descontoInssJun = (salario + comissaoDeJun) * porcentDescontInss;

// Acrescentando auxilio creche e descontando valores:
let salarioLiquidoJan =
    salario + comissao - descontoInssJan + auxilioCrecheMensal;
let salarioLiquidoFev =
    salario + comissao - descontoInssFev + auxilioCrecheMensal;
let salarioLiquidoMar =
    salario + comissao - descontoInssMar + auxilioCrecheMensal;
let salarioLiquidoAbr =
    salario + comissao - descontoInssAbr + auxilioCrecheMensal;
let salarioLiquidoMai =
    salario + comissao - descontoInssMai + auxilioCrecheMensal;
let salarioLiquidoJun =
    salario + comissao - descontoInssJun + auxilioCrecheMensal;

//Imprimindo no console:
console.log(`
O salário líquido do mês de Jan é igual a: R$ ${salarioLiquidoJan.toFixed(2)};
O salário líquido do mês de Fev é igual a: R$ ${salarioLiquidoFev.toFixed(2)};
O salário líquido do mês de Mar é igual a: R$ ${salarioLiquidoMar.toFixed(2)};
O salário líquido do mês de Abr é igual a: R$ ${salarioLiquidoAbr.toFixed(2)};
O salário líquido do mês de Mai é igual a: R$ ${salarioLiquidoMai.toFixed(2)};
O salário líquido do mês de Jun é igual a: R$ ${salarioLiquidoJun.toFixed(2)};
`);

// 5. A média do salário em seis meses (de Jan a Jun), levando em consideração as comissões e auxílio.
let mediaSalarial =
    (salarioLiquidoJan +
        salarioLiquidoFev +
        salarioLiquidoMar +
        salarioLiquidoAbr +
        salarioLiquidoMai +
        salarioLiquidoJun) /
    6;
```
