//criar uma classe Produto com propriedades(id,nome,preço,estoque) privadas e seu contrutor

class Produto {
    _id 
    _nome 
    _preco 
    _estoque 

    constructor(id,nome,preco,estoque){
        this._id = id
        this._nome = nome
        this._preco = preco
        this._estoque = estoque
    }

    get id(){
        return this._id
    }

    get nome(){
        return this._nome
    }

    get preco(){
        return this._preco
    }

    get estoque(){
        return this._estoque
    }

    set preco (value){
        if (value < 0){
            value = 0
        }
        this._preco = value
    }
    
     //metódo que pertence à propriedade Produto
     resumoProduto(){
        return `O produto ${this._nome}, com o ID ${this._id}, custa R$ ${this._preco} e possui ${this._estoque} em estoque`
    }

/*    atualizarPreco(value){
        
    }
*/
    adicionarEstoque(value){
        this._estoque += value
    }

    removerEstoque(value){

        if(this._estoque > 0){
            this._estoque -= value
        }else{
            alert('Estoque zerado')
        }
    }
}

//Criar classe herdada de Produto
class ProdutoImportado extends Produto{

     constructor(id,nome,preco,estoque,origem,txImportacao){
        super(id,nome,preco,estoque)
        this.origem = origem
        this.txImportacao = txImportacao

    }
    resumoProduto(){
       return `${super.resumoProduto()} A origem é ${this.origem} e a taxa de importação é de ${this.txImportacao}%`

    }
    
}

let produto = new Produto(123,'mouse',45.50,2)
let produtoImportado = new ProdutoImportado(3424,'teclado',34.90,3,'China',4)

//produto.adicionarEstoque(5)
//produto.atualizarPreco(5)