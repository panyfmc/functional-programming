//Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso),
// dado por a⊗b=(a∨b) ∧ ¬(a∧b)

// A sua Saída é 1 se e somente se apenas uma das suas Entradas é 1

function verifyXor(a, b) {
    //  as condições precisam ser verdadeiras simultaneamente

    if ((a || b) && ~(a && b)) {    // a ou b é V && não ambos são verdadeiros ~(0 && 0)
        return true
    } else {
        return false
    }
}

console.log(`Valor lógico desse programa: ${verifyXor(null, 2)}`)