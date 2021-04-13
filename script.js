//tipos de variaveis

/** 1°- Number
 * 
 * A variavel tipo nunber é utilizada para
 * elementos como: Números inteiros, Reais e Decimais
 * 
 * Recebendo Apenas Nuemros!!
 * 
 * tendo também a possibilidade de executar operações matematicas
 * 
 * Exemplos:
 * 
 */

console.log(typeof 13);
console.log(13);
console.log(typeof 1.3);
console.log(1.3);
console.log(typeof -13);
console.log(-13);
console.log(typeof 5 + 5);
console.log(5 + 5);

//
console.log("------------------------------------------------");
//



/** 2°- String
 * 
 * A varivavel tipo string é utilizada para qualquer elemento 
 * do tipo texto!
 * 
 * Recebendo Numeros tambem mas serão dessa vez apresentados
 * como um texto e não como uma variavel número
 * isso causa também o impedimento de operações matematicas!!
 * 
 * Segue exemplos:
 * 
 */

console.log(typeof "Hello World");
console.log("Hello World");

//Números em formato de String

console.log(typeof "5");
console.log("5");
console.log("5 + 5");


//
console.log("------------------------------------------------");
//


/** 3° Boolean
 * 
 * Dados do tipo Booleano são sempre verificações de afirmações
 * sendo possiveis apenas 2 respostas: 1 ou 0, True(verdadeiro) ou False(falso).
 * 
 * Exemplos:
 * 
 */

console.log(typeof true);
console.log(true);
console.log(false);
console.log(2 > 1);
console.log(1 > 2);

//
console.log("------------------------------------------------");
//

/** Extra: A utilização do simbolo (!) faz a negação da afirmação
* fazendo com que a afimação que venha sempre seja o contrario da correta
*
* Exemplo:
*
*/

console.log(typeof !(true));
console.log(!(true));
console.log(!(false));
console.log(!(2 > 1));
console.log(!(1 > 2));

//
console.log("------------------------------------------------");
//


//Operadores

/**
 * operadores logicos, são nada mais que operações de verificações para serem usadas
 * em variaveis do tipo boolean.
 * 
 * São eles:
 * 
 * (&&)
 * 
 * (||)
 * 
 * (!) 
 * 
 * (&&) para ser verdadeiro os dois lados precisam ser verdadeiros!
 * 
 * (||) apenas um dos lados precisa ser verdadeiro!
 * 
 * (!) Inverte o valor de saida (linha 78 para detalhes extras)
 * 
 * Exemplos:
 * 
 */

console.log(5 > 3 && 3 > 5 );
console.log(5 > 3 && 3 > 2 );
console.log(5 > 3 && 3 == 2 );
console.log(true == true && false == false);
console.log(true == false && false == true);

//
console.log("------------------------------------------------");
//

console.log(5 > 3 || 3 > 5 );
console.log(5 < 3 || 3 < 2 );
console.log(5 > 3 || 3 == 2 );
console.log("5" == 5 || "5" == "5");
console.log(true == false || false == true);
console.log(true == true || false == true);

//
console.log("------------------------------------------------");
//

console.log( !(5 > 3 && 3 > 5) );
console.log(!(true == true && false == false));
console.log(!("5" == 6 || "5" == "6"));

//
console.log("------------------------------------------------");
//

//Extra: Valores Vazios(empy values)

/** empy values
 * 
 * são valores dados automaticamente pelo javascript quando uma variavel
 * vem sem nenhuma informação ou informação desconhecida
 * 
 * Resumindo os valores não existem!
 * 
 * Exemplo:
 */

console.log(null);
console.log(undefined);

//
console.log("------------------------------------------------");
//

//extra extra:

/** NaN
 * Esta resposta e dada quando o valor de uma variavel não é um número
 * sendo NaN a abreviação de Not a Number (não é um número)
 * 
 * acontece apenas para erros em variaves numbers */

console.log(5 * "rafael");
