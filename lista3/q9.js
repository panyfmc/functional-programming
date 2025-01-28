//Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso),
// dado por a⊗b=(a∨b) ∧ ¬(a∧b)

const verifyXor = (a, b) => (a || b) && !(a && b) 

const value1 = prompt("Insira o primeiro valor (true ou false):").toLowerCase() === "true"      // Só é true se digitar TRUE
const value2 = prompt("Insira o segundo valor (true ou false):").toLowerCase() === "true"       // Qualquer outro é FALSE

// Calcular o resultado
const result = verifyXor(value1, value2)

// Exibir o resultado no console
console.log(`XOR(${value1}, ${value2}) = ${result}`)

// xor(true, true)          // false
// xor(true, false)         // true
// xor(false, true)         // true
// xor(false, false)        // false