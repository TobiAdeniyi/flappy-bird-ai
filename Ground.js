class Ground {

    // Construct ground object
    constructor() {
        this.height = 30;
        this.topPixelCoord = canvas.height - this.height;
        this.pixelOffset = 0;
    }
  
    // Display ground object
    show() {
        fill(0);
        rect(0, this.topPixelCoord, canvas.width, this.height);
    }
  
    // Update possition of ground
    update() {
        this.pixelOffset -= panSpeed;
    }
    
    // Return true if player collieds
    collided(p) {
        return p.y + p.size / 2 >= this.topPixelCoord;
    }

}
  