
const store = require('./store')
const gameUi = require('./ui.js')
const gameApi = require('./api')
const getFormFields = require('../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('testing, sign-Up button')

  // get data from form using getFormFields
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  // api call
  gameApi.signUp(data)
    .then(() => gameUi.onSignUpSuccess())
    .catch(() => gameUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('logging for sign in')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  gameApi.signIn(data)
    .then((response) => gameUi.onSignInSuccess(response))
    .catch(() => gameUi.onSignInFailure())
}

const onSignOut = function () {
  gameApi.signOut()
    .then((response) => gameUi.onSignOutSuccess(response))
    .catch(() => gameUi.onSignOutFailure())
}

const onStartGame = function () {
  gameApi.startGame()
    .then((response) => {
      store.game = response.game.cells
    })
    .then(() => console.log(store))
}
let userX = true
const onBoxClick = function () {
  console.log('this click this click')
  if (userX) {
    $(this).text('x')
  } else {
    $(this).text('o')
  }
  userX = !userX
}

// const onIndexGames = function () {
//   console.log('in event listener')
//   gameApi
//     .indexGames()
//   //   .then((response) => gameUi.onIndexGamesSuccess(response))
//   // if the request/response has an error, run this callback
//   //   .catch(() => gameUi.onIndexGamesFailure())
// }

// const onShowGame = function (event) {
//   event.preventDefault()
//   console.log('in events.js')

//   const form = event.target
//   const data = getFormFields(form)
//   console.log(data)

//   gameApi
//     .showGame(data)
//     // .then((response) => gameUi.onShowGameSuccess(response))
//     // .catch(() => gameUi.onShowGameFailure())
// }

module.exports = {
  // onSignUp: onSignUp
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame,
  onBoxClick
  // onIndexGames,
  // onShowGame
}
