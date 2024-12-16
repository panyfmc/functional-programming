//  Dados três valores, escreva um programa que retorne quantos desses três
// valores são maiores que o valor médio entre eles

function maiorValor() {
    const a = prompt('Digite um valor: ')
    const b = prompt('Digite outro valor: ')
    const c = prompt('Digite um último valor: ')
    const media = (a + b + c)/3
    if (a > media && b > media && c > media) {      
        // Se a, b e c forem (individualmente) maiores que a média deles
        return '3'

    } else if (
        (a > media && b > media && c <= media) || 
        (a > media && c > media && b <= media) || 
        (b > media && c > media && a <= media)) { 
        // Se exatamente dois valores forem meaiores que a média
        return '2'
        
    } else {        
        // Caso contrário, se nenhum ou apenas um valor for menor que a média
        return '1'
    }

}

console.log(`\nQuantidade de valores maiores que a média entre eles: ${maiorValor()}`)