// Conversões (Implícitas E Explícitas)
// Tipos de dados
// Booleanos


// Conversão Implícita -----> (Bem Propenso a dar Bugs!!)
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString)
// Retornará >> false << no console
// Pois um numero é diferente de uma String

console.log(numero == numeroString)
// Retornará >> true << no console
// Por conta da conversão implícita

console.log(numero + numeroString)
// Retornará >> 456456 << no console
// Pois como ele converteu implícitamente de forma automática o número em uma String, ele acaba fazendo uma concatenação ao invés de uma operação



// Conversão Explícita

console.log(numero + Number(numeroString))
// Retornará >> 912 << no console, executando essa operação de forma correta
// Pois assim, ele vai converter explícitamente a String em um Numero e vai executar a operação matemática ao invés de concatenar
