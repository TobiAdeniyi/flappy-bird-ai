// Fix initial pipe speed
var panSpeed = 5;
// Fix gravitational speed
var gravity = .5;
// Create a player variable
var player;
// Create a pipe variable
var pipes;
var pipes2;
var randomPipeHeights = [];

pauseBecauseDead = false;


// Initiate and setup variables
function setup() {
    window.canvas = createCanvas(600, 800);
    player = new Player();
    //player = new Player(canvas.width / 3, canvas.height/2);
    //pipe =  new Pipe(true);
}


// Display object properties in game
function draw() {
    background(135, 206, 250);
    //pipes.update();
    //pipes.show();
    player.update();
    player.show();
} 


// Create function to make player flap
// Implement flap on spacebar keystroke
function keyPressed() {
    switch (key) {
        case ' ':
            //console.log("Jump");
            player.flap();
            break;
    }
}