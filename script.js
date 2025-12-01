// script.js

// Função que trata os cliques nos botões
function selectOption(option) {
    if (option === 'yes') {
        // Flash colorido
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Esconde a pergunta
            displayCatHeart(); // Mostra o cat-heart.gif
        });
    } else if (option === 'no') {
        // Troca o texto do botão "Não" para "Tem certeza?"
        document.getElementById('no-button').innerText = 'Tem certeza?';
        
        // Aumenta o tamanho da fonte do botão "Sim"
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; 
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Opção inválida!');
    }
}

// Função que faz o efeito arco-íris e executa uma callback
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

// Mostra o cat.gif inicialmente
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Gato';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Mostra o cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Gato Apaixonado';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

// Exibe o cat.gif ao iniciar
displayCat();