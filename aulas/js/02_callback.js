
/*
//1° callback
//definir uma nova função
function perguntar(pergunta,sim,nao){ //definição de 3 parametros simples
    //definir uma estrutura condicional
    if(confirm(pergunta)) sim()
    else nao()
}

function mostrarSeForOk(){
    alert('Estamos, então combinados')
}

function mostrarSeForNaoOk(){
    alert('Nao encontramos um meio-termo.')
}

//definir a chamada da função perguntar - passando como argumento, para os parâmetros, sim e não, respectivamente, as funções mostrarSeForOk() e mostrarSeNaoForOk()

perguntar('Estamos combinados?',mostrarSeForOk,mostrarSeForNaoOk)

*/
// 2° callback 

function perguntar(pergunta, sim, nao){
    //estrutura condicional para o uso dos parâmetros - callbacks
    if(confirm(pergunta)){
        sim()
    }else{
        nao()
    }

}

//chamada da função perguntar()
perguntar(
    'Estamos combinado neste tema?', 
    //para os próximos dois argumentos vamos definir duas funções anônimoas
    function(){alert('Estamos, então, combinados!')},
    function(){alert('Não encontramos um meio termo.')}
)


/* 3º callback 

//definir uma nova função callback - a partir de uma expressão de função
let umTexto = function(){
    alert ('Este texto será exibido depois de 5 segundos - contados a partir da execução da aplicação')
}

//uso da função embarcada/nativa/interna do js para auxiliar na criação do intervalo de tempo - setTimeOut

setTimeout(umTexto, 5000)
*/

/* 4º callback 

//Isso é uma estrutura assíncrona
//Primeiro eu set o comando e 5 segundo depois ele acontece de fato

//implementar um novo callback a partir de uma arrow function
setTimeout(
    //definir a arrow function para ser o callback function
    //arrow function nada mais é do que uma função anônima "abreviada"
    ()=>{
        alert('Este texto será exibido depois de 5 segundos - contados a partir da execução da aplicação') // esse é o primeiro argumento da função
    }, 5000 //este é o segundo argumento da função
)
*/