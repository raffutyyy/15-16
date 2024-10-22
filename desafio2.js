function jogos() {
    let nome = prompt('Digite seu nome completo:')
    let tipo = prompt('Digite o tipo de jogo, IN(internacional) e DO (Doméstico):')
    let etapa = prompt('Digite a etapa do jogo, SF(semi-final),  DT (decisão de 3º lugar) ou FI (final):')
    let categoria = Number(prompt('Digite a categoria do ingresso (1, 2, 3 ou 4):'))
    const quantidade = Number(prompt('Digite a quantidade de ingressos:'));

    let preco
    let dolar = 4.10

    if (etapa === "SF") {
        switch (categoria) {
            case 1:
                preco = 1320
                break
            case 2:
                preco = 880
                break
            case 3:
                preco = 550
                break
            case 4:
                preco = 220
                break
        }
    } else if (etapa === 'DT') {
        switch (categoria) {
            case 1:
                preco = 660
                break
            case 2:
                preco = 440
                break
            case 3:
                preco = 330
                break
            case 4:
                preco = 170
                break
        }
    } else if (etapa=== "FI") {
        switch (categoria) {
            case 1:
                preco = 1980
                break
            case 2:
                preco = 1320
                break
            case 3:
                preco = 880
                break
            case 4:
                preco = 330
                break
        }

    } else {
        console.log("Etapa do jogo inválida!")
        return

    }
    if (tipo === "IN") {
        preco *= dolar
    }

    let total = preco * quantidade

    console.log('---Detalhes da compra---')
    console.log(`Nome do cliente: ${nome}`)
    console.log(`Tipo de jogo: ${tipo === 'IN' ? 'Internacional' : 'Doméstico'}`)
    console.log(`Etapa do Jogo: ${etapa === "SF" ? "Semi-final" : etapa === "DT" ? "Decisão de 3º lugar" : "Final"}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de Ingressos: ${quantidade}`);
    console.log(`Valor do Ingresso: R$ ${preco.toFixed(2)}`);
    console.log(`Valor Total: R$ ${total.toFixed(2)}`);

   
}

jogos()