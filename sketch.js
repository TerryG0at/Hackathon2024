let player;
let gravity = 0.5;  // Gravity force
let jumpStrength = -5;  // How strong the jump is
let isJumping = false;  // Whether the player is in the air
let floorPos_y;

//unlock Characters
let loopwon = 0;
let char = "white"

//level 3 raindrops
var raindrops = [];
var raindropCount = 100;

//whether which is left or right
let isRight = false;
let isLeft = false;

//whether the level is won
let gameWon = false;

//Levels (1-3) 0 is character select
let gameLevel = 1;

let fWidth = 50;  // Width of each frame
let fHeight = 50; // Height of each frame

//Fat gauge bar 
let maxFG = 100;
let currentFG = 0;

function preload() {
    terryImage = loadImage("media/Terry.png");
    lesterImage = loadImage("media/Lester.png");
}

function setup() {
    createCanvas(1024, 700);
    floorPos_y = (height * 3) / 4;  // Set ground height (bottom of the screen)
  
    // Initialize the player object
    player = new Player(width / 2, floorPos_y);

    //rain drop
    for (let i = 0; i < raindropCount; i++) {
        raindrops.push({
          x: random(width),        // Random x position
          y: random(-height, 0),   // Random y position above the screen
          speed: random(4, 10),    // Random falling speed for each raindrop
          length: random(10, 20)   // Random length for each raindrop
        });
      }
}

function draw() {
    //if loop for background
    if (gameLevel == 0){
        mScreen();
    }

    else if (gameLevel == 1){
        drawSky(1);
        drawGround(1);
        drawStars();

        moon = {x: 150,y: 120,size: 40};
        drawMoon();

        drawClouds();

        // Fat Gauge Text
        fill(255);
        textSize(16);
        textAlign(CENTER, CENTER);
        text('Fat %', 51, 20);


        //outline for fat gauge bar
        fill(100, 91, 71);
        rect(33,33, 255,40)

        //empty fat gauge bar
        fill(238, 224, 203);  // Gray color for the background
        rect(30, 30, 250, 35);

        //draw the filled fat gauge bar
        let fgRatio = currentFG / maxFG;
        let fillWidth = fgRatio * 250;

        fill(219,80, 74);
        rect(30, 30, fillWidth, 35);
    }
    else if (gameLevel == 2){
        drawSky(2);
        drawGround(2);

        drawSnows();
        // Fat Gauge Text
        fill(255);
        textSize(16);
        textAlign(CENTER, CENTER);
        text('Fat %', 51, 20);


        //outline for fat gauge bar
        fill(100, 91, 71);
        rect(33,33, 255,40)

        //empty fat gauge bar
        fill(238, 224, 203);  // Gray color for the background
        rect(30, 30, 250, 35);

        //draw the filled fat gauge bar
        let fgRatio = currentFG / maxFG;
        let fillWidth = fgRatio * 250;

        fill(219,80, 74);
        rect(30, 30, fillWidth, 35);
    }

    else{
        drawSky(3);
        drawGround(3);

        drawRain();

        for (let i = 0; i < raindropCount; i++) {
            raindrops.push({
              x: random(width),        // Random x position
              y: random(-height, 0),   // Random y position above the screen
              speed: random(4, 10),    // Random falling speed for each raindrop
              length: random(10, 20)   // Random length for each raindrop
            });

        // Fat Gauge Text
        fill(255);
        textSize(16);
        textAlign(CENTER, CENTER);
        text('Fat %', 51, 20);

        
        //outline for fat gauge bar
        fill(100, 91, 71);
        rect(33,33, 255,40)

        //empty fat gauge bar
        fill(238, 224, 203);  // Gray color for the background
        rect(30, 30, 250, 35);

        //draw the filled fat gauge bar
        let fgRatio = currentFG / maxFG;
        let fillWidth = fgRatio * 250;

        fill(219,80, 74);
        rect(30, 30, fillWidth, 35);
        }
    }

    // Apply gravity and check for jumping
    if (player.y < floorPos_y) {
        player.velocity += gravity;  // Apply gravity if not on the ground
    } 
    else {
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

    show() {
        if (gameLevel == 1){
            if (isJumping == true){
                if (char == 'white'){
                    drawCharacterJump(this.x, this.y);
                }
                if (char == 'black'){
                    drawDarkJump(this.x, this.y);
                }
            }
        
            else if (isRight == true){
                if (char == 'white'){
                    drawCharacterRight(this.x, this.y);
                }
                if (char == 'black'){
                    drawDarkRight(this.x, this.y);
                }
            }
        
            else if (isLeft == true){
                if (char == 'white'){
                    drawCharacterLeft(this.x, this.y);
                }
                if (char == 'black'){
                    drawDarkLeft(this.x, this.y);
                }
            }
        
            else{
                if (char == 'white'){
                    drawCharacterForward(this.x, this.y);
                }
                if (char == 'black'){
                    drawDarkForward(this.x, this.y);
                }
            }
        }
        
        if (gameLevel == 2){
            jumpStrength = -7.5;
            if (isJumping == true){
                if (char == 'white'){
                    drawLevelTwoJump(this.x, this.y);
                }
                if (char == 'black'){
                    drawLevelTwoDarkJump(this.x, this.y);
                }
            }
        
            else if (isRight == true){
                if (char == 'white'){
                    drawLevelTwoRight(this.x, this.y);
                }
                if (char == 'black'){
                    drawLevelTwoDarkRight(this.x, this.y);
                }
            }
        
            else if (isLeft == true){
                if (char == 'white'){
                    drawLevelTwoLeft(this.x, this.y);
                }
                if (char == 'black'){
                    drawLevelTwoDarkLeft(this.x, this.y);
                }
            }
        
            else{
                if (char == 'white'){
                    drawLevelTwoForward(this.x, this.y);
                }
                if (char == 'black'){
                    drawLevelTwoDarkForward(this.x, this.y);
                }
            }
        }

        if (gameLevel == 3){
            jumpStrength = -10;
            if (isJumping == true){
                if (char == 'white'){
                    drawLevelThreeJump(this.x, this.y);
                }
                if (char == 'black'){
                    drawLevelThreeDarkJump(this.x, this.y);
                }
            }
        
            else if (isRight == true){
                if (char == 'white'){
                    drawLevelThreeRight(this.x, this.y);
                }
                if (char == 'black'){
                    drawLevelThreeDarkRight(this.x, this.y);
                }
            }
        
            else if (isLeft == true){
                if (char == 'white'){
                    drawLevelThreeLeft(this.x, this.y);
                }
                if (char == 'black'){
                    drawLevelThreeDarkLeft(this.x, this.y);
                }
            }
        
            else{
                if (char == 'white'){
                    drawLevelThreeForward(this.x, this.y);
                }
                if (char == 'black'){
                    drawLevelThreeDarkForward(this.x, this.y);
                }
            }
        }
    }
}