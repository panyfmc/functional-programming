//Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso),
// dado por a⊗b=(a∨b) ∧ ¬(a∧b)


function verifyXor(a, b) {

    if ((a || b) && !(a && b)) {    // a ou b é V && não ambos são verdadeiros ~(0 && 0)
        return true
    } else {
        return false
    }
}

const value1 = prompt("Insira o primeiro valor (true ou false): ").toLowerCase() === "true"      // Só é true se digitar TRUE
const value2 = prompt("Insira o segundo valor (true ou false): ").toLowerCase() === "true"       // Qualquer outro é FALSE

console.log(`XOR(${value1}, ${value2}) = ${verifyXor()}`)