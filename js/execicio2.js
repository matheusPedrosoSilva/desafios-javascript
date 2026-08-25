const btn2 = document.getElementById("desafio2");
btn2.addEventListener("click", () => {
    main();
});

function main(){
    const nome = prompt("Digite seu nome:")
    let idade = prompt("Digite sua idade:")
    const cidade = prompt('Digite sua cidade:')
    let verificaMatricula = prompt('Você está matriculado? (s/n)')
    if (verificaMatricula.toLowerCase() === 's') {  
        const matricula = true
    } else if (verificaMatricula.toLowerCase() === 'n') {
        const matricula = false
    }
    const nota = prompt('Digite sua nota:')
    console.log(`Nome: ${typeof(nome)} \nIdade: ${typeof(idade)} \nCidade: ${typeof(cidade)} \nMatricula: ${typeof(matricula)} \nNota: ${typeof(nota)}`)
}

// Const
// Constante são valores declarados que, durante uma sessão, não terá seu valor alterado de forma alguma

// Let
// São variáveis que PODEM ter seu valor alterados