const btn11 = document.getElementById("desafio11");
btn11.addEventListener("click", () => {
    funcoes();
});

function soma(num1, num2){
    let soma = num1+num2
    return soma
}

function calcularMedia(num1, num2){
    media = (num1+num2)/2
    return media
}

function classificarMedia(media){
    if(media>=7){
        return 'Aprovado'
    }
    else if (media>=5&&media<7){
        return 'Em recuperação'
    }
    else if(media<5){
        return 'Reprovado'
    }
}

function criarSaudacao(nome){
    return 'Olá ' +nome+', é muito bom ter ver aqui!'
}



function funcoes(){
    let num1 = parseFloat(prompt('Digite o primeiro número: '))
    let num2 = parseFloat(prompt('Digite o segundo número: '))
    let nota1 = parseFloat(prompt('Digite a primeira nota: '))
    let nota2 = parseFloat(prompt('Digite a segunda nota:'))
    let nome = prompt('Informe o nome:')
    console.log('Nome: '+criarSaudacao(nome))
    console.log('Soma: '+soma(num1, num2))
    console.log('Média: '+calcularMedia(nota1, nota2))
    console.log('Situação: '+ classificarMedia(calcularMedia(nota1, nota2)))
}