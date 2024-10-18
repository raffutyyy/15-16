let filme = prompt('Qual genero de filme vão assistir?')
let preco = prompt('Qual o valor do ingresso?')
let resPreco = Number(preco)

function cinema(filme, preco){
    if(filme === 'fantasia' && preco >= 15){
        let pregunta2 = prompt(' qual lanchinho voce vai comprar?(pipoca, chocolate, doces, etc)')
        console.log('Bom filme')
        console.log(`aproveite o seu ${pregunta2}`)
       
    }
    else{
        console.log("Escolha outro filme :(")
    }
}
cinema(filme, resPreco)