
const store = require('./store')
const gameUi = require('./ui.js')
const gameApi = require('./api')
const getFormFields = require('../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('logging, sign-Up button')

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

// const clearBoard = function ()

const onUpdateGame = function () {
  gameApi.updateGame()
    .then((response) => gameUi.onUpdateGameSuccess(response))
  // store.game = response.game

  // .then(() => console.log(store))
    .catch(() => gameApi.onUpdateGameFailure())
}

let gameOver = false
let userX = true

const onStartGame = function () {
  gameApi.startGame().then((response) => gameUi.onStartGameSuccess(response))
  // .then(() => console.log(store))
  // start the onBoxClick function when onStartGame starts
  $('.cell').on('click', onBoxClick)
  // set game to always start with user X
  userX = true
  // set game over to always start with game NOt over
  gameOver = false
}

const onBoxClick = function (data) {
  // using getAttributes to get index number from data=cell-index
  const index = this.getAttribute('data-cell-index')

  const userValue = store.game.cells
  // console.log(index)
  if (userValue[index]) {
    return
  }
  // console.log(index)
  if (userX) {
    $(this).text('x')
    userValue[index] = 'pink slug'
  } else {
    $(this).text('o')
    userValue[index] = 'green slug'
  }
  userX = !userX

  // row check winning conditions
  if (
    userValue[0] === userValue[1] && userValue[1] === userValue[2] && userValue[2] !== ''
  ) {
    $('#winner-alert').text(userValue[index] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  } else if (
    userValue[3] === userValue[4] && userValue[4] === userValue[5] && userValue[5] !== ''
  ) {
    $('#winner-alert').text(userValue[index] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  } else if (
    userValue[6] === userValue[7] && userValue[7] === userValue[8] && userValue[8] !== ''
  ) {
    $('#winner-alert').text(userValue[index] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  }
  // check column wining conditions
  else if (
    userValue[0] === userValue[3] && userValue[3] === userValue[6] && userValue[6] !== ''
  ) {
    $('#winner-alert').text(userValue[index] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  } else if (
    userValue[1] === userValue[4] && userValue[4] === userValue[7] && userValue[7] !== ''
  ) {
    $('#winner-alert').text(userValue[index] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  } else if (
    userValue[2] === userValue[5] && userValue[5] === userValue[8] && userValue[8] !== ''
  ) {
    $('#winner-alert').text(userValue[index] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  }

  // check diagonals winning conditions
  else if (
    userValue[0] === userValue[4] && userValue[4] === userValue[8] && userValue[8] !== ''
  ) {
    $('#winner-alert').text(userValue[index] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  } else if (
    userValue[2] === userValue[4] && userValue[4] === userValue[6] && userValue[6] !== ''
  ) {
    $('#winner-alert').text(userValue[index] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  }
  // if no winner then tie
  else if (
    userValue[0] && userValue[1] !== '' && userValue[2] !== '' && userValue[3] !== '' && userValue[4] !== '' && userValue[5] !== '' && userValue[6] !== '' && userValue[7] !== '' && userValue[8] !== ''
  ) {
    gameOver = !gameOver
    console.log(gameOver)
    $('#tie-alert').text("It's a tie!")
    $('.cell').off('click')
  }

  console.log(index, userValue[index], gameOver)
  gameApi
    .updateGame(index, userValue[index], gameOver)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame,
  onBoxClick,
  onUpdateGame
  // onClearBoard

}
