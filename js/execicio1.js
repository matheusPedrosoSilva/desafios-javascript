const btn1 = document.getElementById("desafio1");
btn.addEventListener("click", () => {
    printConsole();
});

function printConsole(){
    const nome = prompt("Digite seu nome:")
    const curso = prompt("Digite seu curso:")
    let funcao = prompt("Informe uma função que você gostaria de criar com JS:")
    window.alert(`Olá ${nome} do curso ${curso}, agradecemos sua sugestão de função: ${funcao}.`)
    console.log('Função executado com sucesso!')
}

