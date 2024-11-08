let player;
let gravity = 0.5;  // Gravity force
let jumpStrength = -5;  // How strong the jump is
let isJumping = false;  // Whether the player is in the air
let floorPos_y;  

let isRight = false;
let isLeft = false;

//whether the level is won
let gameWon = false;

//Levels (1-3)
let gameLevel = 3;

let fWidth = 50;  // Width of each frame
let fHeight = 50; // Height of each frame

//Fat gauge bar 
let maxFG = 100;
let currentFG = 0;

function setup() {
    createCanvas(1024, 700);
    floorPos_y = (height * 3) / 4;  // Set ground height (bottom of the screen)
  
    // Initialize the player object
    player = new Player(width / 2, floorPos_y);
    
}

function draw() {
    drawSky();
    
    drawStars();

    drawGround();

    moon = 
    {
    x: 150,
    y: 120,
    size: 40
    };
    drawMoon();

    drawClouds();

    //outline for fat gauge bar
    fill(100, 91, 71);
    rect(33,23, 255,30)

    //empty fat gauge bar
    fill(238, 224, 203);  // Gray color for the background
    rect(30, 20, 250, 25);

    //draw the filled fat gauge bar
    let fgRatio = currentFG / maxFG;
    let fillWidth = fgRatio * 250;

    fill(219,80, 74);
    rect(30, 20, fillWidth, 25);


    //test
    //if (currentFG < maxFG) {
     //   currentFG += 0.1; // Gain XP gradually
    //}

    // Apply gravity and check for jumping
    if (player.y < floorPos_y) {
        player.velocity += gravity;  // Apply gravity if not on the ground
    } else {
        player.velocity = 0;  // Stop the player if they hit the ground
        player.y = floorPos_y;  // Keep player on the ground
        isJumping = false;  // The player is on the ground, not jumping anymore
    }

    // Move the fat player with keyboard input
    if (keyIsDown(LEFT_ARROW)) {
        if (gameLevel == 1){
            player.x -= 1.5;
        }
        if (gameLevel == 2){
            player.x -= 2;
        }
        if (gameLevel == 3){
            player.x -= 3;
        }
        
        isLeft = true;
        if (currentFG < maxFG && isLeft == true){
            currentFG += 0.1
        }
    }
    else{
        isLeft = false;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        if (gameLevel == 1){
            player.x += 1.5;
        }
        if (gameLevel == 2){
            player.x += 2;
        }
        if (gameLevel == 3){
            player.x += 3;
        }
        isRight = true;
        if (currentFG < maxFG && isRight == true){
            currentFG += 0.1
        }
    }
    else{
        isRight = false;
    }

    // Jumping: If the spacebar is pressed and the player is on the ground
    if (keyIsDown(32) && !isJumping) {  // Spacebar key code is 32
        player.velocity = jumpStrength;
        isJumping = true;
    }

    // Update and display the player
    player.update();
    player.show();

    if (gameWon){
        if (gameLevel < 3){
            nxtLevelScreen();
        }

        else{
            endGameScreen();
        }
    }
    else {
        playGame();
    }
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = fWidth;
    this.height = fHeight;
    this.velocity = 0;  // Vertical velocity
  }

  // Update player position
  update() {
    this.y += this.velocity;

    this.x = constrain(this.x, 0, width - this.width);

    this.y = constrain(this.y, 0, height - this.height);
    }

  // Show player as a circle
  show() {
    if (gameLevel == 1){
        if (isJumping == true){
            drawCharacterJump(this.x, this.y);
        }
    
        else if (isRight == true){
            drawCharacterRight(this.x, this.y);
        }
    
        else if (isLeft == true){
            drawCharacterLeft(this.x, this.y);
        }
    
        else{
            drawCharacterForward(this.x, this.y);
        }
    }
    
    if (gameLevel == 2){
        jumpStrength = -7.5;
        if (isJumping == true){
            drawLevelTwoJump(this.x, this.y);
        }
    
        else if (isRight == true){
            drawLevelTwoRight(this.x, this.y);
        }
    
        else if (isLeft == true){
            drawLevelTwoLeft(this.x, this.y);
        }
    
        else{
            drawLevelTwoForward(this.x, this.y);
        }
    }

    if (gameLevel == 3){
        jumpStrength = -10;
        if (isJumping == true){
            drawLevelThreeJump(this.x, this.y);
        }
    
        else if (isRight == true){
            drawLevelThreeRight(this.x, this.y);
        }
    
        else if (isLeft == true){
            drawLevelThreeLeft(this.x, this.y);
        }
    
        else{
            drawLevelThreeForward(this.x, this.y);
        }
    }
  }
}