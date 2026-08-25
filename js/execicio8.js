const btn8 = document.getElementById("desafio8");
btn8.addEventListener("click", () => {
    main();
});

function main(){
    let valor = parseFloat(prompt('Informe um valor:'))
    if(isNaN(valor+1)){
         console.log('Valor digitado inválido, tente novamente')
    }
    else{
        for(let i = 1; i<11; i++){
            console.log(`${valor} x ${i} = ${valor*i}`)            
        }
    }
}