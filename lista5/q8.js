// Programa para retornar os n primeiros algarismos de um número inteiro qualquer

const {log} = require('./utils.js')

const nalgarismos = (n) => (num) => {
    const strnum = (num).toString()   
    return strnum.slice(0,n)        // slice fatia o número de acordo com o valor de n, ex: n=2 -> 1234 -> 12
}

const num1 = 40028922

log(nalgarismos(4)(num1))

