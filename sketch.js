var db, game, form, playerCount, player, allPlayerInfo
var player1, player2,groundMain, platformLeft, platformRight
var charcter1Image,charcter2Image,p1Tag,p2Tag,sky1,platformImage,fireBall1Image,fireBallGroup,player1Tag,player2Tag
var gameState = 0
function preload() {
charcter1Image = loadImage("images/Charecter1.png")
charcter2Image = loadImage("images/Charecter2.png")
p1Tag= loadImage("images/p1Tag.png")
p2Tag = loadImage("images/p2Tag.png")
sky1 = loadImage("images/sky1.png")
platformImage = loadImage("images/platforms.png")
fireBall1Image = loadImage("images/fireBall.png")
}


function setup() {
  createCanvas(800, 800);
  db = firebase.database()
  game = new Game()
  game.getState()
  game.start()
  fireBallGroup = new Group()
}

function draw() {
  if (playerCount === 2) {
    game.updateState(1)

  }
  if (gameState === 1) {
    game.play()
  }
}

