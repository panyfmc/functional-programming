// Programa para calcular a distância euclidiana entre dois pontos [(x1, y1), (x2, y2)] no plano cartesiano.
// Utilize a equação geral da reta para calcular a distância quando a reta não for paralela a nenhum dos eixos
// (abscissas ou ordenadas) e as versões simplificadas quando for paralela.

// dAB² = (xB – xA)² + (yB – yA)².

const xA = parseFloat(prompt("insira o valor de x1: "))
const xB = parseFloat(prompt("insira o valor de x2: "))
const yA = parseFloat(prompt("insira o valor de y1: "))
const yB = parseFloat(prompt("insira o valor de y2: "))


const distEntrePontos = (x2, x1, y2, y1) => (x2 == x1) ? (y2 - y1) : (y2 == y1) ? (x2 - x1) : Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

const calcDist = distEntrePontos(xA, xB, yA, yB)

console.log('O resultado da distância entre os pontos é:', calcDist)