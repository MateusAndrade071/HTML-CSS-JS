const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const numero = document.getElementById('numero')
let contador = 0
let isColised = false // Variável para controlar a colisão, inicialmente definida como falso

const jump = () => {
    if(!isColised){ // Verifica se a colisão não ocorreu
        mario.classList.add('jump') // Adiciona a classe 'jump' para animar o salto

        setTimeout(() => {
            mario.classList.remove('jump') // Remove a classe 'jump' após 500ms para encerrar a animação
        } , 500);
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none'; // Para a animação do cano
        pipe.style.left = `${pipePosition}px`; // Mantém a posição do cano constante
        
        mario.style.animation = 'none'; // Para a animação do Mario
        mario.style.bottom = `${marioPosition}px`; // Mantém a posição do Mario constante

        mario.src = 'images/game-over.png'; // Altera a imagem do Mario para a de "game over"
        mario.style.width = '75px'; // Ajusta o tamanho do Mario
        mario.style.marginLeft = '50px'; // Ajusta a margem do Mario

        clearInterval(loop); // Encerra o loop principal
        isColised = true // Define a colisão como verdadeira
    }
}, 10);

document.addEventListener('keydown', jump);

function adicionarScore(){
    if(!isColised){  // Verifica se a colisão não ocorreu
        contador++; // Incrementa o contador de pontuação
        numero.textContent = contador // Atualiza a exibição da pontuação
    }
}

const loopInfinito = setInterval(adicionarScore, 100); // Inicia um loop para adicionar pontuação continuamente
