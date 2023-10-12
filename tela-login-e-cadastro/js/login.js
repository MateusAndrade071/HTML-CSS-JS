function login(){
    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value

    if(usuario == '' && senha == ''){
        alert("Sem cadastro")
    }else if(usuario == 'mateus' && senha === '1234'){
        alert("Login Efetuado com sucesso")
    }else{
        alert("Usuario ou senha invalido")
    }
}