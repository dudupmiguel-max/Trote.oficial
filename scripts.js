function calcular(){
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value) // recebe o valor escolhido pelo usuario
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    let qtdeoleo = Number(document.getElementById("qtdeoleo").value)
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeMacarrao * 4)+ (qtdeoleo * 2)
    let cor = document.getElementById("cor").value // recebe a variavel pro java
   let metakit // meta kit de alimentação por equipe 
    if (cor == "verde") {  
    metakit = 61
     }
    else if ( cor == "vermelho") {
    metakit = 32 
    } 
    else if( cor == "laranja") {
    metakit = 21
} 
    else if(cor == "preto") { 
    metakit = 60
} 
    else if(cor == "amarelo") { 
    metakit = 27
} 
    else if(cor == "cinza" ) { 
    metakit = 26
}
    else if(cor == "marrom") { 
    metakit = 44
}
    else if(cor == "rosa") { 
    metakit = 22
}
    else if(cor =="roxo" ) { 
    metakit = 21
}

let qtdeKits = Number(document.getElementById("qtdeKits").value)
if (qtdeKits >= metakit ) {  // bateu a meta 
    pontos = pontos + 5000  // acumulador
    if(qtdeKits > metakit){ // maior que a meta 
        pontos = pontos + (qtdeKits - metakit) * (5000/metakit)
    }
} 
else { // nao bateu a meta 
    pontos = pontos + (qtdeKits) * (5000/metakit)
}

let metaSuplemento 
if (metakit % 2 == 0) { 
    metaSuplemento = metakit / 2
}
else { 
    metaSuplemento = (metakit / 2) + 0.5
}
let qtdeSuplemento = Number(document.getElementById("qtdeSuplemento").value)
if(qtdeSuplemento >= metaSuplemento) { 
    pontos = pontos + 5000 
    if(qtdeSuplemento > metaSuplemento) { 
        pontos = pontos + (qtdeSuplemento - metaSuplemento) * (5000/metaSuplemento)
    }
}
else { 
    pontos = pontos + qtdeSuplemento * (5000/metaSuplemento)
}
let metaLeite = metakit 
let qtdeLeite = Number(document.getElementById("qtdeLeite").value) 
if(qtdeLeite >= metaLeite) { 
    pontos = pontos + 5000 
    if(qtdeLeite > metaLeite){ 
        pontos = pontos + (qtdeLeite - metaLeite) * (5000/metaLeite) 
    }
}
else { 
    pontos = pontos + qtdeLeite * (5000/metaLeite)
}

let metaSangue = metaSuplemento 
let qtdeSangue = Number(document.getElementById("qtdeSangue").value) 
if(qtdeSangue >= metaSangue) { 
    pontos = pontos + 5000 
    if(qtdeSangue > metaSangue){ 
        pontos = pontos + (qtdeSangue - metaSangue) * (5000/metaSangue) 
    }
}
else { 
    pontos = pontos + qtdeSangue * (5000/metaSangue)
}

document.getElementById("result").innerText = "Pontuação: " + pontos.toFixed(2)
}