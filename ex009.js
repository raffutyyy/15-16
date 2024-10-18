let idade = prompt('Digite sua idade')
let res = Number(idade)

function podeDirigir(idade){
    if(idade >= 18){
        console.log(`Você pode dirigir`)
    } else{
        console.log("Você não pode dirigir.")
    }
}
podeDirigir(res)