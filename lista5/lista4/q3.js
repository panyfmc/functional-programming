// Fatorial de um número natural qualquer.

const fatorial = (n) => (n==1) ? 1 : n*fatorial(n-1)

const num =2 

console.log(fatorial(num))