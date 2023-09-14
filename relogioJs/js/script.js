// puxar o elemento do html para o javascript
const hora = document.getElementById('hour')
const minuto = document.getElementById('minute')
const segundo = document.getElementById('second')

//setInterval serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo.
const relogio = setInterval(tempo,1000)

// função

function tempo(){
    let dia = new Date()

    let hr = dia.getHours()
    let min = dia.getMinutes()
    let seg = dia.getSeconds()

    if(hr < 10) hr = "0" + hr
    if(min < 10) min = "0" + min
    if(seg < 10) seg = "0" + seg

    hora.textContent = hr
    minuto.textContent = min
    segundo.textContent = seg
}