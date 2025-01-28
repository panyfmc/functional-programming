//Programa que calcula o "ou-exclusivo" entre dois valores-verdade (verdadeiro ou falso),
// dado por a⊗b=(a∨b) ∧ ¬(a∧b)

// Atribuição XOR bit-a-bit	x ^= y	x = x ^ y

const verifyXor = (a, b) => (a ^ b) ? "1" : "0" // Se a != b return 1, a == b return 0

const value1 = parseFloat(prompt("Insira o primeiro valor: "))
const value2 = parseFloat(prompt("Insira o segundo valor: "))

const result = verifyXor(value1, value2)

console.log(result)