// Programa para encontrar o último elemento de uma lista passada./
//  [dica: considere o uso da função pré-definida indexOf(...)]. 
// Ex: ['Ana','Bia','Marcela','Carlos','Maria'] 
// →→ 'Maria'. Faça também para encontrar o penúltimo.

const someMembersOfLawd = ['Alvaro','Bricio','Gygy','Joao','Davi','Vinicius','Rafael','Daniel']
const position = (pos) => (x) => someMembersOfLawd.indexOf(x)==(someMembersOfLawd.length+pos)
const ultimo = position(-1)
const penultimo = position(-2)
const ultimaPessoa = someMembersOfLawd.filter(ultimo)
const penultimaPessoa = someMembersOfLawd.filter(penultimo)

console.log("Ultima pessoa da lista: ", ultimaPessoa)
console.log("Penultima pessoa da lista: ", penultimaPessoa)