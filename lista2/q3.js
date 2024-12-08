// Programa para determinar se três valores passados podem representar um triângulo ou não

function verTriangulo(a, b, c) {
    if ((a < b + c) && (b < a + c) && (c < a + b)) {   // definindo o triângulo como um lado menor que a soma dos outros dois
        return true
    } else {
        return false
    }
}
console.log(`verificação: ${verTriangulo(2, 3, 4)}`)