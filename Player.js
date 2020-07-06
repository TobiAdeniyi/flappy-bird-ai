// Construct a player class
class Player {

    // Construct the player object
    constructor() {
        // player info
        this.x = canvas.width / 3;
        this.y = canvas.height / 2;
        this.velY = 0;
        this.velX = panSpeed;
        this.size = 30;

        // Pipe info
        this.pipeRandomNo = 0;
        this.pipes1 = new PipePair(true);
        this.pipes2 = new PipePair(false, this.pipes1, this.pipeRandomNo);
        this.pipes2.setX(1.5 * canvas.width + this.pipes2.topPipe.width / 2);
        this.pipeRandomNo++;

        // grpund infor
        this.ground = new Ground();
    }


    // Display the player object
    show() {
        this.pipes1.show();
        this.pipes2.show();
        push();

        //noStroker()
        fill(225, 225, 0);
        ellipse(this.x, this.y, this.size);

        this.ground.show();
    }

    
    // Update player information
    move() {
        this.velY += gravity;

        // Check if player is dead
        if (!this.dead) {
            this.velY = constrain(this.velY, -100, 25);
        } else {
            this.velY = constrain(this.velY, -100, 40);
            this.x += this.velX;
        }

        // apply gravity
        this.y += this.velY;
    }

    // Update pipe pair location
    updatePipes(pause) {
        this.pipes1.update(pause);
        this.pipes2.update(pause);
        this.ground.update();

        // if either pipe is off the screen then reset the pipe
        if (this.pipes1.offScreen()) {
            this.pipes1 = new PipePair(false, this.pipes2, this.pipeRandomNo);
            this.pipeRandomNo++;
        }
        if (this.pipes2.offScreen()) {
            this.pipes2 = new PipePair(false, this.pipes1, this.pipeRandomNo);
            this.pipeRandomNo++;
        }
    }


    // Update playey location/mechanics
    update() {
        this.updatePipes(pauseBecauseDead);
        this.move(pauseBecauseDead);
        if (!this.dead) {
            this.checkCollisions();
        }
    }


    // Check to see if player collided
    checkCollisions() {
        // with top pipe
        if (this.pipes1.collided(this)) {
          pauseBecauseDead = true;
          this.dead = true;
          this.flap();

        }

        // with bottom pipe
        if (this.pipes2.collided(this)) {
          pauseBecauseDead = true;
          this.dead = true;
          this.flap();
        }

        // with ground
        if (this.ground.collided(this)) {
            pauseBecauseDead = true;
            this.dead = true;
            this.flap();
        }
    }
 

    // Flap or Jump
    flap() {
        this.velY = -20 * gravity;
    }

}