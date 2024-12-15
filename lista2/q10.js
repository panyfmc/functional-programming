// Escreva um programa que dados o primeiro nome e o último sobrenome de uma pessoa qualquer,
// retorne-os em forma de citação bibliográfica conforme exemplo: Fulano Santos --> Santos, Fulano.

function citBibliografica() {
    const nome = prompt('Digite o nome: ')          // O prompt recebe as informações digitadas na saída
    const sobrenome = prompt('Digite o sobrenome: ')
    return `${sobrenome}, ${nome}.`
    
}

console.log(`\nformato bibliográfico: ${citBibliografica()}`)