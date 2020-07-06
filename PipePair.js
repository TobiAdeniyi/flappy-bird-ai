class PipePair {

    // Construct pipe pair object
    constructor(firstPipe, previousPipe, upToRandNo) {
        // Min distance of top pipe from floor
        var minDistFromEdge = 50;
        // Gap between pipe pairs
        this.gap = 160;
        this.maxPipeDifference = 300;
        this.passed = false;

        // Pandomise pipe hights
        if (firstPipe) {
            this.topHeight = (canvas.height - 30) / 2 - this.gap / 2;
        } else {
            if (randomPipeHeights.length >= upToRandNo) {
                randomPipeHeights.push(floor(random(minDistFromEdge, canvas.height - minDistFromEdge - 30 - this.gap)));
            }
            this.topHeight = randomPipeHeights[upToRandNo]; //floor(random(minDistFromEdge, canvas.height - minDistFromEdge - 30 - this.gap));
            if (previousPipe) {
                while (abs(this.topHeight - previousPipe.topHeight) > this.maxPipeDifference) {
                    randomPipeHeights[upToRandNo] = floor(random(minDistFromEdge, canvas.height - minDistFromEdge - 30 - this.gap));
                    this.topHeight = randomPipeHeights[upToRandNo];
                }
            }
        }

        // Set pipe geometry
        this.bottomHeight = canvas.height - this.topHeight - this.gap;
        this.bottomPipe = new Pipe(false, this.bottomHeight);
        this.topPipe = new Pipe(true, this.topHeight);
    }


    // Display both pipes
    show() {
        this.topPipe.show();
        this.bottomPipe.show();
    }


    // Update pipes possition
    update(pause) {
        this.topPipe.update(pause);
        this.bottomPipe.update(pause);
    }


    // Ensure pipe is on screen
    offScreen() {
        if (this.bottomPipe.x + this.bottomPipe.width < 0) {
            return true;
        }
        return false;
    }


    // Cheack if player has passed pipe 
    playerPassed(playerX) {
        if (!this.passed && playerX > this.bottomPipe.x + this.bottomPipe.width) {
            this.passed = true;
            return true;
        }
        return false;
    }

    
    // Check if player collided with pipe
    collided(p) {
        return this.bottomPipe.collided(p) || this.topPipe.collided(p);
    }
  
    
    // Update pipe location
    setX(newX) {
        this.bottomPipe.x = newX;
        this.topPipe.x = newX;
    }

}