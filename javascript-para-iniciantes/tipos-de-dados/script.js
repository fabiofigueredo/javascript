// Tipos de Dados - São 7 tipos de dados - todos os tipos são primitivos, exceto o tipo objeto

// Primitivos são dados imutáveis.

var nome = "Fábio"; // String

var idade = 39; // Number - Não usa aspas

var possuiFaculdade = true; // Boolean

var time; // Undefined

var comida = null; // Null

var simbolo = Symbol(); // Symbol

var novoObjeto = {}; // Object

// Para verificar qual o tipo de dado
var nome = "Fábio";
var sobrenome = "Figueredo";
var idade = 39;
var time;
var simbolo = Symbol();

console.log(typeof nome, idade, time, simbolo);

var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase);
console.log(typeof frase);

//TEMPLATE STRING - PASSA A EXPRESSÃO SEM PRECISAR QUEBRAR A STRING
var frase2 = `Romário fez ${gols} gols`;
console.log(frase2);

var frase3 = 'Javascript é "dificil" pra caraio';
console.log(frase3);

// EXERCICIOS

// Declare uma variável contendo uma string
var videoGame = "Playstation";
console.log(videoGame);

// Declare uma variável contendo um número dentro de uma string
var frase4 = "2020";
console.log(frase4);

// Declare uma variável com a sua idade
var idade = 39;
console.log(idade);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = "Fabio";
var sobrenome = "Figueredo";
var nomeCompleto = nome + " " + sobrenome;
var nomeCompleto2 = `${nome} ${sobrenome}`; // Usando Template String
console.log(nomeCompleto);
console.log(nomeCompleto2);

// Coloque a seguinte frase em uma variável: It's time
var frase5 = "It's time!"; // Usando aspas simples dentros de aspas duplas
var frase6 = "It's time!"; // Usando o scape \ para ignorar a aspas simples interna como fechamento da variável
var frase7 = `It's time!`; // Usando a sintaxe para Template String
console.log(frase5);
console.log(frase6);
console.log(frase7);

//Verifique o tipo da variável que contém seu nome
console.log(typeof nome);

var verificarTipoNome = typeof nome;
console.log(verificarTipoNome); //Verificar o tipo do dado usando uma variável
