let inputName;
let enterButton;
let backImg;

function preload(){

}

function setup(){
    createCanvas(1250,560);
    connectFirebase();
    //INPUT
    inputName = createInput("")
    inputName.attribute("placeholder","Place username");
    inputName.size(220,35);
    inputName.style("padding","8px 12px");
    inputName.style("background-color","aliceblue");
    inputName.style("border","none");
    inputName.style("border-radius","8px");
    //BUTTON
    enterButton = createButton("ENTER");
    enterButton.size(120,40);
    enterButton.style("cursor","pointer");
    enterButton.style("font-size"," 16px");
    enterButton.style("background-color","white");
    enterButton.style("border-radius","8px");
    enterButton.mousePressed(gameStart);

}
function draw(){
    background('#F2F0EF');
    if(stateGame === "login"){
        screenLogin()
    }
    else if(stateGame === "waiting"){
        screenWaiting()
    }
    else if(stateGame === "playing"){
        screenGame()
    }
}
function screenLogin(){
    fill("red");
    textAlign(CENTER);
    textSize(50);
    text("Survive",550,50);
    inputName.show()
    inputName.position(550,280);
    enterButton.show();
    enterButton.position(570,360);
    
}
function screenWaiting(){
    inputName.hide();
    enterButton.hide();
    background("black");
    fill("yellow");
    textAlign(CENTER);
    textSize(28);
    text("Waiting player",width/2,200)
    textSize(28);
    text("Waiting other player entering in match",width/2,250)
}
function gameStart(){
    let name = inputName.value().trim();
    if(name === ""){
        alert("PLEASE PLACE YOUR USERNAME!");
        return
    }
    enterButton.attribute("desabled","");
    matchmaking (name)
}