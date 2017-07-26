function setup(){
    createCanvas(600,500);
}

var x = 50;
var y = 50;
var yDirection = 6;
var xDirection = 20;\
function draw(){
    background(100);
    ellipse(x,y,80,80);
    //Y DIRECTION
    if(y>=500-40){
        yDirection = -yDirection;
    }else if(y<=0+40){
        yDirection = -yDirection;
    }
    y+=yDirection;

    //X DIRECTION
    if(x>=600-40){
        xDirection = -xDirection;
    }else if(x<=0+40){
        xDirection = -xDirection;
    }
    x+=xDirection;
}