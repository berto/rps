const possibleMoves = ['✋', '✊', '✌️']
const winnerMoves = {
  paper: 'rock',
  rock: 'scissor',
  scissor: 'paper'
}

function computerMove() {
  const randomIndex = Math.floor(Math.random() * possibleMoves.length)
  return possibleMoves[randomIndex]
}

function calculateWinner(userMove, aiMove) {
  aiMove = convertAiMove(aiMove)
  if (userMove === aiMove) {
    return 'It\' a draw!'
  } else {
    return winnerMoves[userMove] === aiMove ? "You Won!" : "You Lost!"
  }
}

function convertAiMove(aiMove) {
  switch(aiMove) {
    case '✋':
      return 'paper'
    case '✊':
      return 'rock'
    default:
      return 'scissor'
  }
}

module.exports = {
  computerMove,
  calculateWinner
}
