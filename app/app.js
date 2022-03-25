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
  $('#sign-out-div, #game-board, #game-start-button').hide()
  $('.cell').on('click', gameEvents.onBoxClick)
  // $('#index-games').on('click', gameEvents.onIndexGames)
  // $('#show-game').on('sumbit', gameEvents.onShowGame)
  $('#0'.on('click', gameEvents.))
  $('#1'.on('click', gameEvents.))
  $('#2'.on('click', gameEvents.))
  $('#3'.on('click', gameEvents.))
  $('#4'.on('click', gameEvents.))
  $('#5'.on('click', gameEvents.))
  $('#6'.on('click', gameEvents.))
  $('#7'.on('click', gameEvents.))
  $('#8'.on('click', gameEvents.))
  

})
