// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./events')

$(() => {
  $('#sign-up-form').on('submit', gameEvents.onSignUp)
  $('#sign-in-form').on('submit', gameEvents.onSignIn)
  $('#sign-out-button').on('click', gameEvents.onSignOut)

  $('#game-start-button').on('click', gameEvents.onStartGame)
  // $('#sign-out-div, #game-start-button, #game').hide()
  // $('#game-start-button').on('click', gameEvents.onStartGame)
  $('#play-again-button').on('click', gameEvents.onStartGame)
  $('#tie-alert, #game, #sign-out-div, #game-start-div').hide()

  // $('#reset-button').on('click', gameEvents.onStartGame)
  // $('#reset-button').on('click', gameEvents.onClearBoard())
  // $('.cell').on('click', gameEvents.onUpdateGame)
  // $('.cell').on('click', function () { console.log(this.getAttribute('data-cell-index')) })
})
