
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
    .then((response) => gameUi.onStartGameSuccess(response))
    // .then(() => console.log(store))
    .catch(() => gameApi.onStartGameFailure())
}

const onUpdateGame = function () {
  gameApi.updateGame()
    .then(() => {
      console.log('wtf')
      // store.game = response.game
    })
  // .then(() => console.log(store))
}

// const board = [null, null, null, null, null, null, null, null, null]
// const userX = true

const onBoxClick = function () {
  gameApi.updateGame()

  // store.game.cell.index = 1
  // store.game.cell.value = 'x'
  // store.game.over = false

  // store.game.cells.index = 0
  // store.game.cells.value = 'x'
  // store.game.over = false
  // data = {
  //   game: {
  //     cell: {
  //       index: 0,
  //       value: 'x'
  //     },
  //     over: false
  //   }
  // }
  // const board = response.game.cells
  // // using getAttributes to get index number from data=cell-index
  // const cellIndex = this.getAttribute('data-cell-index')
  // // console.log(cellIndex)
  // if (board[cellIndex]) {
  //   return
  // }
  // console.log(cellIndex)
  // if (userX) {
  //   $(this).text('x')
  //   board[cellIndex] = 'x'
  // } else {
  //   $(this).text('o')
  //   board[cellIndex] = 'o'
  // }
  // console.log(board)
  // userX = !userX
  // // row check
  // if (board[0] === board[1] && board[1] === board[2] && board[2] != null) {
  //   $('#winner-alert')(board[cellIndex] + ' Is the Winner')
  // } else if (board[3] === board[4] && board[4] === board[5] && board[5] != null) {
  //   $('#winner-alert').text(board[cellIndex] + ' Is the Winner')
  // } else if (board[6] === board[7] && board[7] === board[8] && board[8] != null) {
  //   $('#winner-alert').text(board[cellIndex] + ' Is the Winner')
  // }
  // // check collumn
  // else if (board[0] === board[3] && board[3] === board[6] && board[6] != null) {
  //   $('#winner-alert').text(board[cellIndex] + ' Is the Winner')
  // } else if (board[1] === board[4] && board[4] === board[7] && board[7] != null) {
  //   $('#winner-alert').text(board[cellIndex] + ' Is the Winner')
  // } else if (board[2] === board[5] && board[5] === board[8] && board[8] != null) {
  //   $('#winner-alert').text(board[cellIndex] + ' Is the Winner')
  // }

  // // check diagonals
  // else if (board[0] === board[4] && board[4] === board[8] && board[8] != null) {
  //   $('#winner-alert').text(board[cellIndex] + ' Is the Winner')
  // } else if (board[2] === board[4] && board[4] === board[6] && board[6] != null) {
  //   $('#winner-alert').text(board[cellIndex] + ' Is the Winner')
  // }
  // // if not winner then tie
  // else if (board[0] && board[1] !== null && board[2] !== null && board[3] !== null && board[4] !== null && board[5] !== null & board[6] !== null && board[7] !== null && board[8] !== null) {
  //   $('#tie-alert').text("It's a tie!")
  // }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame,
  onBoxClick,
  onUpdateGame
}
