//  Dados três valores, escreva um programa que retorne quantos desses três
// valores são maiores que o valor médio entre eles

const media = (x, y, z) => (x + y + z) / 3

const maiorvalor = (x, y, z, mediaValue) =>     // verificar quantos valores são maiores que a média entre eles
    (x > mediaValue && y > mediaValue && z > mediaValue) ? "3 valores" : 
    (x > mediaValue && y > mediaValue && z <= mediaValue) || 
    (x > mediaValue && z > mediaValue && y <= mediaValue) || 
    (y > mediaValue && z > mediaValue && x <= mediaValue) ? "2 valores" : "1 valor"

const x1 = Number(prompt("Insira o primeiro valor: "))
const y1 = Number(prompt("Insira o segundo valor: "))
const z1 = Number(prompt("Insira o terceiro valor: "))

// Isso me lembra o poxim (armazenar os endereços)
const mediaValue = media(x1, y1, z1)         // Armazena o valor da média        
const maiorvalorValue = maiorvalor(x1, y1, z1, mediaValue)  // Armazena o valor de maiorvalor

const result = `Quantidade de valores maiores que a média ${mediaValue}: ${maiorvalorValue}`    

console.log(result) // print