let images = [];         // Array to hold image files
let drops = [];          // Array to hold falling images
let numDrops = 5;        // Number of drops to spawn at once

function preload() {
  // Load images (replace with your own image files)
  images.push(loadImage('chips.png'));
  images.push(loadImage('beer.png'));
  images.push(loadImage('burger.png'));
}

class ImageDrop {
  constructor(x, y, img) {
    this.x = x;           // X position of the image
    this.y = y;           // Y position of the image
    this.img = img;       // The image to be dropped
    this.speed = random(2, 5);  // Falling speed of the image
    this.width = this.img.width / 8;  // Size of the image (scaled down)
    this.height = this.img.height / 8; // Scale the image size
  }

  update() {
    this.y += this.speed;  // Make the image fall

    // If the image reaches the bottom of the canvas, reset it to the top
    if (this.y > height) {
      this.y = -this.height; // Reset position to above the screen
      this.x = random(0, width);  // Randomize X position
      this.img = random(images);  // Randomly pick a new image
    }
  }

  show() {
    image(this.img, this.x, this.y, this.width, this.height); // Draw the image
  }
}

function setup() {
  createCanvas(400, 400);

  // Create multiple random image drops
  for (let i = 0; i < numDrops; i++) {
    let randomX = random(0, width);
    let randomY = random(-500, -50); // Start off-screen to simulate dropping
    let randomImg = random(images);  // Randomly select an image

    drops.push(new ImageDrop(randomX, randomY, randomImg));  // Push new drop
  }
}

function draw() {
  background(220);

  // Update and show each image drop
  for (let i = 0; i < drops.length; i++) {
    drops[i].update();
    drops[i].show();
  }
}
