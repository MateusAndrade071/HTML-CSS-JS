const mode = document.getElementById('mode_icon'); // puxando o icone do modo escuro e claro

mode.addEventListener('click', () =>{ // dando uma função para o modo de clique
    const form = document.getElementById('login_form');
    if(mode.classList.contains('fa-moon')){ // esse if está verificando se na classe contém o icone fa-moon 
        mode.classList.remove('fa-moon'); // se estiver ele irá remover do mode o fa-moon
        mode.classList.add('fa-sun'); // e adiconar o fa-sun como está aqui

        form.classList.add('dark');// adicionando o modo dark no formulario ao clicar no icon da lua
        return; // esse retun serve para que quando eu clique de novo no fa-sun apareça a lua nele
    }

    mode.classList.add('fa-moon'); 
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
})