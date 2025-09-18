buzz.defaults.formats = [ 'ogg', 'mp3','wav']; // instancia do framework do buzz (sons) com a descrição dos formatos suportados nesta aplicação
buzz.defaults.preload = 'metadata';             //[IMPLEMENTAÇÃO NOSSA] add formato .wav

//  variável que armazena o objeto:  imagem, vinculada a cor de fundo, a palavra e som de cada animal
var games = [
    { img: 'img/koala.png', color:'#6790d6', word: 'koala', sound: '' },
    { img: 'img/elephant.png', color:'#c4f5de', word: 'elephant', sound: 'sounds/elephant' },
    { img: 'img/monkey.png', color:'#ffc48b', word: 'monkey', sound: 'sounds/monkey' },
    { img: 'img/bear.png', color:'#f5d9c4', word: 'bear', sound: 'sounds/bear' },
    { img: 'img/horse.png', color:'#f7e8d7', word: 'horse', sound: 'sounds/horse' },
    { img: 'img/cow.png', color:'#f7d7d7', word: 'cow', sound: 'sounds/cow' },
    { img: 'img/rabbit.png', color:'#d7f7eb', word: 'rabbit', sound: '' },
    { img: 'img/tiger.png', color:'#e3d7f7', word: 'tiger', sound: 'sounds/tiger' },
    { img: 'img/turtle.png', color:'#e5f7d7', word: 'turtle', sound: '' },
    { img: 'img/lion.png', color:'#f7e8d7', word: 'lion', sound: 'sounds/lion' }, //[IMPLEMENTAÇÃO NOSSA] +10 Animais 
    { img: 'img/chicken.png', color:'#f7d7d8', word: 'chicken', sound: 'sounds/hen' },
    { img: 'img/cat.png', color:'#f4f7d7', word: 'cat', sound: 'sounds/cat' },
    { img: 'img/duck.png', color:'#d7e6f7', word: 'duck', sound: 'sounds/duck' },
    { img: 'img/snake.png', color:'#f7d7e9', word: 'snake', sound: 'sounds/snake' },
    { img: 'img/giraffe.png', color:'#d7edf7', word: 'giraffe', sound: '' },
    { img: 'img/frog.png', color:'#f7f5d7', word: 'frog', sound: 'sounds/frog' },
    { img: 'img/owl.png', color:'#f7dbd7', word: 'owl', sound: 'sounds/owl' },
    { img: 'img/dog.png', color:'#d7e2f7', word: 'dog', sound: 'sounds/dog' },
    { img: 'img/bat.png', color:'#f6f7d7', word: 'bat', sound: '' },
    { img: 'img/fox.png', color:'#e6d7f7', word: 'fox', sound: 'sounds/fox' }

];
//Objetos de Som
var winSound        = new buzz.sound('sounds/win' ), // instância do objeto som para acerto
    errorSound      = new buzz.sound('sounds/error' ),// instância do objeto som para erro
    alphabetSounds  = {}, // espaço para armazenar o som que ainda não selecionado 
    alphabet        = 'abcdefghijklmnopqrstuvwxyz'.split( '' ); // splitando as letras, deixando-as em char

