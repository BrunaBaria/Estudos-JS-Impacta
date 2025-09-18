
// exercício a)

let contador = function contar(){
    for(c = 0; c <= 20; c++){
        alert(c)
    }
}

// exercício b)
let contadorPares = function contadorNumerosPares(){
    for (c = 2; c <= 100; c++){
            if (c % 2 === 0) {
                alert(c)
            }
    }
}

//exercicio c)
let tabuada9 = function tabuada(){
    for(c = 0; c <= 10; c++){
        let calculo = 9*[c]
        alert(`9 x ${c} = ${[calculo]}`)
    }
}

let disparadorContador = setTimeout(contador,5000)
let disparadorContadorPares = setTimeout(contadorPares,5000)
let disparadorTabuada = setTimeout(tabuada9,5000)

let promiseContador = new Promise(function(resolve,reject){
    
    setTimeout(
        () => {
            resolve(disparadorContador)
        },5000
    
    )
        
    } 
)
disparadorContador.then(
    resolve => alert(resolve),
    reject => alert(reject)
)

let promiseContadorPares = new Promise(function(resolve,reject){
    
    setTimeout(
        () => {
            resolve(disparadorContadorPares)
        },5000
    
    )
        
    } 
)
disparadorContadorPares.then(
    resolve => alert(resolve),
    reject => alert(reject)
)
let promiseTabuada = new Promise(function(resolve,reject){

    setTimeout(
        () => {
            resolve(disparadorTabuada)
        },5000
    
    )
        
    } 
)
disparadorTabuada.then(
    resolve => alert(resolve),
    reject => alert(reject)
)
