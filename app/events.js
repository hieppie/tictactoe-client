
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

const onStartGame = function () {
  gameApi.startGame()
    .then((response) => gameUi.onStartGameSuccess(response))
    // .then(() => console.log(store))
  $('.cell').on('click', onBoxClick)
}

const onUpdateGame = function () {
  gameApi.updateGame()
    .then((response) => gameUi.onUpdateGameSuccess(response))
  // store.game = response.game

  // .then(() => console.log(store))
    .catch(() => gameApi.onUpdateGameFailure())
}

let gameOver = false
// const board = [null, null, null, null, null, null, null, null, null]
let userX = true
// const onClearBoard = function () {
//   for (let i = 0; i < board.length; i++) {
//     board[i] = null
//   }
// }

const onBoxClick = function (data) {
  // data:{
  //     store.game.cell.index = 0
  //     store.game.cell.value = 'x'
  //     store.game.over = false
  // }}}

  // store.game.cell.index = 1
  // store.game.cell.value = 'x'
  // store.game.over = false

  // const board = response.game.cells
  // using getAttributes to get index number from data=cell-index
  // const userValue = board
  const cellIndex = this.getAttribute('data-cell-index')
  // console.log(cellIndex)
  if (store.game.cells[cellIndex]) {
    return
  }
  // console.log(cellIndex)
  if (userX) {
    $(this).text('x')
    store.game.cells[cellIndex] = 'x'
  } else {
    $(this).text('o')
    store.game.cells[cellIndex] = 'o'
  }
  console.log(store.game.cells)
  userX = !userX
  // row check
  if (
    store.game.cells[0] === store.game.cells[1] &&
		store.game.cells[1] === store.game.cells[2] &&
		store.game.cells[2] != ''
  ) {
    $('#winner-alert').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  } else if (
    store.game.cells[3] === store.game.cells[4] &&
		store.game.cells[4] === store.game.cells[5] &&
		store.game.cells[5] != ''
  ) {
    $('#winner-alert').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  } else if (
    store.game.cells[6] === store.game.cells[7] &&
		store.game.cells[7] === store.game.cells[8] &&
		store.game.cells[8] != ''
  ) {
    $('#winner-alert').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  }
  // check column
  else if (
    store.game.cells[0] === store.game.cells[3] &&
		store.game.cells[3] === store.game.cells[6] &&
		store.game.cells[6] != ''
  ) {
    $('#winner-alert').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  } else if (
    store.game.cells[1] === store.game.cells[4] &&
		store.game.cells[4] === store.game.cells[7] &&
		store.game.cells[7] != ''
  ) {
    $('#winner-alert').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  } else if (
    store.game.cells[2] === store.game.cells[5] &&
		store.game.cells[5] === store.game.cells[8] &&
		store.game.cells[8] != ''
  ) {
    $('#winner-alert').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  }

  // check diagonals
  else if (
    store.game.cells[0] === store.game.cells[4] &&
		store.game.cells[4] === store.game.cells[8] &&
		store.game.cells[8] != ''
  ) {
    $('#winner-alert').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
  } else if (
    store.game.cells[2] === store.game.cells[4] &&
		store.game.cells[4] === store.game.cells[6] &&
		store.game.cells[6] != ''
  ) {
    $('#winner-alert').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.cell').off('click')
  }
  // if not winner then tie
  else if (
    store.game.cells[0] &&
		store.game.cells[1] !== '' &&
		store.game.cells[2] !== '' &&
		store.game.cells[3] !== '' &&
		store.game.cells[4] !== '' &&
		store.game.cells[5] !== '' &&
    store.game.cells[6] !== '' &&
		store.game.cells[7] !== '' &&
		store.game.cells[8] !== ''
  ) {
    gameOver = !gameOver
    console.log(gameOver)
    $('#tie-alert').text("It's a tie!")
    $('.cell').off('click')
  }

  // function reset () {
  //   // iterate through all sqr buttons and clear their values
  //   let reset-button'
  //   for (let i = 1; i < board.length; i++) {
  //   #reset-button = 'sqr' + i
  //     document.getElementById('reset-button').value = ''
  //   }

  //   // reset squares to empty Array
  //   board = []

  //   // reset the global variable for the game being over
  //   gameOver = false
  console.log(cellIndex, store.game.cells[cellIndex], gameOver)
  gameApi.updateGame(cellIndex, store.game.cells[cellIndex], gameOver)
  // console.log(cellIndex, userValue, gameOver)
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
