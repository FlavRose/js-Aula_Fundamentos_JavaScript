// Funções

// DECLARAÇÃO DE FUNÇÃO

// 1) Declarar a função

function imprimeTexto(texto) {
    console.log(texto);
}

// 2) Executar/chamar a função (1 ou + vezes)

imprimeTexto("Oi!");
imprimeTexto("Tudo bem?");

// Existem tres formas de escrever funções

//function soma() {
    //outros códigos
    //outros códigos
 //   return 2 + 2;
//}
//Vale lembrar que: qualquer coisa que for colocado DEPOIS do return não será executado!
//console.log(soma());


// Parâmetros x Argumentos

// Ordem dos Parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos de idade!`;
}

console.log(nomeIdade("Flavia", 21));


function multiplica(num1, num2) {
    return num1 * num2;
}

console.log(multiplica(8, 94));


// EXPRESSÃO DE FUNÇÃO

const soma = function(num1, num2) {return num1 + num2};
console.log(soma(1, 1));


// Diferença Principal entre: Expressão de Função x Declaração de Função --> HOISTING
// Funções Declaradas e var são "listadas" no topo do arquivo

// Exemplo:

console.log(seApresentar());
function seApresentar() {
    return "Sou Desenvolvedora de Software";
}
// Retornará >> Sou Desenvolvedora de Software << no console

console.log(concatenando("Me chamo Flavia ", "Sou Dev Full-Stack"));
const concatenando = function (nome, carreira) {return nome + carreira};
// Retornará >> bug << no console. Mas por que?
// Pois não no caso de Expressão de Função, ele precisa ser declarado antes de ser exibido


// ARROW FUNCTION

//exemplo 1
const apresentarArrow = nome => `Meu nome é ${nome}`;

//exemplo 2
const divisao = (num1, num2) => num1 / num2;

//exemplo 3: Arrow Function com + de uma linha de instrução e + de um retorno
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "Somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}

// HOISTING: Arrow Function se comporta como a Expressão de Função, tomar cuidado!
