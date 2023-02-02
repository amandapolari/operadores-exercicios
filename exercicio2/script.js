const primeiroNumero = Number(prompt('Por favor, digite seu primeiro número:'));
const segundoNumero = Number(prompt('Por favor, digite seu segundo número:'));

const primeiroMaiorQueSegundo = primeiroNumero > segundoNumero;
console.log(`O primeiro numero é maior que o segundo? ${primeiroMaiorQueSegundo}`);

const primeiroIgualAoSegundo = primeiroNumero === segundoNumero;
console.log(`O primeiro número é igual ao segundo número? ${primeiroIgualAoSegundo}`);

const verificandoDivisibilidadePrimeiroPeloSegundo = primeiroNumero % segundoNumero;
const primeiroEDivisivelPeloSegundo = verificandoDivisibilidadePrimeiroPeloSegundo === 0;
// === Retorna um booleano, então se verif...for igual a 0, retorna true, e se não for vai retornar false.

console.log(`O primeiro numero é divisível pelo segundo? ${primeiroEDivisivelPeloSegundo}`);

const verificandoDivisibilidadeSegundoPeloPrimeiro = segundoNumero % primeiroNumero;
const segundoEDivisivelPeloPrimeiro = verificandoDivisibilidadeSegundoPeloPrimeiro === 0;

console.log(`O segundo numero é divisível pelo primeiro? ${segundoEDivisivelPeloPrimeiro}`);



