const btn12 = document.getElementById("frmBtn");
btn12.addEventListener("click", () => {
    cadastraAluno();
});

const btn13 = document.getElementById("sairBtn");
btn13.addEventListener("click", () => {
    totalAluno(alunos);
});

function totalAluno(alunos){
    window.alert(`Total de alunos cadastrados: ${alunos.length}`)
    window.location.href='../index.html'
}


let alunos = []

function apresentaDados(alunos){
    let body = document.getElementById('alunosData')
        let row = `
        <tbody id='alunosData' class="table-group-divider">
            <tr>
            <td>${alunos[alunos.length-1].nome}</td>
            <td>${alunos[alunos.length-1].curso}</td>
            <td>${alunos[alunos.length-1].nota1}</td>
            <td>${alunos[alunos.length-1].nota2}</td>
            <td>${alunos[alunos.length-1].media}</td>
            <td>${alunos[alunos.length-1].situacao}</td>
            </tr>
        </tbody>`
        body.innerHTML += row
}

function situacaoAluno(media){
    if(media>=7&&media<=10){
        return 'Aprovado'
    }
    else if (media<7&&media>=5){
        return 'Em recuperação'
    }
    else if (media<5&&media>=0){
        return 'Reprovado'
    }
} 

function mediaNota(n1, n2){
    return (n1+n2)/2
}

function cadastraAluno(){
    let aluno = {'nome': '', 'curso': '', 'nota1': 0, 'nota2': 0, 'media': 0, 'situacao': ''}
    aluno['nota1'] = parseFloat(document.getElementById("nota1").value)
    aluno['nota2'] = parseFloat(document.getElementById("nota2").value)
    aluno['curso'] = document.getElementById("curso").value
    if(aluno['nota1']<0||aluno['nota1']>10||aluno['nota2']<0||aluno['nota2']>10){
        window.alert('O valorres de cada nota devem estar entre 0 e 10')
        document.getElementById('nota1').focus()
    }
    else{
        if(aluno['curso']==='Selecione'){
            window.alert('Selecione um curso')
            document.getElementById('curso').focus()
        }
        else{
            aluno['media'] = mediaNota(aluno['nota1'], aluno['nota2'])    
            aluno['situacao'] = situacaoAluno(aluno['media'])
            aluno['nome'] = document.getElementById("nomeAluno").value
            curso = document.getElementById("curso").value
            document.getElementById("nota1").value = ''
            document.getElementById("nota2").value = ''
            document.getElementById("nomeAluno").value=''
            document.getElementById("curso").value = 'Selecione'
            alunos.push(aluno)
            apresentaDados(alunos)
        }
    }
}

