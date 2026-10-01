let lmtPlayers = 2;
let playerId;
let entering = false;

function matchmaking(username){
    if(entering || playerId !== undefined){
        return 
    }
    entering = true; 
    database.ref("matchmakeroom/players").once("value",function(data){
        let players = data.val()
        let qtd = 0;
        if (players !== null){
            qtd = Object.keys(players).length;
        }
        if (qtd >= lmtPlayers){
            entering = false 
            alert("packed room");
            return
        }
        playerId = database.ref("matchmakeroom/players").push().key;
        let playerNumber = qtd+1
        database.ref("matchmakeroom/players/"+playerId).set({
            name:username 
        })
        
      stateGame = "waiting"
      watchPlayers()
    })
} 

function watchPlayers(){
    database.ref("matchmakeroom/players").on("value",function(data){
        let players = data.val()
        let qtd = 0
        if (players !== null){
            qtd = Object.keys(players).length;
        }
        if(qtd === lmtPlayers){
            stateGame = "playing"
        }
    })
}