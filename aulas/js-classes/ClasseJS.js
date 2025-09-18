/* 1ª abordagem
//Definição do nome da classe com a palavra reserva class
class DadosUsuario{

    //função/método
    construtor(nome, idade){
        //criar dentro do método construtor uma variável para receber como valor aquilo que atribuido ao parametro do método
        this.nome = nome
        this.idade = idade
    } //método especial construtor-padrão

    //definir um método/função para operar com os dados que serão recebidos pela classe

    dizendoUmOla(){
        // quando método for chamado a sua execução, ele vai executar uma tarefa - exibir o nome e a idade do nosso usuário
        alert(`Olá ${this.nome} por acaso sua idade é ${this.idade} anos?`)
    }

}

// tentativa de criação de um objeto a partir da classe DadosUsuario(){}

//definir uma let para receber como valor a inicialização da classe

let dados = new DadosUsuario()

// new -> algo novo está sendo gerado a partir de algo já existente
// DadosUsuario() ->

// fazer uso do objeto

dados.nome = 'Nicolas'
dados.idade = 19
dados.dizendoUmOla()
*/

/* 2ª abordagem 

//Expressão de classe

//definir uma let
let DadosUsuario = class{

    dizendoUmOla(){
        alert('OI! sou uma expressão de classe')
    }
}
let dados = new DadosUsuario()
dados.dizendoUmOla()
*/

/* 3ª abordagem: propriedades de acesso restrito em JS

//definir uma classe
class copoDagua {
    _qtdAgua = 0 //ao definir uma propriedade com um underline que a precede o javascript em seu core entende que esta propriedade possui acesso restrito - uma propriedade private; o JS não faz uso de modificadores de acesso de forma descritiva, ou seja não se usa as palavras reservadas public ou private

    // fazer o uso do método acessor get para possibilitar o acesso a prop privada e posteriormente, configurá-la com algum tipo de valor
    get qtdeAgua(){
        return this._qtdAgua
    }

    // fazer uso do método acessor set - que nos possibilita atribuir a prop private um valor qualquer
    // o metodo set precisa de um parametro
    set qtdeAgua(value){
        //verificar o valor que foi atribuido ao parametro value

        if(value < 0){
            value = 0
        }
        this._qtdeAgua = value
    }

    //definir um construtor padrão 
    constructor(corDaAgua){
        this.corDaAgua = corDaAgua

    }

    exibirValores(){
        alert(`Cor da água ${this.corDaAgua}. A qtde é de ${this.qtdeAgua} ml`)
    }
}

// praticar instancia da classe 
let sede = new copoDagua('Límpida/Cristalina')

// fazer acesso ao elemento público da propriedade privada -seu encapsulamento dado pelo método 

sede.qtdeAgua = 100

sede.exibirValores()

*/

/* 4ª abordagem */
// Mecanismos de herança

/*
//definir uma nova classe
class Pessoa {
    //definir um construtor
    altura
    nome 
    idade 
    documento

    constructor(altura,nome,idade,documento){
        //características gerais de Pessoas
        this.altura = altura
        this.nome = nome
        this.idade = idade
        this.documento = documento
    }
    //metodo pertencente a classe Pessoa{}
    informacoesPessoais(){
        return `Pessoal, tudo bem? Meu nome é ${this.nome}, tenho ${this.idade}, minha altura é de ${this.altura} cm e meu numero de documento é ${this.documento}`
    }
    
}

// definir uma nova classe para praticar o mecanismo de herança com a classe Pessoa
//abixo foi definido o mescanismo de hrança - a partir do uso da palavra reservada extends
class Professor extends Pessoa{

    discMinistrada
    salario

    constructor(altura,nome,idade,documento,discMinistrada,salario){
        super(altura,nome,idade,documento) //operador super faz referencia direta ao método construtor da classe-pai/super-class e opera com suas propriedades agora a partir da classe-filha
        this.discMinistrada = discMinistrada
        this.salario = salario
    }
    // "sobrescrita" do método informacoesPessoais(){} descrito na classe-pai
    informacoesPessoais(){
        return `${super.informacoesPessoais()} sou professor de ${this.discMinistrada} e ganho míseros ${this.salario} reais`
    }

    /*
    exibirInfos(){
        
        alert(`Nome:${this.nome}\nIdade:${this.idade}\nAltura:${this.altura}\nDocumento${this.documento}\nDisciplina: ${this.discMinistrada}\nSalario: ${this.salario}`)
        }
    
}
*/
/*
// definir uma nova classe para praticar o mecanismo de herança

class Aluno extends Pessoa{

    constructor(altura,nome,idade,documento,curso,mensalidade){
        super(altura,nome,idade,documento)
        this.curso = curso
        this.mensalidade =mensalidade

    }
    informacoesPessoais(){
        return `${super.informacoesPessoais()} sou aluno de ${this.curso} e pago míseros ${this.mensalidade} reais`
    }
    /*
    exibirInfos(){
        
        alert(`Nome: ${this.nome}\nIdade: ${this.idade}\nAltura: ${this.altura}\nDocumento: ${this.documento}\nDisciplina: ${this.curso}\nMensalidade: ${this.mensalidade}`)
        }
    
}
*/
//definir os objetos das respectivas classes
/*
let professor = new Professor(181, 'celio',45,987654, 'matematica', 2399)

alert(professor.informacoesPessoais())
*/
/*
let aluno = new Aluno(101,'samuel',3,213455,'História',299)
alert(aluno.informacoesPessoais())
*/
/*
professor.nome = 'Celio'
professor.idade = 45
professor.altura = 181
professor.documento = 123456

professor.exibirInfos()

// praticar a instancia da classe Aluno

let aluno = new Aluno('História',299)
aluno.nome = 'Samuel'
aluno.idade = 3
aluno.altura = 101
aluno.documento = 123456

aluno.exibirInfos()
*/