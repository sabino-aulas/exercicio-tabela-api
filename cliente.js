import "./scss/cliente.scss"

console.log("Iniciando contexto global: Página de cliente...")

let livros = [] // Usar como memória de livros que foram buscados do servidor (API)
// Adicionar callback function para keyup de botão de busca

iniciar()

async function iniciar() {
    livros = await buscarTodosOsLivros()
    adicionarLivrosNaTabela(livros)
}

async function buscarTodosOsLivros() {
    // return livros
}

function adicionarLivrosNaTabela(livros) {
    // Construir tbody com os livros
}

async function filtrarLivros() {
    // Filtrar da variável livros
    // adicionarLivrosNaTabela(livrosFiltrados)
}



