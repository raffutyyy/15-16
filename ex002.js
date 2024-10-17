function compara(num1, num2){
    if(num1 === num2){
        console.log('Os numeros sao iguais')
    }
    else{
        console.log('Os numeros sao diferentes')
    }
}
let res1 = prompt('Digite um numero')
let res2 = prompt('Digite outro numero')
let comparacao = compara(Number(res1), Number(res2))
console.log(comparacao) 