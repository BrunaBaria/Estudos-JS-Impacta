/*
//Default 
//definir uma função
function outraFuncao(){
    //implementar o corpo da função
    //fazer uso de uma expressão de retorno da função
    let texto = 'Um Olá!'

    //definir a expressão de retorno da função
    return texto //retorne o valor atribuido à variável texto
}

//definir a função para uso de parametos
function usandoValorDefault(nome, dialogo = outraFuncao()){
    //implementar o corpo da função 
    //outraFuncao() somente será chamada a sua execução se e somente se não ocorrer nenhum tipo de argumentação para o parametro
    alert(nome + ' : ' + dialogo)
}
//chamar a função usandoValorDefault()
usandoValorDefault('Dadinho')

*/