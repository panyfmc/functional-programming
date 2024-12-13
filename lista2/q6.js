// Fornecidos três valores, a, b e c, escreva um programa que retorne quantos dos três são iguais.
// A resposta pode ser 3 (todos iguais), 2 (apenas um diferente) ou 0 (todos diferentes).

function quantIguais(a, b, c) {

    if (a == b && b == c) {     // Todos iguais
        return "3"      
    } else if (a == b || a == c || b == c) {    // Apenas um diferente
        return "2"       
    } else {            // Todos diferentes
        return "0"      
    }

}

console.log(`quantos dos três são iguais: ${quantIguais(2, 2, 2)}`)