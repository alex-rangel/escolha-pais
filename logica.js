
let seletor = document.querySelector("#campo")
let bandeira = document.getElementById("imgBandeira")

if (seletor.value == "vazio"){
    bandeira.style.display = "none"
}

function selecinarPais(){

      if (seletor.value == "brasil"){
        bandeira.style.display = "block"
        bandeira.src = "imagens/brasil.jpg"
    }

    else if (seletor.value == "espanha") {
        bandeira.style.display = "block"
        bandeira.src = "imagens/espanha.png"
    }

    else {
        bandeira.style.display = "block"
        bandeira.src = "imagens/estados.unidos.png"
    }   
}

seletor.addEventListener("change", selecinarPais)
 






















