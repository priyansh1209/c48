class Player {
    constructor() {
        this.name = ""
        this.index = null
        this.x = null
        this.y = null
        this.health = 100
    }
    getCount() {
        db.ref("playerCount").on("value", data => {
            playerCount = data.val()
        })
    }
    updateCount(count) {
        db.ref("/").update(
            { playerCount: count }
        )
    }


    // write a function that will update playes name and index in the database
    updatePlayer() {
        var playerIndex = "players/player" + this.index
        db.ref(playerIndex).update({
            name: this.name,
            index: this.index,
            x: this.x,
            y: this.y,
            health: this.health
        })
    }
    // a function that will get info about the other players
    static getPlayerInfo() {
        db.ref("players").on("value", data => {
            allPlayerInfo = data.val()
        })
    }
}