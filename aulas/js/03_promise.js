// definição de uma promise

/* Forçando um resolve com Promise

let objPromise = new Promise(function(resolve,reject){
    //a function será executada, automaticamente, quando a promise for "construida"
    //após 2 segundos será sinalizado que a tarefa
    //então, a string 'tarefa concluida' será exibida em tela
    setTimeout(
        () => {
            resolve('tarefa concluída')
        }, 7000
    )
})

//fazer uso do objeto objPromise para que a Promise seja executada - "a promessa seja cumprida"
//uso da função then()
objPromise.then(
    //() => {}
    acerto => alert(acerto),
    erro => alert(erro)
)

*/
/* Forçando um error com Promise
let objPromise = new Promise(function(promiseExc,promiseNaoExec){
    //a function será executada, automaticamente, quando a promise for "construida"
    //após 2 segundos será sinalizado que a tarefa
    //então, a string 'tarefa concluida' será exibida em tela
    setTimeout(
        () => {
            promiseNaoExec(new Error('Algo deu errado'))
        },7000
    )
})

//estamos usando o parâmetro - conceitural reject - promiseNaoExec
objPromise.then(
    acerto => alert(acerto),
    erro => alert(erro)
)
*/