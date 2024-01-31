let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Contador de Jogadas

let player1 = 0;
let player2 = 0;

// Adicionando o evento de click nas caixas.
for (let i = 0; i < boxes.length; i++) {
  // Quando o jogador clica na caixa
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    if (player1 == player2) {
      // x
      el = x;
    } else {
      // o
      el = o;
    }

    // Verifica se já tem o x ou o
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);
    }
    // Computar jogada
    if (player1 == player2) {
      player1++;
    } else {
      player2++;
    }

    //Verifica quem venceu
    checkWinCondition();
  });
}

// Verificar quem será o próximo a jogar
function checkEl(player1, player2) {
  if (player1 == player2) {
    // x
    el = x;
  } else {
    // o
    el = o;
  }
  return el;
}

// Visualizar o vencedor

function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  let b1Child,
    b2Child,
    b3Child,
    b4Child,
    b5Child,
    b6Child,
    b7Child,
    b8Child,
    b9Child;

  // Horizontal
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    b1Child = b1.childNodes[0].className;
    b2Child = b2.childNodes[0].className;
    b3Child = b3.childNodes[0].className;
  }
  if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
    console.log("x venceu");
  } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
    console.log("o venceu");
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    b4Child = b4.childNodes[0].className;
    b5Child = b5.childNodes[0].className;
    b6Child = b6.childNodes[0].className;
  }
  if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
    console.log("x venceu");
  } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
    console.log("o venceu");
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    b7Child = b7.childNodes[0].className;
    b8Child = b8.childNodes[0].className;
    b9Child = b9.childNodes[0].className;
  }
  if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
    console.log("x venceu");
  } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
    console.log("o venceu");
  }
}

// Vertical
