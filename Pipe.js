// Construct a pipe class
class Pipe {

    // Construct the pipe objects
    constructor(isTop, height) {
        this.width = 70;
        this.height = height;
        this.x = canvas.width;
        this.isTop = isTop;
        if (this.isTop) {
            this.topY = 0;
            this.bottomY = this.height;
        } else {
            this.topY = canvas.height - this.height;
            this.bottomY = canvas.heaight;
        }
    }

    // Display the pipe objects
    show() {
        fill(0, 204, 0);
        rect(this.x, this.topY, 
            this.width, this.height);
    }

    // Move frome right of screen to left
    update(pause) {
        if (!pause) {
            this.x -= panSpeed;
        } else {
            this.x =  this.x;
        }
    }

    // Collission detection pipe and player
    collided(p) {
        if (p.x + p.size / 2 >= this.x && p.x - p.size / 2 <= this.x + this.width) {
            if (!this.isTop && p.y + p.size / 2 >= this.topY) {
                return true;
            } 
            if (this.isTop && p.y - p.size / 2 <= this.bottomY) {
                return true;
            } 
        }
        return false;
    }
    
}