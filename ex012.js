let filme = prompt('Qual genero de filme vão assistir?')
let preco = prompt('Qual o valor do ingresso?')
let resPreco = Number(preco)

function cinema(filme, preco){
    if(filme === 'fantasia' && preco >= 15){
        console.log("Bom filme!")
    }
    else{
        console.log("Escolha outro filme :(")
    }
}
cinema(filme, resPreco)