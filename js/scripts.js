let dice1 = 1;
let dice2 = 1;
let score1 = 0;
let score2 = 0;

document.getElementById("roll-button").addEventListener("click", rollDice);

function hideBust() {
  document.getElementById("bust").setAttribute("class", "hidden");
}

function rollDice() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  displayDice();
  addScore();
}

function displayDice() {
  document.querySelector("span#dice1").innerText = dice1;
  document.querySelector("span#dice2").innerText = dice2;
}

function addScore() {
  score1 += dice1 + dice2;
  score2 += dice1 + dice2;
  document.querySelector("span#score1").innerText = score1;
  document.querySelector("span#score2").innerText = score2;
}