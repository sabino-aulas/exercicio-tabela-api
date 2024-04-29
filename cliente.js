import "./scss/cliente.scss"

console.log("Iniciando...")


let livros = []
document.getElementById("busca").addEventListener("keyup", filtrarLivros)

iniciar()

async function iniciar() {
    livros = await buscarTodosOsLivros()
    adicionarLivrosNaTabela(livros)
}

async function filtrarLivros() {
    const valor = document.getElementById("busca").value
    const livrosFiltrados = livros.filter(livro => livro.title.includes(valor))
    
    adicionarLivrosNaTabela(livrosFiltrados)
}

function adicionarLivrosNaTabela(livros) {
    const tbody = document.getElementById("livros")

    tbody.innerHTML = ""

    for (const livro of livros) {
        const tr = document.createElement("tr")

        const tdTitulo = document.createElement("td")
        tdTitulo.innerHTML = livro.title
        tr.appendChild(tdTitulo)

        const tdDescricao = document.createElement("td")
        tdDescricao.innerHTML = livro.description
        tr.appendChild(tdDescricao)

        tbody.appendChild(tr)
    }
}

async function buscarTodosOsLivros() {
    const resposta = await fetch("https://api-aula.up.railway.app/livros")
    const dados = await resposta.json()

    return dados
}