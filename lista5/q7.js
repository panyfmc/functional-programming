// Programa para retornar a lista de todos os números primos menores que um número natural n qualquer

const {range, log} = require('./utils.js')

const primos = (n) => {
    const divisores = range(1,n).filter((x) => n%x == 0)        // range cria um array de 1 até n, filter filtra os divisores de n
    return equals(divisores,[1,n])          // retorna a lista dos divisores de n entre 1 e n
}

const value = primos(10)
log(value)



