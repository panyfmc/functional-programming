// Programa que escreva por extenso um determinado algarismo passado como argumento.

function porExtenso () {
    const algarismo = Number(prompt(`digite o algarismo que deseja formatar por extenso: `))
    const numerosExtenso = [
        "zero", "um", "dois", "três", "quatro", 
        "cinco", "seis", "sete", "oito", "nove"
    ]

    if (algarismo >= 0 && algarismo <= 9) {
        return numerosExtenso(algarismo)
    } else {
        return `Algarismo fora do intervalo permitido (0-9)`
    }
}

console.log(`\n ${porExtenso()}`)