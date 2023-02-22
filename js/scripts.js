let dice1 = 1;
let dice2 = 1;

document.getElementById("roll-button").addEventListener("click", rollDice);

function hideBust() {
  document.getElementById("bust").setAttribute("class", "hidden");
}

function rollDice() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  displayDice();
}

function displayDice() {
  document.querySelector("span#dice1").innerText = dice1;
  document.querySelector("span#dice2").innerText = dice2;
}
