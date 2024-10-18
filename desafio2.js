let nome = prompt('Nome completo:')
let tipoJogo = prompt('Tipo de jogo(IN para internacional e DO para doméstico):')
let etapa = prompt('Etapa do jogo(SF p/ semi-final; DT p/ decisão terceiro lugar; FI p/ final):')
let categoria = prompt('Categoria(1,2,3 ou 4):')
let quantidade = prompt('Quantidade de ingressos:')

function Jogos(nome, tipo, etapa, categoria, quantidade) {
    let valorIngresso = Number(categoria)
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nome}`)
    console.log(`Tipo do jogo: ${tipo}`)
    console.log(`Etapa do jogo: ${etapa}`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de Ingressos: ${quantidade}`)
   /* if (categoria === '1') {
        valorIngresso = 
 } else {

    }*/
   

}



