//  Dados três valores, escreva um programa que retorne quantos desses três
// valores são maiores que o valor médio entre eles

function maiorValor() {
    const a = prompt('Digite um valor: ')
    const b = prompt('Digite outro valor: ')
    const c = prompt('Digite um último valor: ')
    const media = (a + b + c)/3
    if (a > media && b > media && c > media) {
        return '3'
    } else if ((a < media) || (b < media) || (c < media)) {
        return '2'
    } else {
        return '1'
    }
}

console.log(`\nQuantidade de valores maiores que a média entre eles: ${maiorValor()}`)