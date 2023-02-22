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