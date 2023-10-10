// Operador Ternário (Particularidades do JavaScript)
// O Operador Ternário funciona como se fosse um IF, porém utilizando apenas uma linha de código

// Exemplo1 utilizando IF (mais indicado):
const idadeMinima = 18;
let idadeCliente = 17;

if (idadeCliente >= idadeMinima) { //condição
    console.log("Pode beber!"); //true
} else {
    console.log("Não pode beber!"); //false
}
// Nesse caso, retornará >> Não pode beber! << no console


// Exemplo2 Utilizando o Operador Ternário (menos indicado):

                    //condição               //true           //false
console.log(idadeCliente >= idadeMinima ? "Pode Beber!" : "Não Pode Beber!")

// Se chama Operador Ternário: Pois tem tres Operadores em uma única linha de código!

// >= maior igual para comparar

// ? interrogação para separar a comparação do que vai ser executado

// : dois pontos para separar os dois resultados de TRUE e de FALSE
