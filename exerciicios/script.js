function churras() {
    let qtdePessoas = Number(document.getElementById("qtdePessoas").value)
    let kgs = (qtdePessoas * 400) / 1000 
    document.getElementById("resultadoChurras").innerText = "Total de carne " + kgs + " Kg"
}

function febre() {
    let temperatura = Number(document.getElementById("temperatura").value)
    if (temperatura >= 37.5) {
        document.getElementById("resultadoFebril").innerText = "Está com Febre"
    } else {
        document.getElementById("resultadoFebril").innerText = "Não Está com febre"
    }
}

function credito() {
    let renda = Number(document.getElementById("renda").value)
    let idade = Number(document.getElementById("idade").value)

    if (renda >= 2000 && idade >= 18) {
        document.getElementById("resultadoCredito").innerText = "Crédito aprovado"
    } else {
        document.getElementById("resultadoCredito").innerText = "Crédito não aprovado"
    }
}

function torneio() {
    // Certifique-se de que os IDs no HTML batam com estes nomes
    let idadeCompeticao = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value) 

    // CORREÇÃO: Variável 'peso' em minúsculo e adição de '&&'
    if (idadeCompeticao >= 18 && peso > 80) {
        document.getElementById("resultadoTorneio").innerText = "Adulto peso pesado"
    } 
    else if (idadeCompeticao >= 18 && peso <= 80) { // Usado <= para cobrir exatamente 80kg
        document.getElementById("resultadoTorneio").innerText = "Adulto peso leve"        
    }
    else if (idadeCompeticao < 18 && peso > 80) { // Adicionado &&
        document.getElementById("resultadoTorneio").innerText = "Juvenil peso pesado"
    }
    else if (idadeCompeticao < 18 && peso <= 80) { // Adicionado &&
        document.getElementById("resultadoTorneio").innerText = "Juvenil peso leve"
    }
}