let pergunta = prompt('Qual turno voce estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno)')
function horario(pergunta){
    if(pergunta === 'M'){
        console.log('Bom dia!')
    } else if(pergunta === 'V'){
        console.log('Boa tarde!')
    } else{
        console.log('Boa noite!')
    }
}
horario(pergunta)