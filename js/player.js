let gamePlayers = {};

let playerSprites = {};

let playerSpeed = 4;

let updatePos = false;

let jump = 12;

let velocityY = 0;

let grav = 0.6;

let onGround = false;

function startPlayers() {

    database.ref("matchmakeroom/players").on("value", function(data) {

        gamePlayers = data.val() || {};

        console.log("Players:", gamePlayers);

    });

}


function drawPlayers() {

    for (let id in gamePlayers) {

        let player = gamePlayers[id];


        if (!playerSprites[id]) {

            let sprite = createSprite(
                player.x,
                player.y,
                40,
                60
            );


            if (player.number === 1) {

                sprite.shapeColor = "blue";

            }

            else {

                sprite.shapeColor = "red";

            }


            playerSprites[id] = sprite;

        }


        playerSprites[id].position.x = player.x;

        playerSprites[id].position.y = player.y;

    }

    movePlayer();
    drawSprites();

}

function movePlayer(){
    if(!playerId || !gamePlayers[playerId]){
        let player = gamePlayers[playerId]
        let sprite = playerSprites[playerId]
        if(!sprite){
            return
        }
        let move = false
        if(keyIsDown(LEFT_ARROW)|| keyIsDown(65)){
            sprite.position.x-=playerSpeed;
            move = true
        } 
        if(keyIsDown(RIGHT_ARROW)|| keyIsDown(68)){
            sprite.position.x+=playerSpeed;
            move = true
        } 
        if(keyIsDown(LEFT_ARROW)|| keyIsDown(65)){
            sprite.position.x-=playerSpeed;
            move = true
        } 
        velocityY += grav;
        sprite.position.y+= velocityY;
        move = true

        if(keyIsDown(SPACE)|| keyIsDown(32)){
            velocityY = -jump
            move = true

        } 
    }
}