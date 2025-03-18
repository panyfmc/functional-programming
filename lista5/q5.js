// Programa para somar todos os múltiplos de 3 e os múltiplos de 5, que são menores que 1000

const {composite, log, range, sum} = require('./utils.js')


// recebe os parâmetros 3 e 5 que serão os meios para executar a operação, e retorna uma função que recebe um número n no caso o 1000, meu limite
const multiplos = (...params) => (n) => {
    // cria uma lista com todos os números menores que n (nesse caso n=1000)
    const lista = range(0,n-1,1).filter((x) => (x%params[0]==0 && x%params[1]==0))  // filtra os números da lista que são divisiveis por 3(params[0]) e 5(params[1])   
    return sum(lista)
}

const multiplos35 = multiplos(3,5)
console.log(multiplos35(1000))