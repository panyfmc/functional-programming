//Programa para calcular a área de uma circunferência dado o valor do raio.

function areaCircunferencia(raio) {
    const pi = 3.14  // definindo o valor de π
    return pi * raio ** 2   //  π * r^2
}

console.log(`verificação: ${areaCircunferencia(10)}`)   //print