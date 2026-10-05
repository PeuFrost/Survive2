let gamePlayers = {};

let playerSprites = {};


function startPlayers(){
    database.ref("matchmakerooms/players").on("value",function(){
        gamePlayers = data.val() || {}
    })
}
function drawPlayers() {

for (let id in gamePlayers) {

    let player = gamePlayers[id];


    if (player.number === 1) {

        fill("blue");

    }

    else {

        fill("red");

    }


    rect(
        player.x - 20,
        player.y - 30,
        40,
        60
    );


    fill("white");

    textAlign(CENTER);

    textSize(14);

    text(
        player.name,
        player.x,
        player.y - 40
    );

}
}
// function drawPlayers(){
//     for(let id in gamePlayers){
//         let player = gamePlayers[id];
//         if(!playerSprites[id]){
//             let sprite = createSprite(
//                 player.x,
//                 player.y,
//                 40,40
//             )
//             if(player.number === 1){
//                 sprite.shapeColor = "blue"
//             }else{
//                 sprite.shapeColor = "red"
//             }
//             playerSprites[id] = sprite
//         }
//         playerSprites[id].x = player.x;
//         playerSprites[id].y = player.y;
//     } 
// }