function recebeNum(num1, num2){
    if(num1 === num2){
        console.log("Sucesso! ")
    }else{
        console.log('nao deu')
    }
}
let res1 = prompt('Digite um numero')
let res2 = prompt('Digite outro numero')

let compara = recebeNum(Number(res1), Number(res2))
console.log(compara)