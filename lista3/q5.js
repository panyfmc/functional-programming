// Programa para calcular a distância euclidiana entre dois pontos [(x1, y1), (x2, y2)] no plano cartesiano.
// Utilize a equação geral da reta para calcular a distância quando a reta não for paralela a nenhum dos eixos
// (abscissas ou ordenadas) e as versões simplificadas quando for paralela.

// dAB² = (xB – xA)² + (yB – yA)².

// Se acontecer isso ':' me retorne '?' isso

const calcDistancia = (x1, x2, y1, y2) => (x1 == x2) ? y2 - y1 : (y1 == y2) ? x2 - x1 : 
 Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))


// Usuário inserir os valores no terminal
const x1 = parseFloat(prompt('Digite o valor de x1: '))
const x2 = parseFloat(prompt('Digite ovalor de x2: '))
const y1 = parseFloat(prompt('Digite o valor de y1: '))
const y2 = parseFloat(prompt('Digite o valor de y2: '))

const distEuclidiana = calcDistancia(x1, x2, y1, y2)

// .toFixed() para delimitar os números decimais em 4
console.log("Distância: ", distEuclidiana.toFixed(4))
