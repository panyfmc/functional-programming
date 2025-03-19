// Soma dos n primeiros números naturais.

const naturais = (n) => (n==1) ? 1 : n + naturais(n-1)

const num = 10

console.log(naturais(num))