class Game {
    constructor() {

    }
    getState() {
        db.ref("gameState").on("value", data => {
            gameState = data.val()
        })
    }
    updateState(state) {
        db.ref("/").update(
            { gameState: state }
        )
    }
    async start() {
        if (gameState === 0) {
            player = new Player()
            var playerCountRef = await db.ref("playerCount").once("value")
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val()
                player.getCount()
            }
            form = new Form()
            form.display()
        }

        player1 = createSprite(200, 200, 20, 100)
        player2 = createSprite(400, 200, 20, 100)
        player1Tag = createSprite(200,150,20,100)
        player2Tag = createSprite(400,150,20,100)
        groundMain = createSprite(400,530,600,10)
        platformLeft = createSprite(100,350,200,10)
        platformRight = createSprite(700,350,200,10)

        player1.addImage(charcter1Image)
        player2.addImage(charcter2Image)
        player1Tag.addImage(p1Tag)
        player2Tag.addImage(p2Tag)
        platformLeft.addImage(platformImage)
        platformRight.addImage(platformImage)
    }

    play() {
        clear()
        background(sky1)
        form.hide()
        Player.getPlayerInfo()
        if (allPlayerInfo) {
            player1.collide(groundMain)
            player2.collide(groundMain)
            player1Tag.x=player1.x;
            player1Tag.y=player1.y-40;
            player2Tag.x=player2.x;
            player2Tag.y=player2.y-40;
            
            if (keyIsDown(UP_ARROW)) {
                if(player.index === 1){
                player1.velocityY = - 10
                } else{
                    player2.velocityY = - 10
                }
            } else if(player1.isTouching(groundMain) || player2.isTouching(groundMain)){
                player1.x = allPlayerInfo["player1"].x
                player1.y = allPlayerInfo["player1"].y
                player2.y = allPlayerInfo["player2"].y
                player2.x = allPlayerInfo["player2"].x
            } else{
                player1.velocityY = 5
                player2.velocityY = 5
            }
            db.ref("players/player1").update({
                y: player1.y
            })
            db.ref("players/player2").update({
                y: player2.y
            })
            if(keyIsDown(RIGHT_ARROW)){
                player.x += 10
            }
            if(keyIsDown(LEFT_ARROW)){
                player.x = player.x - 10
            }
            
            if(keyWentDown(DOWN_ARROW)){
                if(player.index === 1){
                    var fireball = createSprite(player1.x,player1.y)
                    fireball.addImage(fireBall1Image)
                    fireball.velocityX = 5
                    fireBallGroup.add(fireball)
                }else if(player.index === 2){
                    var fireball = createSprite(player2.x,player2.y)
                    fireball.addImage(fireBall1Image)
                    fireball.velocityX = -5
                    fireBallGroup.add(fireball)
                }
            }
            if(player.index === 1){
                if(fireBallGroup.isTouching(player2)){
                //player.health = player.health - 10
                var oppositePlayerHealth  = allPlayerInfo["player2"].health
                oppositePlayerHealth=oppositePlayerHealth-10;
                db.ref("players/player2").update({health:oppositePlayerHealth})
                fireBallGroup.destroyEach()
                
            }
            }else if(player.index === 2){
                if(fireBallGroup.isTouching(player1)){
                    fireBallGroup.destroyEach()
                    var oppositePlayerHealth  = allPlayerInfo["player1"].health
                    oppositePlayerHealth=oppositePlayerHealth-10;
                    db.ref("players/player1").update({health:oppositePlayerHealth})
                   
                }
            }
            player.updatePlayer()
            textSize(20)
            text("player2"+allPlayerInfo["player2"].health,750,20)
            text("player1"+allPlayerInfo["player1"].health,50,20)
        }
        drawSprites()
    }
}