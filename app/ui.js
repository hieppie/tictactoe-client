
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
  $('#sign-out-div, #gameboard').show()
  console.log(response)
  // store data from the response in mt store object
  store.user = response.user
}

const onSignInFailure = function () {
  $('#success-message').hide()
  $('#error-message').html('Error: Can NOT Sign in!')
}

const onSignOutSuccess = function () {
  $('#success-message, #error-message, #sign-out-div, #gameboard').hide()
  $('form').trigger('reset')
  $('#sign-up-div').show()
}

const onSignOutFailure = function () {
  $('#error-message').html('<p>Error: You must be signed in to sign out!</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
