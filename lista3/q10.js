// Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer,
// retorne-os em forma de citação bibliográfica conforme exemplo: Fulano Santos --> Santos, Fulano.

const fcitacao = (a, b) => `${b}, ${a[0]}`      // a guarda apenas o primeiro elemento passado em nome: Ana = A

const nome = prompt("Insira o nome: ")          // Nome: Samylla
const sobrenome = prompt("Insira o sobrenome: ")    // Sobrenome: Leite

resultado = fcitacao(nome, sobrenome)       // fcitacao passa Samylla Leite para a & b

const citacao = `Como citar ${nome} ${sobrenome}: ${resultado}.` 

console.log(citacao)        // Como citar Samylla Leite: Leite, S.