const btn4 = document.getElementById("desafio4");
btn4.addEventListener("click", () => {
    idadeCinco();
});

function idadeCinco(){
    let idade = prompt('Informe a idade:')
    window.alert(`Daqui 5 anos sua idade será: ${parseInt(idade)+5} anos.\nTipo da variável: ${typeof(idade)} \nValor Informado: ${idade} anos`)
}