// Q6. Programa para retornar a diferença entre o quadrado da soma dos 10 primeiros números naturais e a soma dos quadrados
// dos primeiros 10 números naturais. Ou seja, (1+2+3+4+...+10)^2 - (1^2+2^2+3^2+4^2+...+10^2)

const {composite, log, sum} = require('./utils.js')
const lista = range(1,10,1)

const elementoPotencia = (pot) => lista.map((x)=>x**pot)
const somaElem = sum(elementoPotencia(2))

const quadradoSoma = sum(lista)**2
const diferenca = quadradoSoma - somaElem
log(diferenca)
