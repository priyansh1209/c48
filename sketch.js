var db, game, form, playerCount, player, allPlayerInfo
var player1, player2
var gameState = 0
function preload() {

}

function setup() {
  createCanvas(800, 800);
  db = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  if (playerCount === 2) {
    game.updateState(1)

  }
  if (gameState === 1) {
    game.play()
  }
}

