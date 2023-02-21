let dice1 = 1;
let dice2 = 1;

document.getElementById("roll-button").addEventListener("click", rollDice);

function hideBust() {
  document.getElementById("bust").setAttribute("class", "hidden");
}

function rollDice() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  console.log(dice1);
}