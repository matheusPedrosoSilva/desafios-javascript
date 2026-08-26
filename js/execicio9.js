const btn9 = document.getElementById("desafio9");
btn9.addEventListener("click", () => {
    arrayNumeros();
});

function arrayNumeros(){
    let valor = 1
    let numeros = []
    let soma = 0
    let min = null
    let max = null

    while(valor!=0){
        valor = parseFloat(prompt('Informe um número'))
        if (valor === 0||isNaN(valor)){
            break
        }
        else{
            numeros.push(valor)
            soma += valor
            if(valor<min||min===null){
                min = valor
            }
            if(valor>max||max===null){
                max = valor
            }
        }
    }
    console.log(`Soma dos números: ${soma} \nQuantidade de números: ${numeros.length} \nMédia entre os valores: ${(soma/numeros.length).toFixed(2)} \nMenor Valor: ${min} \nMaior valor: ${max}`)
}