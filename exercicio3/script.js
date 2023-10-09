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
