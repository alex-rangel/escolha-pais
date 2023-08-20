
let seletor = document.querySelector("#campo")
let valor = seletor.value
let bandeira = document.getElementById("imgBandeira")

if (valor == "vazio"){
    bandeira.style.display = "none"
}

function selecinarPais(){

    let pais = seletor.value

      if (pais == "brasil"){
        bandeira.style.display = "block"
        bandeira.src = "imagens/brasil.jpg"
    }

    else if (pais == "espanha") {
        bandeira.style.display = "block"
        bandeira.src = "imagens/espanha.png"
    }

    else  if (pais == "estados-unidos"){
        bandeira.style.display = "block"
        bandeira.src = "imagens/estados.unidos.png"
    }   
}

seletor.addEventListener("change", selecinarPais)
 






















