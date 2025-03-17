// Q3. Programa retornar o número de elementos numa lista. Ex: [3,5,-1,4,0] → 5

const someMembersOfLawd = ['Alvaro','Bricio','Gygy','Joao','Davi','Vinicius','Rafael','Daniel']

const contagemLawd = (acc, x) => acc + 1    // função que soma a quantidade de elementos da lista 
console.log("Número de elementos na lista: ", someMembersOfLawd.reduce(contagemLawd, 0))   // soma os elementos da lista e imprime o resultado


