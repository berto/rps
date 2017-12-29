const expect = require('chai').expect
const logic = require('../logic')

describe('Game Logic', function() {
  it('should generate a computer move', function() {
    const computerMove = logic.generateComputerMove()
    const isPossibleMove = logic.possibleMoves.some(move => move === computerMove)
    expect(isPossibleMove).to.equal(true)
  })
  it('should calculate a winner', function() {
    const userMove = 'rock'
    const computerMove = 'paper'
    const result = logic.resultMessages.lose
    expect(logic.calculateWinner(userMove, computerMove)).to.equal(result)
  })
  it('should validate user input', function() {
    const invalidInput = 'asdf'
    const validInput = 'rock'
    expect(logic.validateUserInput(invalidInput)).to.equal(false)
    expect(logic.validateUserInput(validInput)).to.equal(true)
  })
  it('should calculate score', function() {
    const score = {
      computer: 0,
      player: 0
    }
    const result = logic.resultMessages.lose
    const newScore = logic.calculateScore(result, score)
    expect(newScore.computer).to.equal(1)
    expect(newScore.player).to.equal(0)
  })
})
