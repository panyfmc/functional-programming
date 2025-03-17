module.exports = {composite, log, range, sum, equals, indef}

/* Reconsidere o exemplo sobre as compras de produtos apresentado na aula sobre registros. Seu programa deve ser capaz de:
(a) Mostrar o carrinho de compras com o preço dos produtos em outra moeda, aplicando-se alguma taxa de câmbio (ex. 5.5 vezes),
(b) Calcular o valor total gasto com a compra,
(c) Calcular o valor total gasto aplicando-se algum desconto,
(d) Calcular o valor total gasto com os produtos frágeis,
(e) Calcular o valor total gasto com produtos que se iniciam com uma determinada letra (ex. letra 'C'),
(f) Calcular o valor médio gasto por tipo de produto com a compra realizada. Para resolver adequadamente os problemas descritos, 
seu programa deve fazer uso da notação mais compacta de representação e acesso a dados vista neste tópico e utilizar as três operações 
sobre coleções de dados estudadas: map, filter e reduce. */


const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]


//a.
const produtosCambiados = (cambio) => carrinho.map(({nome,qtde,preco,fragil}) => {      
    const novoValor = (cambio*preco).toFixed(4)
    return {nome,qtde,novoValor,fragil}
})

console.log("Preços em outra moeda:", produtosCambiados(5.5))
// ------------------------------------------------------


//b.
const valorTotal = (item) => item.qtde * item.preco         // função que calcula o valor total de cada item
const somar = (acc, x) => acc + x                            // função que soma os valores totais dos itens
const totalCompra = carrinho.map(valorTotal).reduce(somar,0)    // mapeia os itens do carrinho para valorTotal e depois soma todos os valores

console.log(`Valor total da compra: ${totalCompra}`)
// ------------------------------------------------------


//c.
const somar1 = (acc, x) => acc + x
const desconto = (desc) => (item) => item.preco * (1 - desc)         // função que calcula o desconto
const desconto10 = desconto(0.1)                                    // desconto de 10%
const getDesconto = carrinho.map(desconto10).reduce(somar1, 0) // mapeia os itens do carrinho para desconto10 e depois soma todos os valores

console.log(`Valor total da compra com desconto de 10%: ${getDesconto}`)
// ------------------------------------------------------


//d.
const setFrageis = (item) => item.fragil
const valorTotal1 = (item) => item.qtde * item.preco         
const somar2 = (acc, x) => acc + x
const totalFrageis = carrinho.filter(setFrageis).map(valorTotal1).reduce(somar2, 0)    // filtra os itens frágeis, mapeia os itens para valorTotal e depois soma todos os valores

console.log(`Valor total dos itens frágeis: ${totalFrageis}`)


//e.
const filtroLetra = (letra) => (item) => item.nome[0] == letra
const valorTotal2 = (item) => item.qtde * item.preco
const somar3 = (acc, x) => acc + x
const primeiraLetraL = filtroLetra('L')
const result = carrinho.filter(primeiraLetraL).map(valorTotal2).reduce(somar3, 0)

console.log(`Valor total dos itens com a letra inicial 'L': ${result}`)
// ------------------------------------------------------


