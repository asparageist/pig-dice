let dice1 = 1;
let dice2 = 1;
let score1 = 0;
let score2 = 0;
let player = 0;
let gameOver = false;

document.getElementById("roll-button").addEventListener("click", gameOn);
document.getElementById("pass-button").addEventListener("click", setPlayer);
document.getElementById("dang").addEventListener("click", dang);
document.getElementById("reset").addEventListener("click", reset);

window.onload = function() {
  document.getElementById("roll-button").removeAttribute("class", "hidden");  
  document.getElementById("pass-button").removeAttribute("class", "hidden");
  document.getElementById("rollem").removeAttribute("class", "hidden");
}

function gameOn() {
  if (gameOver === false) {
    document.getElementById("rollem").setAttribute("class", "hidden");
    rollDice();
  } else {
    gameOff();
  }
}

function gameOff() {
  gameOver = true;
  document.getElementById("reset").removeAttribute("class", "hidden");
  document.getElementById("roll-button").setAttribute("class", "hidden");
  document.getElementById("pass-button").setAttribute("class", "hidden");
  document.getElementById("rollem").removeAttribute("class", "hidden");
}

function reset() {
  document.getElementById("roll-button").removeAttribute("class", "hidden");
  document.getElementById("pass-button").removeAttribute("class", "hidden");
  document.getElementById("reset").setAttribute("class", "hidden");
  player = 0;
  score1 = 0;
  score2 = 0;
  document.querySelector("span#score1").innerText = score1;
  document.querySelector("span#score2").innerText = score2;
  document.querySelector("span#player").innerText = player + 1;
  gameOver = false;
}

function rollDice() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  displayDice();
  isGameOn();
}

function displayDice() {
  document.querySelector("span#dice1").innerText = dice1;
  document.querySelector("span#dice2").innerText = dice2;
}

function isGameOn() {
  if (score1 < 100 && score2 < 100) {
    busted();
  } else {
    if (score1 >= 100) {
      document.querySelector("span#score1").innerText = (score1 + " WINNER!");
      gameOff();
    } else if (score2 >= 100) {
      document.querySelector("span#score2").innerText = (score2 + " WINNER!");
      gameOff();
    }
  }
}

function busted() {
  if (dice1 === 1 || dice2 === 1) {
    document.getElementById("bust").removeAttribute("class", "hidden");
    document.getElementById("roll-button").setAttribute("class", "hidden");
    document.getElementById("pass-button").setAttribute("class", "hidden");
  } else {
    addScore();
  }
}

function dang() {
  document.getElementById("bust").setAttribute("class", "hidden");
  document.getElementById("roll-button").removeAttribute("class", "hidden");
  document.getElementById("pass-button").removeAttribute("class", "hidden");
  setPlayer();
}

function addScore() {
  if (player === 0) {
    score1 += dice1 + dice2;
  } else {
    score2 += dice1 + dice2;
  }
  document.querySelector("span#score1").innerText = score1;
  document.querySelector("span#score2").innerText = score2;
} 


function setPlayer() {
  if (player === 0) {
    player += 1;
  } else {
    player = 0;
  }
  document.querySelector("span#player").innerText = player + 1;
}