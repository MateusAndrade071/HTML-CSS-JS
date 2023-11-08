const chave = 'eda6838f50440e271898f8ba33521b17'
const pesquisa = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const titulo = document.querySelector('.cidade')
const temp = document.querySelector('.temp')
const prev = document.querySelector('.texto-previsao')

botao.addEventListener('click',async function buscaCidade(){
    
    let nCidade = pesquisa.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nCidade}&appid=${chave}&units=metric&lang=pt_br`)
    .then(resposta => resposta.json())

    titulo.textContent = "Tempo em: " + dados.name
    temp.textContent = Math.ceil(dados.main.temp) + "°C"
    prev.textContent = "previsao: " + dados.weather[0].description

    console.log(dados)
})

