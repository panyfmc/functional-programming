//  Um móvel com velocidade constante percorre uma trajetória retilínea.
//  Considere t0 = 0, o instante inicial e x0=500 a posição inicial.
// Escreva um programa para calcular a velocidade do objeto em um dado instante t e posição x.

// s = s0 + vt  (fórmula do MU)

const velocidade = (x, t, x0=500, t0=0) => (x-x0)/(t-t0)

const xf = Number(prompt('Digite a posição final do objeto: '))
const tf = Number(prompt('Digite o tempo final do objeto: '))

const result = velocidade(xf, tf)

console.log(`velocidade do objeto = ${result.toFixed(4)}m/s`)


