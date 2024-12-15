// Escreva um programa para calcular o maior e o menor valor real das raízes de uma equação
// de segundo grau. A expressão genérica para cálculo das raízes é dada por baskhara 

// -b +- sqrt b^2 - 4 a c / 2a

function valordasRaizes() {
    //ax^2 + bx + c
    const a = Number(prompt('Digite o valor de a: '))
    const b = Number(prompt('Digite o valor de b: '))
    const c = Number(prompt('Digite o valor de c: '))
    const delta = (b ** 2) - 4 * a * c
    if (delta < 0) {
        return 'Não há raízes reais.'
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a) 
        return `valor maior: ${Math.max(x1, x2)}, valor menor: ${Math.min(x1, x2)}`
    }

}

console.log(`Raízes da equação, ${valordasRaizes()}`)

