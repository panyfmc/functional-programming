// Programa que escreva por extenso um determinado algarismo passado como argumento.

function porExtenso () {
    const algarismo = Number(prompt(`digite o algarismo que deseja formatar por extenso: `))   //Receber o número (0-9)
    // Lista com todos os algarismos escritos por extenso que serão utilizados no programa
    const numerosExtenso = [
        "zero", "um", "dois", "três", "quatro", 
        "cinco", "seis", "sete", "oito", "nove"
    ]

    if (algarismo >= 0 && algarismo <= 9) {
        // Caso o número esteja entre 0 e 9
        return numerosExtenso(algarismo)
    } else {
        // Números diferentes de 0 à 9
        return `Algarismo fora do intervalo permitido (0-9)`
    }
}

console.log(`\n ${porExtenso()}`)