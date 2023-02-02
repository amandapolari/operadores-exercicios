// Parte 1

// a) 5 é maior que 20 e também é menor que 2;
const comparacaoA = (5 > 20) && (5 < 2);
console.log(`5 é maior que 20 e também é menor que 2? ${comparacaoA}`);

// b) 5 é igual a 5 ou é igual a “5”;
const comparacaoB = (5===5) || (5==='5');
console.log(`5 é igual a 5 ou é igual a “5”? ${comparacaoB}`);

// c) negação de (vinte é maior que cinquenta);
const comparacaoC = !(20>50);
console.log(`negação de (vinte é maior que cinquenta): ${comparacaoC}`);

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta);
const comparacaoD = !((20>50) || (50>60));
console.log(`negação de (vinte é maior que cinquenta): ${comparacaoD}`);