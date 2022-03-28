
const store = require('./store')

const onSignUpSuccess = function () {
  $('#success-message').html('Signed Up Successfully!')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#error-message').html('Error: Can NOT Sign up. That email has been used')
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')

  $('#sign-up-div, #error-message, #sign-out-message, #sign-in-div').hide()
  $('#success-message').html('You are signed in and ready to play!')
  $('#sign-out-div, #game-board, #game-start-button').show()
  console.log(response)
  // store data from the response in mt store object. store this to start a game which need token from user
  store.user = response.user
}

const onSignInFailure = function () {
  $('#success-message').hide()
  $('#error-message').html('Error: Can NOT Sign in!')
}

const onSignOutSuccess = function () {
  $('#sign-out-message').html('<p>you are signed out!</p>')
  $('#success-message, #error-message, #sign-out-div, #game-board').hide()
  $('form').trigger('reset')
  $('#sign-up-div, #sign-in-div, #game-board').show()
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
  console.log(response)
  store.game = response.game
  clearBoard()
  // store.user = response.user
}
const onStartGameFailure = function () {
  $('#error-message').html('Error: Can Not Start Game. check your codes')
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
