// Q2. Programa para calcular a área de uma circunferência dado o valor do raio.   π * r^2

const areaCirc = (r, pi = 3.14) => pi*r**2

const raio = parseFloat(prompt('Digite o valor do raio: ')) 

const area = areaCirc(raio)     // O valor de raio será atribuido ao primeiro parâmetro de areaCirc, no caso, r

console.log(area)