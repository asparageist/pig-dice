Describe: pigdice()

Test: "it should roll a number, 1 through 6"
Code: "random.number"
Expected Output: "4"

Test: "it should display numbers on the front end"
Code: "innertext.dice1"
Expected Output: "4"

Test: "it should add the dice to the scores"
Code: "score1 = dice1 + dice2"
Expected Output: "8"

Test: "it should alternate between players"
Code: "if player = 0, + 1; else, = 0;"
Expected Output: "Player 1"

Test: "it should only add score to appropriate player"
Code: "if player = 0, score1 = dice1 + dice2"
Expected Output: "Player 1 score = 8"

Test: "it should end the game if a player reaches 100"
Code: "if score >= 100, addScore()"
Expected Output: "Player 1 Score = 100, Player 1 wins!"

Test: "it should bust if a 1 is rolled"
Code: "if dice1 === 1 || dice2 === 1"
Expected Output: "BUSTED!"

Test: "it should start a new game when New Game is clicked"
Code: "eventlisten.click New Game"
Expected Output: player set to one, scores set to 0

Test: "it should pass to the other player if Pass is clicked:
Code: "eventlisten.click Pass"
Expected Output: player changes from 1 to 2