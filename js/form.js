class Form {
    constructor(){
        this.button = createButton("submit")
        this.input = createInput("type name")
        this.welcome = createElement("h2")
    }
    display(){
        this.input.position(200,250)
        this.button.position(200,200)

        this.button.mousePressed(()=>{
            playerCount ++
            player.updateCount(playerCount)
            this.input.hide()
                this.button.hide()
            player.name = this.input.value()
            player.index = playerCount
            
            this.welcome.html("welcome "+ player.name)
            this.welcome.position(30,750)
        })
    }
}