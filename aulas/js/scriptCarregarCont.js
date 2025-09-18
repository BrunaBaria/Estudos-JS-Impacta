//criar uma função nomeada
/*

function simularCarregamentoCont(fonte){
    //definir uma expressão para que uma Promisse seja implementada
    return new Promise(function(resolve,reject){
        //definir uma variavel para receber como valor a função que cria um tag HTML no DOM
        let tagueamento = document.createElement('script')
        tagueamento.src = fonte

        //depois de definir a referencia para a criação da tag <script></script>
        //- que será criada no arquivo index.html - será necessário definir o processo de execução da tarefa de criação

        tagueamento.onload = () => resolve(tagueamento)
        tagueamento.onerror = ()=> reject(new Error(`Tag não foi criada! A simulação de carregamento de conteúdo falhou! Ocorreu um erro para o endereço: ${fonte}`))

        // acrescentar a nova tag <script src></script> no head da página index.html
        document.head.append(tagueamento)
    })
}

//definir uma variável para receber como valor a chamada da função

let execPromise = simularCarregamentoCont('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js')


//implementar a função then()
execPromise.then(
    (tagueamento) => alert(`${tagueamento.src} está sendo acessado`),
    (error) => alert(`Erro: ${error.message}`)
)
*/