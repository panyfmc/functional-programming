// Programa para contar quantos elementos presentes numa primeira lista estão presentes numa segunda. 
// Dica: o index de um elemento inexistente é -1. Ex: ['Ana','Bia','Marcela','Carlos','Maria'] e
// ['Bia','João, 'Marcela','Carlos','Camila'] → 3

const gostamDePlantas = ['Alvaro','Bricio','Gygy','Joao','Davi','Vinicius','Rafael','Daniel']
const gostamDePlantasEGatos = ['Alvaro','Bricio','Joao','Davi','Rafael','Daniel']

const indexExistente = (l) => (x) => l.indexOf(x) != -1    // verifica se o elemento x está na lista l

// na lista de plantas aplico o filter que utiliza os elementos de plantas e gatos como parâmetro de verificar os elementos que estão em ambas as listas
const comparar = (gostamDePlantas, gostamDePlantasEGatos) => gostamDePlantas.filter(indexExistente(gostamDePlantasEGatos))

const iguais = comparar(gostamDePlantas, gostamDePlantasEGatos).length      // conta quantos elementos estão presentes em ambas as listas
console.log(iguais)    // output 
