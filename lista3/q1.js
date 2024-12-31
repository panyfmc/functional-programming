// Programa para calcular a área de um retângulo dados os comprimentos de duas arestas
// b * h

// area do retângulo é um função que tem por parâmetros b, h, os quais estão mapeados para b * h
const areaRet = (b, h) => b * h

const l1 = parseFloat(prompt('Digite o valor da base: '))       // O prompt recebe as informações digitadas na saída
const l2 = parseFloat(prompt('Digite o valor da altura: '))    // parseFloat retorna um número de ponto flutuante

// area é um parametro que recebe a função areaRet e utiliza como valores nos parâmetros b, h: l1 e l2
const area = areaRet(l1, l2)

result = area

console.log(result)




