class Player{
    constructor(){
        this.name = ""
        this.index = null
    }
    getCount(){
        db.ref("playerCount").on("value",data=>{
            playerCount = data.val()
        })
    }
    updateCount(count){
        db.ref("/").update(
            {playerCount:count}
        )
    }
    // write a function that will update playes name andindexin the database
    // a function that will get info about the other players
}