//exercício 1
function calcularPorcentagem(){

    var todo = Number(document.getElementById('valor').value)
    var parte = Number(document.getElementById('percentual').value)
    
    var resultado = (parte/todo)*100
    var res1 = document.getElementById('res1')

    res1.innerHTML = `${parte}% de ${todo} é: <strong>${resultado.toFixed(2)}</strong>`
}


//exercício 2
function converterFahrenheit(){
    var resF = document.getElementById('resF')
    let celsius = Number(document.getElementById('tempc').value)
    let conversaofahrenheit = (celsius * 1.8)+32

    resF.innerHTML = `O resultado desta conversão é <strong>${conversaofahrenheit.toFixed(2)} °F</strong>`
}

function converterCelsius(){
    var resC = document.getElementById('resC')
    let fahrenheit  = Number(document.getElementById('tempf').value)
    let conversaocelsius = (fahrenheit-32)/1.8

    resC.innerHTML = `O resultado desta conversão é <strong>${conversaocelsius.toFixed(2)} °C</strong>`
}

//exercício 3
function numeroPrimo(){
    var resPrimo = document.getElementById('resPrimo')
    let numero = Number(document.getElementById('numero').value)


    // Percebi que o número 21, por exemplo é primo e fugiu a regra que escrevi.
    
    if((numero % 2 == 0 && numero != 2) || (numero % 3 == 0 && numero != 0) || (numero % 5 == 0 && numero != 5)|| (numero % 7 == 0 && numero != 7)){
        resPrimo.innerHTML = `O número <strong>${numero}</strong> não é primo`
    }else{
        resPrimo.innerHTML = `O número <strong>${numero}</strong> é primo`
    }


/*
for(c = 0; c <= numero; c ++){
    if ( (numero % 2 === 0) && (numero % numero ===0)){
        resPrimo.innerHTML = `O número <strong>${numero}</strong> é primo`
    }
}
*/
}