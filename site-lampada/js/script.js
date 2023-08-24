// dom - procurar algo em html e linkar no js

const lampada = document.querySelector("#lampada")
const acender = document.querySelector("#on")
const apagar = document.querySelector("#off")

// evento - fazer uma ação

acender.addEventListener("click",ativar)
apagar.addEventListener("click",desativar)
lampada.addEventListener("dblclick",quebrar)

// função - executar a ação

function ativar(){
    lampada.src = "images/acesa.gif"
}

function desativar(){
    lampada.src = "images/apagada.gif"
}

function quebrar(){
    lampada.src = "images/quebrada.jpg"
}