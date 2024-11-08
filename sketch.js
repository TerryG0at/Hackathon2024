let player;
let platforms = [];
let gravity = 0.8;
let jumpStrength = -1;

function setup() {
  createCanvas(800, 400);

  // Create a player object
  player = new Player(width / 2, height - 50);

  // Create some platforms
  platforms.push(new Platform(0, height - 20, width, 20));  // Ground
  platforms.push(new Platform(150, 300, 200, 20));           // Platform 1
  platforms.push(new Platform(400, 250, 200, 20));           // Platform 2
  platforms.push(new Platform(650, 200, 200, 20));           // Platform 3
}

function draw() {
  background(220);

  // Apply gravity to the player
  player.applyGravity();

  // Move the player
  player.update();
  player.display();

  // Display platforms
  for (let plat of platforms) {
    plat.display();
    // Check for collisions with platforms
    player.checkCollision(plat);
  }
}

// Player class
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.isJumping = false;
  }

  update() {
    // Horizontal movement (left and right)
    if (keyIsDown(LEFT_ARROW)) {
      this.xSpeed = -5;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.xSpeed = 5;
    } else {
      this.xSpeed = 0;
    }

    // Move the player based on speed
    this.x += this.xSpeed;

    // Prevent the player from going off screen horizontally
    this.x = constrain(this.x, 0, width - this.width);

    // Apply gravity and vertical movement
    this.y += this.ySpeed;
    if (this.y + this.height > height) {
      this.y = height - this.height;
      this.ySpeed = 0;
      this.isJumping = false;
    }
  }

  applyGravity() {
    if (!this.isJumping) {
      this.ySpeed += gravity;
    }
  }

  jump() {
    if (!this.isJumping) {
      this.ySpeed = jumpStrength;
      this.isJumping = true;
    }
  }

  checkCollision(platform) {
    if (this.x + this.width > platform.x && this.x < platform.x + platform.width &&
        this.y + this.height <= platform.y && this.y + this.height + this.ySpeed >= platform.y) {
      // Colliding with platform
      this.ySpeed = 0;
      this.isJumping = false;
      this.y = platform.y - this.height;  // Reset to just above the platform
    }
  }

  display() {
    fill(0, 255, 0);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }
}

// Platform class
class Platform {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    fill(0, 0, 255);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }
}

// Key press handling for jumping
function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.jump();
  }
}
