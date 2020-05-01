// Exp
console.log(2e2); // e2 acrescenta 2 zeros a direita

console.log(2e5); // e5 acrescenta 5 zeros a direita

console.log(5e-4); // e-4 acrescenta 4 zeros a esquerda

// Soma
var soma = 100 + 50;
console.log(soma);

// Subtração
var subtracao = 100 - 50;
console.log(subtracao);

// Multiplicação
var multiplicacao = 100 * 2;
console.log(multiplicacao);

// Divisão
var divisao = 100 / 2;
console.log(divisao);

// Exponenciação
var expoente = 4 ** 2;
console.log(expoente);

// Modulo - Restante inteiro
var modulo = 14 % 5;
console.log(modulo);

// Operações Aritméticas com Strings
var soma = "100" + 50; // O conteúdo é concatenado > 10050
console.log(soma);

var subtracao = "100" - 50; // 50 > Se o conteúdo da string for número o JS converte a string pra número e faz o cálculo
console.log(subtracao);

var multiplicacao = "100" * "2"; // 200 > Se o conteúdo da string for número o JS converte a string pra número e faz o cálculo
console.log(multiplicacao);

var divisao = "Comprei 10" / 2; // NaN (Not a Number) > Se o conteúdo da string NÃO for número o JS apresenta mensagem de NaN
console.log(divisao);

// A ordem importa - PARENTESES PRIORIZA
var total1 = 20 + 5 * 2; // 30 - Primeiro a multiplicação depois a soma
var total2 = (20 + 5) * 2; // 50 - Primeiro o parenteses depois a multiplicação
var total3 = (20 / 2) * 5; // 50 - Primeiro o parenteses depois multiplicação
var total4 = 10 + 10 * 2 + 20 / 2; // 40 - Primeiro a divisão (20/2=10), depois a multiplicação (10*2=20) e depois a soma (10+20+10=40)

console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);

// OPERADORES ARITMÉTICOS UNÁRIOS

// Incremento
var incremento = 5;
console.log(incremento++); // 5 > Dois sinais de mais do lado direito da variável acrescenta mais um (+1) na variável, porém só é exibido na chamada seguinte da váriável SEM o incremento;
console.log(incremento);

var incremento2 = 5;
console.log(++incremento2); // 6 > Dois sinais de mais do lado esquerdo da variável acrescenta mais um (+1) na variável no mesmo momento, NÃO somente na chamada seguinte
console.log(incremento2);

// Decremento
var decremento = 5;
console.log(decremento--); // 5 > Dois sinais de menos do lado direito da variável subtrai mais um (-1) na variável, porém só é exibido na chamada seguinte da váriável SEM o decremento;
console.log(decremento);

var decremento2 = 5;
console.log(--decremento2); // 4 > Dois sinais de menos do lado esquerdo da variável acrescenta menos um (-1) na variável no mesmo momento, NÃO somente na chamada seguinte
console.log(decremento2);

// + e - antes das variáveis
// Transforma a váriável em número

var frase = "Isso é um teste";
+frase; // NaN - Não é possível transformar uma frase (string) em número
-frase; // NaN

var idade = "39";
+idade; // 39
-idade; // -39 > Transforma o valor em negativo
console.log(+idade + 5); // 44

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1 - transforma o true em 1 (número)

// EXERCICIOS

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; // 35
console.log(total);

// Crie duas expressões que retornem NaN
var nome = "Fabio";
var idade = 39;
var nomeIdade = nome * idade;
console.log(nomeIdade);

var expressao1 = "Teste";
console.log(expressao1 / 2);

// Somar a string '200' com o número 50 e retornar 250
var n1 = "200";
var n2 = 50;
console.log(+n1 + n2);
// > Resolução simplificada
var soma = +"200" + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(x++);
console.log(x);
console.log(++x);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // 80kg
var pesoPorDois = peso / 2; // NaN
console.log(pesoPorDois);

// Resolução
var peso = +numero / 2 + unidade;
console.log(peso);
