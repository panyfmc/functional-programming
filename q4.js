//Programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados


function classTriangulo(l1, l2, l3) {
    if (l1 == l2 && l2 == l3) {   
        return "Triângulo Equilátero"
    } else if ((l1 == l2) || (l2 == l3) || (l1 == l3)) {
        return "Triângulo Isósceles"
    } else if ((l1 != l2) && (l1 != l3) && (l2 != l3)) {
        return "Triângulo Escaleno"
    } 
}

console.log(`Classificação: ${classTriangulo(2, 2, 2)}`)
