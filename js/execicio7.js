const btn7 = document.getElementById("desafio7");
btn7.addEventListener("click", () => {
    main();
});

function main(){
    let usuario = prompt('Infome o usuário:')
    let senha = prompt('Informe a senha:')
    if (usuario==='admin'&&senha==='1234'){
        window.alert('Acesso Permitido')
    }else{
        window.alert('Acesso Negado')
    }
}

// ===
// Este operador ira  verificar se os valores são iguais e se os tipos são iguais
// Exemplo: 5  == '5'
// Essa verificação é falsa, porque um valor é string e outro number.

// =
// Este operador apenas atribui um valor a algo, ele não faz comparação.