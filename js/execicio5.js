const btn5 = document.getElementById("desafio5");
btn5.addEventListener("click", () => {
    main();
});

function main(){
    let i = 'n'
    while(i != 's'){
        let idade = parseInt(prompt('Informe a idade:'))
        if (idade < 16 && idade > 0){
            window.alert('Não pode votar')
            i = 's'
        }
        else if (idade >= 16 && idade <= 17){
            window.alert('Voto opcional')
            i = 's'
        }
        else if (idade >= 18){
            window.alert('Voto obrigatório')
            i = 's'
        }
        else{
            window.alert('O valor é inválido, tente novamente')
        }
    }
}