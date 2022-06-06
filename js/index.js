// Dice Game


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
    console.log(`The first dice rolled a ${firstDice} and second dice rolled a ${secondDice} - it's a tie`)
  } else if (firstDice> secondDice) {
    console.log(`The first dice rolled a ${firstDice} and second dice rolled a ${secondDice} - first is the winner`)
  } else {
    console.log(`The first dice rolled a ${firstDice} and second dice rolled a ${secondDice} - second is the winner`)
  }
  return {
    // could return data here to make data persist
      first: firstDice,
      second: secondDice
  }
}


document.getElementById("roll").addEventListener("click", diceRoll)

