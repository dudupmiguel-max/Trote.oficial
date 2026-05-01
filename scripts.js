
function calcular(){
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    let qtdeoleo = Number(document.getElementById("qtdeoleo").value)
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeMacarrao * 4)+ (qtdeoleo * 2)
    let cor = document.getElementById("cor").value   
    let metakit //meta do kit de alimentação

    if (cor == "verde" ){
        metakit = 61
    }
    else if(cor == "vermelho"){
        metakit = 32
    }
    else if(cor == "laranja"){
        metakit = 21
    }

    let qtdeKits = Number(document.getElementById("qtdeKits").value)

    if(qtdeKits >= metakit){
        pontos = pontos + 5000 //acumulador de pontos
        if(qtdeKits > metakit){
        pontos = pontos  + (qtdeKits - metakit) * (5000/metakit)
        }
    }   
    else{//n bateu a meta
        pontos = pontos + (qtdeKits) * (5000/metakit)
    }


    //SUPLEMENTO
    let metaSuplemento
    if(metakit % 2 == 0){
        metaSuplemento = metakit / 2
    }
    else{
        metaSuplemento = (metakit/2) + 0.5
    }   

    let qtdeSuplemento = Number(document.getElementById("qtdeSuplemento").value)
    if(qtdeSuplemento >= metaSuplemento){
        pontos = pontos + 5000
        if(qtdeSuplemento > metaSuplemento){
            pontos = pontos + (qtdeSuplemento - metaSuplemento)+(5000/metaSuplemento)
        }
    }
    else{
        pontos = pontos + (qtdeSuplemento) + (5000/metaSuplemento)
    }
    //SUPLEMENTO


    //LEITE
    let qtdeLeite = Number(document.getElementById("qtdeLeite").value)

    //LEITE
    document.getElementById("result").innerText = "Pontuação " + pontos.toFixed(2)

}        
 