// Programa para retornar o menor valor entre três números quaisquer. Tente resolver considerando
// o sub-problema de determinar o menor valor entre dois números quaisquer (obs: em caso de valores
// iguais, deve-se retornar como resultado o próprio valor)

const menorValor = (a, b, c) => a < b && a < c ? a : b < c ? b : c

// Usuário inserir os valores no terminal
const a1 = parseFloat(prompt('Digite o valor de a: '))
const b1 = parseFloat(prompt('Digite ovalor de b: '))
const c1 = parseFloat(prompt('Digite o valor de c: '))

const checkoutValor = menorValor(a1, b1, c1)

console.log(checkoutValor)
