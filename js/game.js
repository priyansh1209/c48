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
    }

    play() {
        clear()
        background(150)
        form.hide()
        Player.getPlayerInfo()
        if (allPlayerInfo) {

            if (keyIsDown(UP_ARROW)) {
                player1.velocityY = - 10
            } else {
                player1.x = allPlayerInfo["player1"].x
                player1.y = allPlayerInfo["player1"].y
                player2.y = allPlayerInfo["player2"].y
                player2.x = allPlayerInfo["player2"].x
            }
            player.updatePlayer()
        }
        drawSprites()
    }
}