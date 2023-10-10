// Tipo Boolean - Verdadeiro OU Falso - Para estruturas de Comparação
// true -> Verdadeiro
// false -> Falso

const num1 = 5; // Primeiro numero (num1)
const num2 = 5; // Segundo numero (num2)

console.log(num1 === num2)
// Retornará >> true << no console


// Reparar nos caracteres minúsculos e maiúsculos!!
const text1 = "Flavia";
const text2 = "flavia";

console.log(text1 === text2)
// Retornará >> false << no console

// Truthy OU Falsy

// 0 = falsy
// 1 = truthy

console.log(0 == false)
console.log("" == false)
// Ambos retornarão >> true << no console

console.log(1 == false)
console.log("Flavia" == false)
// Ambos retornarão >> false << no console

// Null E Undefined

// Ambos são vazio/sem nada/nulo, porém de formas diferentes...

let minhaVar;
let varNull = null;

console.log(minhaVar)
// Retornará >> undefined << no console

console.log(varNull)
// Retornará >> null << no console

// Especialidades que o Null tem e que Undefined não tem, por ser apenas um dado não definido

let numero = 3;
let texto = "Flavia"

console.log(typeof minhaVar)
// Retornará >> undefined << no console

console.log(typeof varNull)
// Retornará >> object << no console
