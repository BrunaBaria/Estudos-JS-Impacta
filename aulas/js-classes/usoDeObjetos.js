// definir um objeto a partir do construtor de função Objeto()

/* 1ª Abordagem
let livro = new Object() //aqui, foi criado um objeto a partir da instancia do construtor Object()

//nó podemos fazer uso do objeto e, a partir dele mesmo, definir propriedades e atribuir valores
livro.titulo = 'Chapeuzinho Vermelho'
livro.autor = 'Irmãos Grimm'

function mostrandoAsCoisas(){
    alert(`Nome do livro: ${livro.titulo} e o autor é ${livro.autor}`)
}

// chamar a função a execução
mostrandoAsCoisas()
*/

/* 2ª Abordagem 

// definir uma função
function livro(titulo,autor){
    this.titulo = titulo
    this.autor = autor
}

//tentativa de gerar um objeto a partir da função

let novoLivro = new livro('Grande Sertão Veredas','Guimarães Rosa')

function mostrandoAsCoisas(){
    alert(`Nome do livro: ${novoLivro.titulo} e o autor é ${novoLivro.autor}`)
}

mostrandoAsCoisas()
*/