// Dice Game

// Create two variables to represent the dice.
// I want to create a function to represent this game.

function diceRoll() {
  // randomize the dice
  let diceArray = [1, 2, 3, 4, 5, 6]
  let firstDice = diceArray[Math.floor(Math.random() * 6)]
  let secondDice = diceArray[Math.floor(Math.random() * 6)]
  // change the image
  let diceOneImage = document.getElementById("dice1")
  diceOneImage.src = `images/dice${firstDice}.png`
  let diceTwoImage = document.getElementById("dice2")
  diceTwoImage.src = `images/dice${secondDice}.png`
  // communicate the winner
  if (firstDice == secondDice) {
    console.log("it's a tie")
  } else if (firstDice> secondDice) {
    console.log("first is the winner")
  } else {
    console.log("second is the winner")
  }
  
  return {
    // could return data here to make it persist
      first: firstDice,
      second: secondDice
  }

}
let die = diceRoll()
document.getElementById("roll").addEventListener("click", diceRoll)

