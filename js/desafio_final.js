// const btn12 = document.getElementById("frmBtn");
// btn12.addEventListener("click", () => {
//     cadastraAluno();
// });

let username

document.getElementById("frmBtn").onclick = function(){
    username = document.getElementById("nomeAluno").value
    console.log(username)
    clearForm()
}

