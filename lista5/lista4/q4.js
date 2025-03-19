//  Potência natural do número 2: 2^n . Naturalmente, você não deve utilizar o operador de expoente da linguagem.

const fatorial = (n) => (n==1) ? 1 : n*fatorial(n-1)


const num = 10

console.log(fatorial(num))