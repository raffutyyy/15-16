const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//A) criou uma varivel numero que pede para o usuario digitar um numerp
//B) 10 -> esse numero passou no teste  -10 -> ocorre um erro
//C) Sim, o console nao esta sendo chamado, para exibir a mensagem dentro do console seria necessario que fosse um return