// puxar o elemento do html para o javascript
const hora = document.getElementById('hour')
const minuto = document.getElementById('minute')
const segundo = document.getElementById('second')
const day = document.querySelector('#day')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const bday = document.querySelector('#bday')

//setInterval serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo.
const relogio = setInterval(tempo,1000)

// função

function tempo(){
    let data = new Date()

    let hr = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()
    let dia = data.getDate()
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear()
    

    if(hr < 10) hr = "0" + hr
    if(min < 10) min = "0" + min
    if(seg < 10) seg = "0" + seg
    if(mes < 10) mes = "0" + mes
    
    if (hr >= 5 && hr < 12) {
        bday.textContent = "Bom dia!";
    } else if (hr >= 12 && hr < 18) {
        bday.textContent = "Boa tarde!";
    } else {
        bday.textContent = "Boa noite!";
    }
    

    hora.textContent = hr
    minuto.textContent = min
    segundo.textContent = seg
    day.textContent = dia 
    month.textContent = mes 
    year.textContent = ano
}