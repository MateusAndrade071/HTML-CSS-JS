function calcular(){
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value)
    const resp = document.getElementById('resp')

    let imc = (peso/(altura * altura))

    if(imc < 18.5){
        resp.textContent = 'Seu imc ficou em: ' + imc.toFixed(2) + ' está abaixo do peso';
    }else if(imc > 18.6 && imc < 24.99){
        resp.textContent = 'Seu imc ficou em: ' + imc.toFixed(2) + ' está no peso normal';
    }else if(imc > 25 && imc < 29.99){
        resp.textContent = 'Seu imc ficou em: ' + imc.toFixed(2) + ' está em sobrepeso';
    }else if(imc > 30){
        resp.textContent = 'Seu imc ficou em: ' + imc.toFixed(2) + ' está gordo amigo!!';
    }
}