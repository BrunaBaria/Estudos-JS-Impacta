/*
//1° criando função callback
let mensagem = function(){
    alert('Essa mensagem vai aparecer após 3 segundos');
}

setTimeout(mensagem,3000);
*/

/*
//2º tornando a função anônima
setTimeout(function(){
    alert('Essa mensagem vai aparecer após 3 segundos')
},3000);

// exercicio 2 - função anônima
function perguntar(pergunta,sim,nao){
    if(confirm(pergunta)){
        sim()
    }else{
        nao()
    }
}
perguntar('Estamos Combinados?',
    function(){alert('Então fechou!')},
    function(){alert('Deu ruim...')}
)
*/ 
/*
//3º Arrow funcions - muda a sintaxe da função de function(){} para ()=>{}
setTimeout(()=>{
    alert('Essa mensagem vai aparecer após 3 segundos');
},3000);
*/
//4º adicionando evento
//Lendo a função: No documento html, pegue através do querySelector o id do button, adicione o evento listado, quando click, execute a função
/*
document.querySelector('#callback_clique').addEventListener("click",()=>{
    alert('O usuário clicou aqui')
});
*/
//Aqui faz o mesmo, mas encadeei eventos: quando o usuário clicar, vai aparecer o alert após 2 segundos
/*
document.querySelector('#callback_clique').addEventListener("click",()=>{
    setTimeout(()=>{
        alert('O usuário clicou aqui')
    },2000)
});
*/



