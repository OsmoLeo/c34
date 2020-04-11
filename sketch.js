var myball,database,position;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    myball = createSprite(250,250,10,10); 
    myball.shapeColor = "red";
    var myballRef=database.ref('ball/position') 
    myballRef.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
    'x': position.x + x,
    'y': position.y + y    

    }) 
}
function readPosition(data){
    position=data.val()
    myball.x=position.x
    myball.y=position.y
}