for( var i in alphabet ) { // para cada letra em alphabet, vincula o som (do diretório sounds/kid/letra)
    var letter = alphabet[ i ];
    alphabetSounds[ letter ] = new buzz.sound('sounds/kid/'+ letter );//instância do objeto som para cada letra do alfabeto
}
//códigos da biblioteca jQuery começam com $ e utilizam os seletores semelhantes ao CSS
//essa função adiciona animação à página
$( function() {

    if ( !buzz.isSupported() ) { // caso o arquivo de som buzz.isSupported for falso(não for suportado), chama o conteúdo da div warning
        $('#warning').show(); // mostra warning - o erro da pagina
    }

    var idx = 0, // construção da página, parte que irá se modificar do HTML
        $container  = $( '#container' ),
        $picture    = $( '#picture' ),
        $models     = $( '#models' ),
        $letters    = $( '#letters' );


    $( 'body' ).bind('selectstart', function() {  //.bind a função chamada deve possuir um valor this (o this encapsula o objeto) 
        return false 
    });
    // carrosel do game
    $( '#next' ).click( function() { //quando clicar next recarrega o jogo, controe o game e implementa um novo animal
        refreshGame();
        buildGame( ++idx ); 
        return false;
    });

    $( '#previous' ).click( function() { // clickando
       refreshGame();
       buildGame( --idx ); 
       return false;
    });

        // função para o level
    $( '#level' ).click( function() {
        if ( $( this ).text() == 'easy' ) { // se estiver easy
            $( this ).text( 'hard' );  // o texto vai pro hard
            $models.addClass( 'hard' ); // e adiciona classe hard
        } else { // se não
            $( this ).text( 'easy' ); // o texto vai pro easy
            $models.removeClass( 'hard' ); // remove a classe hard
        }
        return false; // talvez se retorne false, dê um erro no navegador (avisando que n suporta)
    });
    // função de refresh no jogo (reseta o html)
    function refreshGame() {
        $( '#models' ).html( '' );
        $( '#letters' ).html( '' );
    }
    // função de construir o game - troca o animal (< >)
    function buildGame( x ) {
        if ( x > games.length - 1 ) { 
            idx = 0;
        }
        if ( x < 0 ) {
            idx = games.length - 1;
        }
    //implementação da vitória  
        var game  = games[ idx ],
            score = 0;

    // instância o som do animal   
        var gameSound = new buzz.sound( game.sound );
        gameSound.play();
       
        // Fade the background color - trocando gradualmente a cor do fundo
        $( 'body' ).stop().animate({
            backgroundColor: game.color
        }, 1000);
        $( '#header a' ).stop().animate({
            color: game.color
        }, 1000);

        // Update the picture - trocando a imagem
        $picture.attr( 'src', game.img ) 
            .unbind( 'click' )           //remove o click do evento anterior ( verificar depois a funcionalidade )
            .bind( 'click', function() { //ao clicar aciona o jogo e muda a imagem
                gameSound.play();
            });

        // Build model
        var modelLetters = game.word.split( '' ); //construção do modelo de letras ( cubinhos com letras )

        for( var i in modelLetters ) {            //para cada letra dentro da palavra do game
            var letter = modelLetters[ i ];
            $models.append( '<li>' + letter + '</li>' ); // constroi uma lista 
        }

        var letterWidth = $models.find( 'li' ).outerWidth( true ); // recupera a largura do elemento encontrado em 'li' e atribui a variável letterWidth (letras arrastáveis)

        $models.width(letterWidth * $models.find( 'li' ).length);
        
        // Build shuffled letters
        var letters  = game.word.split( '' ),
            shuffled = letters.sort( function() { return Math.random() < 0.5 ? -1 : 1 }); //exibir as letras de forma aleatória 

        for( var i in shuffled ) { 
            $letters.append( '<li class="draggable">' + shuffled[ i ] + '</li>' ); // cada letra arrastável
        }

        $letters.find( 'li' ).each( function( i ) { // pega a caixa letras e atribui uma rotação aleatória
            var top   = ( $models.position().top ) + ( Math.random() * 100 ) + 80,
                left  = ( $models.offset().left - $container.offset().left ) + ( Math.random() * 20 ) + ( i * letterWidth ),
                angle = ( Math.random() * 30 ) - 10; 

            $( this ).css({
                top:  top  + 'px',
                left: left + 'px'
            });

            rotate( this, angle ); //

            $( this ).mousedown( function() { //quando clicar na letra, solta o som do alfabeto correspondente
                var letter = $( this ).text();
                if ( alphabetSounds[ letter ] ) {
                    alphabetSounds[ letter ].play();
                }
            });
        });

        $letters.find( 'li.draggable' ).draggable({ // não identificamos a funcionalidade
            zIndex: 9999,                           // quando desativa, não consegue mais arrastar
            stack: '#letters li' ,                   //  identificamos que é possivel colocar duas letras iguais no mesmo quadrado e não é possível remover a mesma letra
            cursor:"grabbing",                      //[IMPLEMENTAÇÃO NOSSA] tornando opaco quando a letra é selecionada
            opacity:0.5 
              
        });

        $models.find('li').each(function() {        // [IMPLEMENTAÇÃO NOSSA] para cada li dentro do elemento models 
            $(this).data('occupied', false);        // definimos o atributo de dados "occupied" como "false"
        });
        
        $models.find('li').droppable({              //a letra da lista do animal do jogo e tornando elas dropaveis, que 
            accept: '.draggable',
            hoverClass: 'hover',                    // quando o elemento draggable passa em cima das letras do droppable
            drop: function(e, ui) {
                var modelLetter = $(this).text(),
                    droppedLetter = ui.helper.text();
        
                if (!$(this).data('occupied')) { // [IMPLEMENTAÇÃO NOSSA] se a posição não estiver ocupada e...
                    if (modelLetter == droppedLetter) { // a letra draggable e o droppable "encaixar", encerra atividade desse elemento
                        ui.draggable.animate({
                            top: $(this).position().top,
                            left: $(this).position().left
                        }).removeClass('draggable').draggable('option', 'disabled', true);
        
                        rotate(ui.draggable, 0);        //roda a letra para o eixo 0 - alinha a letra à caixa droppable
        
                        score++;
        
                        $(this).data('occupied', true); // [IMPLEMENTAÇÃO NOSSA] Marca a posição como ocupada
        
                        if (score == modelLetters.length) { //se o score for = ao tamanho da palavra, ganha o jogo.
                            winGame();
                        }

                        ui.draggable.draggable('option', 'revert', false); // Desativa a reversão após a letra ser colocada na posição correta

                    } else { // se o draggble não for igual ao droppable, reverte para a posição que o elemento draggable estava, e não encaixa
                        ui.draggable.draggable('option', 'revert', true);   
                        
                        errorSound.play(); // som de erro
                        
                        setTimeout(function() { 
                            ui.draggable.draggable('option', 'revert', false);
                        }, 100); // tempo para o objeto voltar a se tornar clickavel de 1 segundo
                    }
                } else { // [IMPLEMENTAÇÃO NOSSA] Basicamente, se a condição de estar ocupado seja verdadeira, roda esse trecho de código
                    ui.draggable.draggable('option', 'revert', true); // que reverte a posição e mantém o objeto draggable
                    errorSound.play(); // e toca o som
                }
            }
        });
    }

    function winGame() { 
        winSound.play(); //ativa a função de ganhou com o audio win!!!!

        $( '#letters li' ).each( function( i ) { // para cada palavra "acertada" 
            var $$ = $( this );
            setTimeout( function() {  //animação de queda das letras draggble em 0,3 segundos 
                $$.animate({           //fazer um .sort? para ordenar a queda das letras
                    top:'+=60px'
                });
            }, i * 300 );
        });

        setTimeout( function() {  // refresh no game e chama o próximo game 3 segundo (next)
            refreshGame();
            buildGame( ++idx );
        }, 3000);
    }

    function rotate( el, angle ) { //função rotação para as letras 
        $( el ).css({
            '-webkit-transform': 'rotate(' + angle + 'deg)',
            '-moz-transform': 'rotate(' + angle + 'deg)',
            '-ms-transform': 'rotate(' + angle + 'deg)',
            '-o-transform': 'rotate(' + angle + 'deg)',
            'transform': 'rotate(' + angle + 'deg)'
        });
    }

    buildGame( idx ); // constroi o game
    ajustarTamanho()

});