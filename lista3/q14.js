// Programa que escreva por extenso um determinado algarismo passado como argumento.

const lista = (n) => n =='0' ? 'zero' :
 n =='1' ? 'um' :
 n =='2' ? 'dois' : 
 n =='3' ? 'três' : 
 n =='4' ? 'quatro' : 
 n =='5' ? 'cinco' : 
 n =='6' ? 'seis' : 
 n =='7' ? 'sete' : 
 n =='8' ? 'oito' : 
 n =='9' ? 'nove' : 
 'A entrada é inválida'

const algarismo = Number(prompt(`digite o algarismo que deseja formatar por extenso: `))

console.log(lista(algarismo))
