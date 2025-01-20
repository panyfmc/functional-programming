// Programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados.

// Se acontecer isso ':' me retorne '?' isso
const classTriangulo = (l1, l2, l3) => l1 != l2 && l1 != l3 && l2 != l3 ? "Triângulo Escaleno" 
    : l1 == l2 && l1 == l3 && l2 == l3 ? "Triângulo Escaleno" : "Triângulo Isósceles"


// Usuário inserir os valores no terminal
const lado1 = parseFloat(prompt('Digite o primeiro lado: '))
const lado2 = parseFloat(prompt('Digite o segundo lado: '))
const lado3 = parseFloat(prompt('Digite o terceiro lado: '))


// variável que envia e recebe os valores da classificação
const verificarClassificacao = classTriangulo(lado1, lado2, lado3)


console.log(verificarClassificacao)