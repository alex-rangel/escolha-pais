
let campoSelecao = document.querySelector("#campo")
let valor = campoSelecao.value 
let bandeira = document.getElementById("imgBandeira")
let campoBandeira = document.querySelector("#bandeira")

function selecinarPais(){

    let campoSelecao = document.querySelector("#campo")
    let valor = campoSelecao.value
    let bandeira = document.getElementById("imgBandeira")
    let campoBandeira = document.querySelector("#bandeira")
    console.log(valor)
    if (valor == "brasil"){
        campoBandeira.style.display = "block"
        bandeira.src = "imagens/brasil.jpg"
    }

    else if (valor == "espanha") {
        campoBandeira.style.display = "block"
        bandeira.src = "imagens/espanha.png"
    }

    else if (valor == "estados-Unidos") {
        campoBandeira.style.display = "block"
        bandeira.src = "imagens/estados.unidos.png"
    }
}

if (valor == "vazio"){
    bandeira.src = " "
    campoBandeira.style.display = "none"
}
console.log(valor)

campoSelecao.addEventListener("change", selecinarPais)















