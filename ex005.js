function estudarFaculdade(estudo, idade, cursando){
    if(estudo === 'S' && idade >= 18 && cursando === 'N'){
       return 'Voce pode entrar em uma faculdade!'
    }
    else{
        return 'Desculpe, alguma das informações solicitadas informam que voce nao pode entrar em uma faculdade'
    }
}

let res1 = prompt('Você terminou o ensino médio? S/N')
let res2 = prompt('Sua idade:')
let res3 = prompt('Voce esta cursando alguma faculdade?')

let questao = estudarFaculdade(res1, Number(res2), res3)
console.log(questao)