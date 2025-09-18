/*//definir uma função para praticar a soma de 2 valores
function somar(a, b, c){
    //definir uma expressão de retorno para esta função
    return a + (b + c)
}

//chamar a função somar() à sua execução - a partir de uma expressão de função
let resultado = somar('resultado', 25, 210)

alert(resultado)
*/
/*
//definir a função - com um parametro
function validarIdade(idade){
    //definir o corpo da função
    //usar uma estrutura condicional

    if(idade >= 18){ // PASSO 2 - A CONDIÇÃO FOI ATENDIDA
        return true //ENTÃO O FLUXO DE EXECUÇÃO DO PROGRAMA DEVE CONTINUAR A PARTIR DA CHAMADA DA FUNÇÃO
    }else{
        return confirm('Voce possui autorização de um responsável para acessar a área restrita')
    }

}

//1º parte - criar uma variável para receber como valor o argumento que será atribuido a resposta do retorno

let umArgumento = prompt('Por favor, sua idade corresponde a indicada abaixo? Se não, por favor, nos informe:', 18)

//executar a chamada da função a partir de uma estrutura condicional
if(validarIdade(umArgumento)){ // PASSO 1 - A FUNÇÃO A CHAMADA A EXECUÇÃO
    //chamada de função sendo indicada como expressão de teste do if
    alert('acesso liberado') // PASSO 3 - ACESSO LIBERADO
}else{
    alert('Acesso negado. Sai fora, muleque!')
}
*/