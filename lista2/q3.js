// Programa para determinar se três valores passados podem representar um triângulo ou não

function verTriangulo(a, b, c) {
    if ((a < b + c) && (b < a + c) && (c < a + b)) {   // definindo o triângulo como um lado menor que a soma dos outros dois
        return true
    } else {
        return false
    }
}

const lado1 = parseFloat(prompt('Digite o primeiro lado: '))
const lado2 = parseFloat(prompt('Digite o segundo lado: '))
const lado3 = parseFloat(prompt('Digite o terceiro lado: '))

const checkout = verTriangulo(lado1, lado2, lado3)

function result(checkout) {
    if (!checkout) {
        return "Não é um triângulo."
    } else {
        return "É um triângulo."
    }
}

console.log(result(checkout))