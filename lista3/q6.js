// Q6. Fornecidos três valores, a, b e c, escreva um programa que retorne quantos dos três são iguais. A resposta pode ser 3 (todos iguais), 2 (apenas um diferente) ou 0 (todos diferentes).


const comparacao = (a, b, c) => a == b && b == c ? "3 (Todos iguais)" : a != b && b != c && a != c ? "0 (Todos diferentes)" : "2 (Apenas um diferente)"

// Usuário inserir os valores no terminal
const a1 = parseFloat(prompt('Digite o valor de a: '))
const b1 = parseFloat(prompt('Digite ovalor de b: '))
const c1 = parseFloat(prompt('Digite o valor de c: '))

const checkTresValores = comparacao(a1, b1, c1)

console.log(checkTresValores)