
const store = require('./store')
// const gameEvents = require('./events')

const onSignUpSuccess = function () {
  $('#sign-up-message').html('Signed Up Successfully!').css('color', 'gold')
  $('form').trigger('reset')
  $('#sign-out-message').hide()
}

const onSignUpFailure = function () {
  $('#sign-up-message').html('Error: Can NOT Sign up').css('color', 'red')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')

  // $('#sign-up-div, #error-message, #sign-out-message, #sign-in-div').hide()
  // $('#sign-in-message').html('You are signed in and ready to play!').css('color', 'green')
  $('#tie-alert, #game, #sign-out-div, #game-start-div').show()
  $('#sign-up-message, #tie-alert, #sign-in-div, #sign-out-message').hide()
  $('#sign-in-message')
    .html('You are signed in. Click Start Game to play!')
    .css('color', 'gold').show()
  console.log(response)
  // store data from the response in mt store object. store this to start a game which need token from user
  store.user = response.user
}

const onSignInFailure = function () {
  // $('#success-message').hide()
  $('#sign-in-message')
    .html('Error: Can NOT Sign in!')
    .css('color', 'red', 'font', 'Press Start 2P')
}

const onSignOutSuccess = function () {
  $('#sign-out-message').html('<p>you are signed out!</p>')
  $('#success-message, #error-message, #sign-out-div, #game, #winner-alert, #tie-alert, #game-start-div').hide()
  $('form').trigger('reset')
  $('#sign-up-div, #sign-in-div, #game-board').show()
  $('#sign-out-message')
    .html('You are signed out')
    .css('color', 'gold').show()
}

const onSignOutFailure = function () {
  $('#error-message').html('<p>Error: You must be signed in to sign out!</p>')
}

const clearBoard = function () {
  // set value = to null
  $('.cell').text('')
}

const onStartGameSuccess = function (response) {
  // storing user and game to use when update game. For token and game ID
  // console.log(response)
  store.game = response.game
  $('#tie-alert, #sign-in-message, #winner-alert').hide()
  clearBoard()
  $('.cell').on('click')

  $('#game, .game-alert').show()

  // store.user = response.user
}
const onStartGameFailure = function () {
  $('#error-message').html('Error: Can Not Start Game')
}

const onUpdateGameSuccess = function (response) {
  console.log(response)
  store.game = response.game
}

const onUpdateGameFailure = function () {
  $('#error-message').html('Error: Can Not update game move!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onStartGameSuccess,
  onStartGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  clearBoard
}
