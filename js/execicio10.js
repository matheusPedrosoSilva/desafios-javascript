const btn10 = document.getElementById("desafio10");
btn10.addEventListener("click", () => {
    loginTentativa();
});

function loginTentativa(){
    let i = 0
    let usuario = ''
    let senha = ''
    while(i<3){
        usuario = prompt('Infome o usuário:')
        senha = prompt('Informe a senha:')
        if (usuario==='admin'&&senha==='1234'){
            window.alert('Acesso Permitido')
        }else{
            i++
            if((3-i) == 0){
                window.alert(`Acesso bloquado.`)
            }
            else{
                window.alert(`Acesso Negado. Você tem mais ${3-i} tentativas`)
            }
        }
    }
}