function main() {
  let player1RPS = ''
  let player2RPS = ''

  // player one rock
  function player1Rock() {
    if (player1RPS === player2RPS) {
      window.alert(`It's a draw!`)
    } else if (player1RPS === 'Rock' && player2RPS === 'Scissors') {
      window.alert(`Player 1 won!`)
    } else {
      window.alert(`Player 2 won!`)
    }
  }

  // player two rock
  function player2Rock() {
    if (player2RPS === player1RPS) {
      window.alert(`It's a draw!`)
    } else if (player2RPS === 'Rock' && player1RPS === 'Scissors') {
      window.alert(`Player 2 won!`)
    } else {
      window.alert(`Player 1 won!`)
    }
  }

  document
    .querySelector('.player1 .Rock')
    .addEventListener('click', player1Rock)

  document
    .querySelector('.player2 .Rock')
    .addEventListener('click', player2Rock)
}

document.addEventListener('DOMContentLoaded', main)

// if (player1RPS === player1RPS) {
//   window.alert(`It's a draw!`)
// } else if (
//   (player1RPS === 'Scissors' && player2RPS === 'Paper') ||
//   (player1RPS === 'Rock' && player2RPS === 'Scissors') ||
//   (player1RPS === 'Paper' && player2RPS === 'Rock')
// ) {
//   window.alert(`Player 1 won!`)
// } else {
//   window.alert(`Player 2 won!`)
