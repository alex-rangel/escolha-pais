
let seletor = document.querySelector("#campo")
let valor = seletor.value
let bandeira = document.getElementById("imgBandeira")

if (valor == "vazio"){
    bandeira.style.display = "none"
}

function selecinarPais(){

    let valor = seletor.value

      if (valor == "brasil"){
        bandeira.style.display = "block"
        bandeira.src = "imagens/brasil.jpg"
    }

    else if (valor == "espanha") {
        bandeira.style.display = "block"
        bandeira.src = "imagens/espanha.png"
    }

    else {
        bandeira.style.display = "block"
        bandeira.src = "imagens/estados.unidos.png"
    }   
}

seletor.addEventListener("change", selecinarPais)
 






















