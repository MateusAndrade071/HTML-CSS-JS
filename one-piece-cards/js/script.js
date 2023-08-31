const placa = document.querySelector('#placa')
const luffy = document.querySelector("#luffy")
const zoro = document.querySelector("#zoro")
const nami = document.querySelector("#nami")
const sanji = document.querySelector("#sanji")
const chooper = document.querySelector("#chooper")
const robin = document.querySelector("#robin")
const usopp = document.querySelector("#usopp")
const jinbe = document.querySelector("#jinbe")
const franky = document.querySelector("#franky")
const brook = document.querySelector("#brook")
var renomear = document.querySelector("#titulo")


luffy.addEventListener('click',pirata1)
zoro.addEventListener('click',pirata2)
nami.addEventListener('click',pirata3)
sanji.addEventListener('click',pirata4)
chooper.addEventListener('click',pirata5)
robin.addEventListener('click',pirata6)
usopp.addEventListener('click',pirata7)
jinbe.addEventListener('click',pirata8)
franky.addEventListener('click',pirata9)
brook.addEventListener('click',pirata10)
renomear.addEventListener('click',renomear)

function pirata1(){
    placa.src = "images/luffy.png"
    renomear.textContent = "Monkey D. Luffy"
}

function pirata2(){
    placa.src = "images/zoro.jpg"
    renomear.textContent = "Roronoa Zoro"
}

function pirata3(){
    placa.src = "images/nami.png"
    renomear.textContent = "Nami"
}

function pirata4(){
    placa.src = "images/sanji.png"
    renomear.textContent = "Sanji"
}

function pirata5(){
    placa.src = "images/chopper.png"
    renomear.textContent = "Tony Tony Chopper"
}

function pirata6(){
    placa.src = "images/nico_robin.png"
    renomear.textContent = "Nico Robin"
}

function pirata7(){
    placa.src = "images/ussop.png"
    renomear.textContent = "Usopp"
}

function pirata8(){
    placa.src = "images/jinbei.jpg"
    renomear.textContent = "Jinbe"
}

function pirata9(){
    placa.src = "images/franky.png"
    renomear.textContent = "Franky"
}

function pirata10(){
    placa.src = "images/brook.jpg"
    renomear.textContent = "Brook"
}