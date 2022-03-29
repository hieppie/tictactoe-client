
const store = require('./store.js')
const config = require('./config.js')

// url: config.apiUrl + '/games'

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
    // same as data: data
  })
}

const signIn = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

const signOut = function () {
  // console.log(store)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
      // Content-Type:
    }
  })
}

const startGame = function (data) {
  // console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (cellIndex, userValue, gameOver) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: userValue
        },
        over: gameOver
      }
    }
  })
}

// const indexGames = function () {
//   return $.ajax({
//     method: 'GET',
//     url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

// const showGame = function (data) {
//   console.log(data)
//   return $.ajax({
//     method: 'GET',
//     url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + data.id,
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  startGame,
  updateGame
  // indexGames,
  // showGame
}
