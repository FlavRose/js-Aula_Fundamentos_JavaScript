//Template String OU Template Literal

// Exemplo1: concatenando com o Operador " + " ->(menos indicado)

let nome = "Flavia";
let sobrenome = "Rosa da Silveira";
let apresentacao = "Meu nome é " + nome + sobrenome;

console.log(apresentacao);
// Retornará >> Meu nome é FlaviaRosa da Silveira << no console


//Exemplo2: Concatenando com a função template() do ES6 (String Interpolation ou Templating Strings)->(mais indicado)

let idade = 21;
let cidade = "Porto Alegre"
let apresentacaoCompleta = `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e sou de ${cidade}`;
                                        //template literal -> ${variável/expressão}

console.log(apresentacaoCompleta);
// Retornará >> Meu nome é Flavia Rosa da Silveira, tenho 21 anos e sou de Porto Alegre << no console

// Diferença entre as duas formas (Operadores "+") vs (Template literals `${}`)

// Percebe que a Template String ajuda até com os espaços entres as variáveis/expressões, tornando nosso código bem mais organizado e nos trazendo menos trabalho durante a "edição"!
