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
var idade = "39";
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
