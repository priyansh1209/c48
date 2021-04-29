var db,game,form,playerCount,player
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
  background(150);
  
    drawSprites();
}

