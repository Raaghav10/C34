var ball;
var db, pos1;

function setup(){

    createCanvas(500,500);

 db= firebase.database();
 console.log(db);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var pos = db.ref('ball/position');
    pos.on("value", readPosition , showerror);
}

function draw(){
    background("white");
    if(pos1 !== undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}
function changePosition(x,y){
    db.ref('ball/position').set({
        x: pos1.x +x ,
        y : pos1.y +y
    })
    
}

function readPosition(data){
    pos1 = data.val();
    console.log(pos1);
    ball.x = pos1.x;
    ball.y = pos1.y;
}

function showerror(){
    console.log("error");
}
