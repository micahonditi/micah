var letters = [] // empty array of letters/

var speed =  10;   // Speed the letters will go across the screen

//var max = 5 ;      /* Limit of the amount of letters which will displayed on the screen at one time */

var done = 20;      // Max number of loops the draw function will run

var count;

var score = 0;
function setup () {

    createCanvas(600,600);
   background (255, 153,51);
}


function draw () {
    
    stroke("blue");
    textAlign (CENTER);
    textSize(40);
    text("Type what you see: ", width/2, 75 );

    text("Score : " + score, width/2,height/2);

    if(letters.length < 20) {

        letters.push ( new characters() )
    }
}

for (var i = 0; i< letters.length; i++) {

    if (letters[i].across > width){
            score--;
    }
    else {
        letters[i].move();
    }
}

function characters() {
    this.across = 0 ;
    this.vert = random (100,300);
    //var full = ("absdefghijklmnopqrstuvwxyz")
    this.text = random("asdfghjkljtrewertyjbvcsawe".split(""));
    console.log(this.text);

    this.move = function () {
    this.across+= speed;
    text(this.text,this.across,this.vert);
}

}



function keyTyped() {

    while ( key != letters[i]) {
        i++;
        console.log("WRONG");
    }
}