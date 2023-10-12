function cadastrar(){
    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value

    if (usuario && senha && email && telefone) {
        alert("Cadastro realizado com sucesso");
        window.location.href = 'login.html';
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}