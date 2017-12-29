const possibleMoves = ['paper', 'rock', 'scissors', 'lizard', 'spock']
const emojiMoves = {
  paper: '✋',
  rock: '✊',
  scissors: '✌️',
  lizard: '🦎',
  spock: '🖖'
}
const winningMoves = {
  paper: ['rock', 'spock'],
  rock: ['scissors', 'lizard'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['scissors', 'rock']
}
const resultMessages = {
  win: 'You Won!',
  lose: 'You Lost!',
  draw: 'It\'s a Draw!'
}

function generateComputerMove() {
  const randomIndex = Math.floor(Math.random() * possibleMoves.length)
  return possibleMoves[randomIndex]
}

function calculateWinner(userMove, computerMove) {
  if (userMove === computerMove) {
    return resultMessages.draw
  } else {
    return winningMoves[userMove].some(move => move === computerMove) ? resultMessages.win : resultMessages.lose
  }
}

function calculateScore(result, score) {
  if (result === resultMessages.win) {
    score.player++
  } else if (result === resultMessages.lose) {
    score.computer++
  }
  return score
}

function validateUserInput(input) {
  return possibleMoves.some(move => move === input) 
}

function emojifyMove(move) {
  return emojiMoves[move]
}

module.exports = {
  generateComputerMove,
  calculateWinner,
  validateUserInput,
  possibleMoves,
  emojifyMove,
  resultMessages,
  calculateScore
}
