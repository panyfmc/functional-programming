// Programa para calcular a distância euclidiana entre dois pontos [(x1, y1), (x2, y2)] no plano cartesiano.
// Utilize a equação geral da reta para calcular a distância quando a reta não for paralela a nenhum dos eixos
// (abscissas ou ordenadas) e as versões simplificadas quando for paralela.

// dAB² = (xB – xA)² + (yB – yA)².

function DistEntrePontos (x1, x2, y1, y2) {
    if (x1 == x2) {                                 // Reta paralela ao eixo Y
        return (y2 - y1)

    } if (y1 == y2) {                               // Reta paralela ao eixo X
        return (x2 - x1)

    }
    // Retas não paralelas
    return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

}

console.log(`Distância calculada: ${DistEntrePontos(2, 3, 4, 5)}`)


