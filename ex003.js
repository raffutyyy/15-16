function recebe(num1, num2){
    if(num1 > num2){
     return `${num1} é maior que ${num2}`   
    }
    else if(num1 < num2){
        return `${num1} é menor que ${num2}`
    }
    else{
        return `esses numeros sao iguais`
    }
    
}    
let res1 = prompt('Digite um numero')
let res2 = prompt('Digite outro numero')
let comparacao = recebe(Number(res1), Number(res2))
console.log(comparacao) 