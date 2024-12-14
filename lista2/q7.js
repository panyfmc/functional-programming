// Programa para retornar o menor valor entre três números quaisquer. Tente resolver considerando
// o sub-problema de determinar o menor valor entre dois números quaisquer (obs: em caso de valores
// iguais, deve-se retornar como resultado o próprio valor).

function menorValor(a, b, c) {
    if (a < b && a < c) {
        return `O menor número é: ${a}`
    } else if (b < c) {
        return `O menor número é: ${b}`
    } else if (a == b && a == c) {
        return `Os números são iguais: ${a}`
    } else {
        return `O menor número é: ${c}`
    }

}

console.log((menorValor(2, 1, 0)))