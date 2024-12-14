//  Escrever um programa que calcule o valor de um número elevado à quarta potência.
// Tente fazer uso do sub-problema de calcular o quadrado de um número qualquer.

function quartaPotencia (a) {
    const x = (a ** 2)
    return (x ** 2)
}

console.log(`O número elevado à quarta potência resulta em: ${quartaPotencia(3)}`)