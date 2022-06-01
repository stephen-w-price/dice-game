// Dice Game

// Create two variables to represent the dice.
// I want to create a function to represent this game.

function diceRoll() {
  let diceArray = [1, 2, 3, 4, 5, 6]
  let firstDie = ""
  firstDie = diceArray[Math.floor(Math.random() * 6)]
  let secondDie = diceArray[Math.floor(Math.random() * 6)]
  console.log(`This is the first die ${firstDie}`)
  console.log(`This is the first die ${secondDie}`)
  return {
      first: firstDie,
      second: secondDie
  }

}

let diceGame = diceRoll()


if (diceGame.first == diceGame.second) {
  console.log("it's a tie")
} 
else if (diceGame.first > diceGame.second) {
  console.log("first is the winner")
} else {
  console.log("second is the winner")
}