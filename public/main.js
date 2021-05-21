function main() {
  // player one rock
  function player1Rock() {
    player1RPS = 'Rock'
    if (player1RPS === player2RPS) {
      window.alert(`It's a draw!`)
    } else if (
      (player1RPS === 'Rock' && player2RPS === 'Scissors') ||
      (player1RPS === 'Rock' && player2RPS === 'Lizard')
    ) {
      window.alert(`Player 1 won!`)
    } else {
      window.alert(`Player 2 won!`)
    }
  }

  // player two rock
  function player2Rock() {
    player2RPS = 'Rock'
    if (player2RPS === player1RPS) {
      window.alert(`It's a draw!`)
    } else if (
      (player2RPS === 'Rock' && player1RPS === 'Scissors') ||
      (player2RPS === 'Rock' && player1RPS === 'Lizard')
    ) {
      window.alert(`Player 2 won!`)
    } else {
      window.alert(`Player 1 won!`)
    }
  }

  document
    .querySelector('.playerone .Rock')
    .addEventListener('click', player1Rock)

  document
    .querySelector('.playertwo .Rock')
    .addEventListener('click', player2Rock)

  // player one paper
  function player1Paper() {
    player1RPS = 'Paper'
    if (player1RPS === player2RPS) {
      window.alert(`It's a draw!`)
    } else if (
      (player1RPS === 'Paper' && player2RPS === 'Rock') ||
      (player1RPS === 'Paper' && player2RPS === 'Spock')
    ) {
      window.alert(`Player 1 won!`)
    } else {
      window.alert(`Player 2 won!`)
    }
  }

  // player two paper
  function player2Paper() {
    player2RPS = 'Paper'
    if (player2RPS === player1RPS) {
      window.alert(`It's a draw!`)
    } else if (
      (player2RPS === 'Paper' && player1RPS === 'Rock') ||
      (player2RPS === 'Paper' && player1RPS === 'Spock')
    ) {
      window.alert(`Player 2 won!`)
    } else {
      window.alert(`Player 1 won!`)
    }
  }

  document
    .querySelector('.playerone .Paper')
    .addEventListener('click', player1Paper)

  document
    .querySelector('.playertwo .Paper')
    .addEventListener('click', player2Paper)

  // player one scissors
  function player1Scissors() {
    player1RPS = 'Scissors'
    if (player1RPS === player2RPS) {
      window.alert(`It's a draw!`)
    } else if (
      (player1RPS === 'Scissors' && player2RPS === 'Paper') ||
      (player1RPS === 'Scissors' && player2RPS === 'Lizard')
    ) {
      window.alert(`Player 1 won!`)
    } else {
      window.alert(`Player 2 won!`)
    }
  }

  // player two scissors
  function player2Scissors() {
    player2RPS = 'Scissors'
    if (player2RPS === player1RPS) {
      window.alert(`It's a draw!`)
    } else if (
      (player2RPS === 'Scissors' && player1RPS === 'Paper') ||
      (player1RPS === 'Scissors' && player2RPS === 'Lizard')
    ) {
      window.alert(`Player 2 won!`)
    } else {
      window.alert(`Player 1 won!`)
    }
  }

  document
    .querySelector('.playerone .Scissors')
    .addEventListener('click', player1Scissors)

  document
    .querySelector('.playertwo .Scissors')
    .addEventListener('click', player2Scissors)

  // player one lizard
  function player1Lizard() {
    player1RPS = 'Scissors'
    if (player1RPS === player2RPS) {
      window.alert(`It's a draw!`)
    } else if (
      (player1RPS === 'Scissors' && player2RPS === 'Paper') ||
      (player1RPS === 'Scissors' && player2RPS === 'Lizard')
    ) {
      window.alert(`Player 1 won!`)
    } else {
      window.alert(`Player 2 won!`)
    }
  }

  // player two lizard
  function player2Lizard() {
    player2RPS = 'Lizard'
    if (player2RPS === player1RPS) {
      window.alert(`It's a draw!`)
    } else if (
      (player2RPS === 'Lizard' && player1RPS === 'Paper') ||
      (player1RPS === 'Lizard' && player2RPS === 'Spock')
    ) {
      window.alert(`Player 2 won!`)
    } else {
      window.alert(`Player 1 won!`)
    }
  }

  document
    .querySelector('.playerone .Lizard')
    .addEventListener('click', player1Lizard)

  document
    .querySelector('.playertwo .Lizard')
    .addEventListener('click', player2Lizard)

  // player one spock
  function player1Spock() {
    player1RPS = 'Spock'
    if (player1RPS === player2RPS) {
      window.alert(`It's a draw!`)
    } else if (
      (player1RPS === 'Spock' && player2RPS === 'Scissors') ||
      (player1RPS === 'Spock' && player2RPS === 'Rock')
    ) {
      window.alert(`Player 1 won!`)
    } else {
      window.alert(`Player 2 won!`)
    }
  }

  // player two spock
  function player2Spock() {
    player2RPS = 'Spock'
    if (player2RPS === player1RPS) {
      window.alert(`It's a draw!`)
    } else if (
      (player2RPS === 'Spock' && player1RPS === 'Scissors') ||
      (player1RPS === 'Spock' && player2RPS === 'Rock')
    ) {
      window.alert(`Player 2 won!`)
    } else {
      window.alert(`Player 1 won!`)
    }
  }

  document
    .querySelector('.playerone .Spock')
    .addEventListener('click', player1Spock)

  document
    .querySelector('.playertwo .Spock')
    .addEventListener('click', player2Spock)
}
document.addEventListener('DOMContentLoaded', main)
