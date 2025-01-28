//  Escrever um programa que calcule o valor de um número elevado à quarta potência.
// Tente fazer uso do sub-problema de calcular o quadrado de um número qualquer.


const numQuadrado = (x)  => x**2        // Eleva o valor a ^ 2

const a = parseFloat(prompt('Digite o valor de x: '))       // Passar o valor que deseja elevar a quarta potência

const calcPot = numQuadrado(numQuadrado(a))     // calcPot recebe a, passa para numQuadrado e passa o result p/ numQuadrado novamente = ^ 4

console.log(calcPot)