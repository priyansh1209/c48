class Form {
    constructor() {
        this.button = createButton("submit")
        this.input = createInput("type name")
        this.welcome = createElement("h2")
        this.resetButton = createButton("reset")
    }
    hide() {
        this.input.hide()
        this.button.hide()
        this.welcome.hide()
    }
    display() {
        this.input.position(200, 250)
        this.button.position(200, 200)
        this.resetButton.position(20, 50)

        this.button.mousePressed(() => {
            playerCount++
            player.updateCount(playerCount)
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            player.index = playerCount
            if (player.index === 1) {
                player.x = 200
                player.y = 500
            }
            if (player.index === 2) {
                player.x = 400
                player.y = 500
            }
            player.updatePlayer()

            this.welcome.html("welcome " + player.name)
            this.welcome.position(30, 750)
        })
        this.resetButton.mousePressed(() => {
            db.ref("/").set({
                gameState: 0,
                playerCount: 0
            })
        })
    }
}