// Escreva um programa para calcular o maior e o menor valor real das raízes de uma equação
// de segundo grau. A expressão genérica para cálculo das raízes é dada por bhaskara 
// -b +- sqrt b^2 - 4 a c / 2a

const fdelta = (a, b, c) => (b ** 2) - 4 * a * c    // calcular o delta 

const verdelta = (delta) => delta < 0 ? "Não há raízes reais." : null   // verificar se o delta é positivo

const raiz1 = (a, b, delta) => (-b + Math.sqrt(delta)) / (2 * a)        // calcular o x1
const raiz2 = (a, b, delta) => (-b - Math.sqrt(delta)) / (2 * a)        // calcular o x2

const a1 = Number(prompt('Digite o valor de a: '))
const b1 = Number(prompt('Digite o valor de b: '))
const c1 = Number(prompt('Digite o valor de c: '))

const deltaValue = fdelta(a1, b1, c1)           // armazenar o valor de delta
const verdeltaValue = verdelta(deltaValue)      // armazena se o delta é positivo ou não
const raiz1Value = raiz1(a1, b1, deltaValue)    // x1
const raiz2Value = raiz2(a1, b1, deltaValue)    // x2


// Exibindo o maior e menor valor das raízes
const maiorRaiz = verdeltaValue ? verdeltaValue : Math.max(raiz1Value, raiz2Value)
const menorRaiz = verdeltaValue ? verdeltaValue : Math.min(raiz1Value, raiz2Value)

console.log(verdeltaValue || `O valor maior é: ${maiorRaiz}\nO valor menor é: ${menorRaiz}`)
