require("./style.scss")

document.getElementById("salvar").addEventListener("click", salvar)

function salvar() {
    let titulo = document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value

    let livro = {
        title: titulo,
        description: descricao,
        
    }

    fetch("https://api-aula.up.railway.app/livros", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(livro)
    }).then(response => {
        // if(response.ok) {
        //     alert("Livro salvo com sucesso")
        // } else {
        //     alert("Erro ao salvar o livro")
        // }
        console.log(response)
    })
  
}