const btn6 = document.getElementById("desafio6");
btn6.addEventListener("click", () => {
    mediaNota();
});

function main(){
    let n1 = parseFloat(prompt('Informe a primeira nota:'))
    let n2 = parseFloat(prompt('Informe a segunda nota:'))
    let media = (n1+n2)/2
    let situacao = ''
    if(media>=7&&media<=10){
        situacao='Aprovado'
        window.alert(`A média é : ${media.toFixed(2)} \nSituação: ${situacao}`)
    }
    else if (media<7&&media>=5){
        situacao='Em recuperação'
        window.alert(`A média é : ${media.toFixed(2)} \nSituação: ${situacao}`)
    }
    else if (media<5&&media>=0){
        situacao='Reprovado'
        window.alert(`A média é : ${media.toFixed(2)} \nSituação: ${situacao}`)
    }
    else{
        window.alert('Os valores digitados são inválidos, por favor tente novamente')
    }
} 