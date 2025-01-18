// Q3. Programa para determinar se três valores passados podem representar um triângulo ou não. O triângulo
// é definido como um lado menor que a soma dos outros dois


const checkTriangulo = (a, b, c) => {
    return ((a < b + c) && (b < a + c) && (c < a + b)) 
}


const lado1 = parseFloat(prompt('Digite o primeiro lado: '))
const lado2 = parseFloat(prompt('Digite o segundo lado: '))
const lado3 = parseFloat(prompt('Digite o terceiro lado: '))


// Verifica se os valores podem formar um triângulo
const isTriangulo = checkTriangulo(lado1, lado2, lado3)

// Checa se os valores representam um triângulo ou não passando pela verificação em checkTriangulo
const resultado = (isTriangulo) => {
    if (!isTriangulo) return "Não é um triângulo."
    return "É um triângulo."
}


// Exibe o resultado no console 
console.log(resultado(isTriangulo))