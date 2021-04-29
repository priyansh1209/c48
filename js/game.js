class Game{
    constructor(){

    }
    getState(){
        db.ref("gameState").on("value",data=>{
            gameState = data.val()
        })
    }
    updateState(state){
        db.ref("/").update(
            {gameState:state}
        )
    }
    async start(){
        if(gameState === 0){
            player = new Player()
             var playerCountRef = await db.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount() 
            }
            form = new Form()
            form.display()
        }
    }
}