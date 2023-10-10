// Operadores de Comparação

const numero = 5;
const texto = "5";

console.log(numero == texto)
// Retornará >> true << no console

console.log(numero === texto)
// Retornará >> false << no console

//typeof / tipo de...

console.log(typeof numero)
// Retornará >> number << no console

console.log(typeof texto)
// Retornará >> string << no console

// == compara apenas os valores (menos indicado por boas práticas)
// === compara os valores e os tipos de dado (mais indicado por boas práticas)

// Dica: Usar sempre as conversões explícitas (por boas práticas)
Number()
String()


// Operadores de comparação de NÃO IGUAL/DIFERENTE DE...

// != não igual (compara apenas os valores)
// !== estritamente não igual (compara os valores e os tipos de dado)

// Exemplo:
const idade = 21;
const idadeString = "21";

console.log(idade !== idadeString)
// Retornará >> true << no console

// Exemplo 2:
const num = 123;
const str = "123";

console.log(num != str)
// Retornará >> false << no console


// PARA SABER MAIS:

// Operador de Comparação && (E) -> Retorna true somente se todas as condições forem válidas
// Operador de Comparação || (OU) -> Retorna true caso uma condição seja válida

