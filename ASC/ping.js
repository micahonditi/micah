var xpos = 255;
var ypos = 25;
var xspeed = 2; // Starting Speed x- axis
var yspeed = 2; // Starting speed y- axis
var xposhand;   //starting position of paddle

function setup() {
  createCanvas(500, 500);
  noStroke();
  fill(random(255), random(255), random(255));
  rectMode(CENTER); //places the ball in the center when the game begins
}



function draw() {
 background(150,20,20);
  ellipse(xpos, ypos, 50, 50); //ball

  //making sure handle does not leave canvas area

  if (mouseX >= 40 && mouseX <= width - 40) {
    xposhand = mouseX;
  } else if (mouseX < 40) {
    xposhand = 40;
  } else if (mouseX > width - 40) {
    xposhand = width - 40;
  }
  rect(xposhand, height -5, 80, 5);

  //Making the ball move
  xpos += xspeed;
  ypos += yspeed;

  //Making the ball bounce out of left,top and right edges
  if (xpos <= 25 || xpos >= width - 25) {
    if (xspeed < 10 && xspeed > -10) { //controlling the speed
      xspeed = xspeed * (-1.2);
    } else {
      xspeed = xspeed * (-1.01);
    }
  }
  if (ypos <= 25) {
    if (yspeed < 10 && yspeed > -10) {
      yspeed = yspeed * (-1.2);
    } else {
      yspeed = yspeed * (-1.01);
    }
  }
  //Making the ball bounce out of bottom handle
  if (ypos >= height - 25) {
    if (xpos <= xposhand + 65 && xpos >= xposhand - 65) {
      if (yspeed < 10 && yspeed > -10) {
        yspeed = yspeed * (-1.2);
      } else {
        yspeed = yspeed * (-1.01);
      }
    } else {
      textAlign(CENTER);
      textFont("Open Sans");
      textStyle(BOLD);
      text("GAME OVER", width / 2, height / 2);
      noLoop();
    }
  }
}

//Change the colors on a mouse press event
function mousePressed() {
  fill(random(255), random(255), random(255));
}




