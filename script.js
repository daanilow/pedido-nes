// script.js
// ----------------------------------
// EFEITO DE CORAÇÕES CAINDO (p5.js)
// ----------------------------------

let hearts = [];
let colors = ["#ff4d6d", "#ff1e50", "#ff86a3", "#ffc8d1"];

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(0.5, 1.3);
    this.dy = random(1, 2);
    this.c = random(colors);
  }

  display() {
    push();
    translate(this.x, this.y);
    beginShape();
    fill(this.c);
    noStroke();
    for (let i = 0; i < TWO_PI; i += 0.05) {
      let x = 16 * sin(i) * sin(i) * sin(i) * this.r;
      let y =
        (13 * cos(i) -
          5 * cos(2 * i) -
          2 * cos(3 * i) -
          cos(4 * i)) *
        -this.r;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

  fall() {
    this.y += this.dy;
    if (this.y > height + 50) {
      this.y = -10;
      this.x = random(width);
    }
  }
}

function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0, 0);
  canvas.style("pointer-events", "none");
  canvas.style("z-index", "9999");

  for (let i = 0; i < 30; i++) {
    hearts.push(new Heart(random(width), random(height)));
  }
}

function draw() {
  clear();
  for (let h of hearts) {
    h.fall();
    h.display();
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// ----------------------------------
// CONTROLE DOS BOTÕES
// ----------------------------------

function selectOption(option) {
  if (option === "yes") {
    flashRainbowColors(function () {
      document.getElementById("question").style.display = "none";
      displayCatHeart();
      showLetter(); // <<< mostra a carta sendo digitada
    });
  } else if (option === "no") {
    document.getElementById("no-button").innerText = "Tem certeza?";

    let yesButton = document.getElementById("yes-button");
    let currentFontSize = window
      .getComputedStyle(yesButton)
      .getPropertyValue("font-size");
    let newSize = parseFloat(currentFontSize) * 2;
    yesButton.style.fontSize = newSize + "px";
  } else {
    alert("Opção inválida!");
  }
}

// ----------------------------------
// EFEITO ARCO-ÍRIS
// ----------------------------------

function flashRainbowColors(callback) {
  let colors = ["#fed5ff", "#e7c5ff", "#c8b6fe", "#b8c0ff", "#bcdfff", "#5e548e", "#6e3482"];
  let i = 0;

  let interval = setInterval(function () {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 200);

  setTimeout(function () {
    clearInterval(interval);
    document.body.style.backgroundColor = "";
    if (callback) callback();
  }, 2000);
}

// ----------------------------------
// EXIBIR IMAGENS DO GATO
// ----------------------------------

function displayCat() {
  let imageContainer = document.getElementById("image-container");
  let catImage = new Image();
  catImage.src = "cat.gif";
  catImage.alt = "Gato";
  catImage.onload = function () {
    imageContainer.appendChild(catImage);
  };
}

function displayCatHeart() {
  document.getElementById("image-container").innerHTML = "";
  let imageContainer = document.getElementById("image-container");
  let catHeartImage = new Image();
  catHeartImage.src = "cat-heart.gif";
  catHeartImage.alt = "Gato Apaixonado";
  catHeartImage.onload = function () {
    imageContainer.appendChild(catHeartImage);
    document.getElementById("options").style.display = "none";
  };
}

displayCat();

// ----------------------------------
// EFEITO DE CARTA SENDO DIGITADA
// ----------------------------------

function typeWriter(text, i) {
  if (i < text.length) {
    const letter = document.getElementById("letter");
    letter.innerHTML += text.charAt(i);

    // Faz a página descer enquanto o texto aparece
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });

    setTimeout(function () {
      typeWriter(text, i + 1);
    }, 40);
  }
}

function showLetter() {
  const letterText = `Meu amor,

Desde o primeiro momento em que você entrou na minha vida eu sabia que era com você que eu queria estar até o final.
Você me traz forças, alegria, você me mostrou o que é amar e o que é ser amado verdadeiramente.
Você é a luz da minha vida e é a pessoa que eu quero estar ao lado pelo resto da minha vida, é a mulher que eu quero ver
entrando na igreja, é a mulher que eu quero para ser minha companheira para sempre. A cada dia você me mostra que é com
você que eu quero passar meus dias, crescer, ter uma família, construir uma vida. Você é a definição de amor, de
companheirismo, lealdade e amizade.

Quando eu estou conversando com você o mundo fica mais leve, alegre, sereno. As coisas parecem mais fáceis. Você é o amor
da minha vida e eu não tenho dúvidas de que é com você que eu vou viver pelo resto da minha vida.
Eu não seria a pessoa que eu sou hoje sem você, e eu não estaria aqui se não fosse por você. Você é a luz da minha vida,
é a razão de eu ter esperado até hoje, de todos os dias ter continuado pensando em você.

Não caberia neste site as palavras para descrever o quanto eu te amo, o quanto eu sou grato a você, o quanto eu te acho tudo!
Por isso eu repito diariamente: você é linda, maravilhosa, perfeita, espetacular. Você é minha princesa, minha gatinha,
minha gostosa, meu amor. A distância só me mostrou mais isso, só aumentou minha vontade de estar com você.

Eu vou fazer de tudo para que nós fiquemos juntos, para que eu possa te abraçar, te beijar e te confortar. Eu sempre estarei
aqui por você, nos momentos bons e nos ruins. Eu te amo com todas as forças do fundo do meu coração. VOCÊ É A MULHER DA MINHA VIDA
e eu vou continuar dizendo isso para sempre.

Obrigado por ser o amor da minha vida e estar comigo durante todo este tempo. Espero que através desse pequeno texto eu consiga
mostrar pelo menos 1% do tanto que eu te amo e te quero na minha vida. Obrigado por ser esse pedacinho de gentileza, amor e felicidade
na minha vida. Eu te quero a todo instante, para sempre.

Obrigado por me fazer amar, por me mostrar o que é amor, o que é ser amado. Você me faz a pessoa mais feliz que eu poderia ser.
Eu não poderia pedir alguém melhor. Você é tudo para mim.

TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO ❤️`;

  // Mostra a caixa da carta
  const box = document.getElementById("letter-box");
  box.style.display = "block";

  // Estilo corrigido
  const letterBox = document.getElementById("letter");
  letterBox.style.whiteSpace = "pre-line";
  letterBox.style.fontSize = "20px";
  letterBox.style.fontFamily = "Georgia, serif";
  letterBox.style.margin = "20px auto";
  letterBox.style.width = "100%";
  letterBox.style.maxWidth = "600px";
  letterBox.style.lineHeight = "1.6";
  letterBox.style.overflowWrap = "break-word";

  // Limpa e inicia a digitação
  letterBox.innerHTML = "";
  typeWriter(letterText, 0);
}