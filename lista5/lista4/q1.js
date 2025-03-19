// Q1. N-ésimo termo da sequência (0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,...) é dado por 2^(n-1). Faça um programa que encontre o N-ésimo termo da sequência. Teste com outras posições. 


const nesimo = (n) =>
{
    if (n==1) return 3
    else return nesimo(n-1)*2
}