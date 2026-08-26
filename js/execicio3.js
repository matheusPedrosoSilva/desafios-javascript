const btn3 = document.getElementById("desafio3");
btn3.addEventListener("click", () => {
    concatenar();
});

function concatenar(){
    const nome = prompt("Digite seu nome:")
    let idade = prompt("Digite sua idade:")
    const cidade = prompt('Digite sua cidade:')
    const curso = prompt('Informe o seu curso:')
    console.log('Contatenação usando +')
    console.log('Olá, meu nome é '+nome+', tenho '+idade+' anos, moro em '+cidade+' e estou cursando '+curso+'.')
    console.log('Contatenação usando template string')    
    console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e estou cursando ${curso}.`)
}