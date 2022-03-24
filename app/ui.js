
const store = require('./store')

const onSignUpSuccess = function () {
  $('#game-display').html('Signed Up Successfully!')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#error-message').html('Error: Can NOT Sign up. That email has been used')
}

const onSignInSuccess = function (response) {
  $('#sign-up-div').hide()
  $('form').trigger('reset')
  $('#game-display').html('You are signed in!')
  console.log(response)
  // store data from the response in mt store object
  store.user = response.user
}

const onSignInFailure = function () {
  $('#error-message').html('Error: Can NOT Sign in!')
  $('#game-display').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
