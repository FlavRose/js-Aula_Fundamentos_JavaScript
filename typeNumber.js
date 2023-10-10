// Tipo Number - Numero

// Numeros inteiros

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica)

// Ponto Flutuante nada mais é do que Numeros Decimais, ou seja, numeros com vírgula

const numeroPontoFlutuante = 3.3;
const numeroPontoFlutuanteSemZero = .5; //JS reconhece .5 como 0.5 por exemplo

const novaOperacaoMatematica = primeiroNumero + numeroPontoFlutuante;

console.log(novaOperacaoMatematica)

//NaN = Not a Number

const string = "Flavia";

console.log(string * primeiroNumero) //Exemplo de NaN, quando o JS não consegue operar uma operação
