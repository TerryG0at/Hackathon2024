var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft = false;
var isRight = false;
var isFalling = false;
var isPlummeting = false;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
}

function draw() {
  background(100, 155, 255); //fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

  //draw the canyon

  //the game character
  if (isLeft && isFalling) {
    // add your jumping-left code
    drawCharacterJumpLeft();
    gameChar_y += 5;
  } else if (isRight && isFalling) {
    // add your jumping-right code
    drawCharacterJumpRight();
    gameChar_y += 5;
  } else if (isLeft) {
    // add your walking left code
    drawCharacterLeft();
  } else if (isRight) {
    // add your walking right code
    drawCharacterRight();
  } else if (isFalling || isPlummeting) {
    // add your jumping facing forwards code
    drawCharacterJump();
    gameChar_y += 5;
  } else {
    // add your standing front facing code
    drawCharacterForward();
  }

  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here
  if (isLeft == true) {
    gameChar_x -= 5;
  }

  if (isRight == true) {
    gameChar_x += 5;
  }

  if (gameChar_y < floorPos_y) {
    isFalling = true;
  } else {
    isFalling = false;
  }
}

function drawCharacterForward() {
  //draw the game character

  //head

  fill(48, 138, 34);
  ellipse(gameChar_x, gameChar_y - 29, 37, 37);

  fill(36, 236, 80);
  ellipse(gameChar_x, gameChar_y - 30, 35, 35);

  //eyes

  fill(255, 255, 255);
  ellipse(gameChar_x, gameChar_y - 35, 23, 23);

  fill(48, 138, 34);
  ellipse(gameChar_x, gameChar_y - 35, 16, 16);

  fill(0);
  ellipse(gameChar_x, gameChar_y - 35, 13, 13);

  //mouth

  strokeWeight(1);
  stroke(48, 138, 34);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 21);
  curveVertex(gameChar_x - 6, gameChar_y - 21);
  curveVertex(gameChar_x - 2, gameChar_y - 20);
  curveVertex(gameChar_x + 5, gameChar_y - 21);
  curveVertex(gameChar_x + 5, gameChar_y - 21);
  endShape();

  //ears

  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  triangle(
    gameChar_x - 17,
    gameChar_y - 45,
    gameChar_x - 13,
    gameChar_y - 42,
    gameChar_x - 15,
    gameChar_y - 40
  );

  triangle(
    gameChar_x + 17,
    gameChar_y - 45,
    gameChar_x + 13,
    gameChar_y - 42,
    gameChar_x + 15,
    gameChar_y - 40
  );

  //legs

  strokeWeight(4);
  stroke(38, 236, 80);
  line(gameChar_x - 8, gameChar_y - 15, gameChar_x - 10, gameChar_y);
  ellipse(gameChar_x - 10, gameChar_y, 3, 1);

  line(gameChar_x + 8, gameChar_y - 15, gameChar_x + 10, gameChar_y);
  ellipse(gameChar_x + 10, gameChar_y, 3, 1);

  //hands

  strokeWeight(3);
  line(gameChar_x - 16, gameChar_y - 24, gameChar_x - 25, gameChar_y - 18);

  line(gameChar_x + 16, gameChar_y - 24, gameChar_x + 25, gameChar_y - 18);

  //anchor point
  noStroke();
  fill(255, 0, 0);
  ellipse(gameChar_x, gameChar_y, 5, 5);
}

function drawCharacterLeft() {
  //head

  fill(48, 138, 34);
  ellipse(gameChar_x, gameChar_y - 29, 37, 37);

  fill(36, 236, 80);
  ellipse(gameChar_x, gameChar_y - 30, 35, 35);

  //eyes

  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 35, 23, 23);

  fill(48, 138, 34);
  ellipse(gameChar_x - 7, gameChar_y - 35, 16, 16);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 35, 13, 13);

  //mouth

  strokeWeight(1);
  stroke(48, 138, 34);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 21);
  curveVertex(gameChar_x - 6, gameChar_y - 21);
  curveVertex(gameChar_x - 2, gameChar_y - 20);
  curveVertex(gameChar_x + 5, gameChar_y - 21);
  curveVertex(gameChar_x + 5, gameChar_y - 21);
  endShape();

  //ears

  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  triangle(
    gameChar_x - 17,
    gameChar_y - 45,
    gameChar_x - 13,
    gameChar_y - 42,
    gameChar_x - 15,
    gameChar_y - 40
  );

  triangle(
    gameChar_x + 17,
    gameChar_y - 45,
    gameChar_x + 13,
    gameChar_y - 42,
    gameChar_x + 15,
    gameChar_y - 40
  );

  //legs

  strokeWeight(4);
  stroke(38, 236, 80);
  line(gameChar_x - 2, gameChar_y - 15, gameChar_x - 10, gameChar_y);
  ellipse(gameChar_x - 10, gameChar_y, 3, 1);

  line(gameChar_x + 2, gameChar_y - 15, gameChar_x + 10, gameChar_y);
  ellipse(gameChar_x + 10, gameChar_y, 3, 1);

  //hands

  strokeWeight(3);
  line(gameChar_x - 16, gameChar_y - 24, gameChar_x - 25, gameChar_y - 18);

  line(gameChar_x + 16, gameChar_y - 24, gameChar_x + 20, gameChar_y - 15);

  //anchor point
  noStroke();
  fill(255, 0, 0);
  ellipse(gameChar_x, gameChar_y, 5, 5);
}

function drawCharacterRight() {
  fill(48, 138, 34);
  ellipse(gameChar_x, gameChar_y - 29, 37, 37);

  fill(36, 236, 80);
  ellipse(gameChar_x, gameChar_y - 30, 35, 35);

  //eyes

  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 35, 23, 23);

  fill(48, 138, 34);
  ellipse(gameChar_x + 7, gameChar_y - 35, 16, 16);

  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 35, 13, 13);

  //mouth

  strokeWeight(1);
  stroke(48, 138, 34);
  noFill();
  beginShape();
  curveVertex(gameChar_x + 6, gameChar_y - 21);
  curveVertex(gameChar_x + 6, gameChar_y - 21);
  curveVertex(gameChar_x + 2, gameChar_y - 20);
  curveVertex(gameChar_x - 5, gameChar_y - 21);
  curveVertex(gameChar_x - 5, gameChar_y - 21);
  endShape();

  //ears

  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  triangle(
    gameChar_x - 17,
    gameChar_y - 45,
    gameChar_x - 13,
    gameChar_y - 42,
    gameChar_x - 15,
    gameChar_y - 40
  );

  triangle(
    gameChar_x + 17,
    gameChar_y - 45,
    gameChar_x + 13,
    gameChar_y - 42,
    gameChar_x + 15,
    gameChar_y - 40
  );

  //legs

  strokeWeight(4);
  stroke(38, 236, 80);
  line(gameChar_x - 2, gameChar_y - 15, gameChar_x - 10, gameChar_y);
  ellipse(gameChar_x - 10, gameChar_y, 3, 1);

  line(gameChar_x + 2, gameChar_y - 15, gameChar_x + 10, gameChar_y);
  ellipse(gameChar_x + 10, gameChar_y, 3, 1);

  //hands

  strokeWeight(3);
  line(gameChar_x - 16, gameChar_y - 24, gameChar_x - 20, gameChar_y - 15);

  line(gameChar_x + 16, gameChar_y - 24, gameChar_x + 25, gameChar_y - 18);

  //anchor point
  noStroke();
  fill(255, 0, 0);
  ellipse(gameChar_x, gameChar_y, 5, 5);
}

function drawCharacterJumpLeft() {
  //head

  fill(48, 138, 34);
  ellipse(gameChar_x, gameChar_y - 29, 37, 37);

  fill(36, 236, 80);
  ellipse(gameChar_x, gameChar_y - 30, 35, 35);

  //eyes

  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 35, 23, 23);

  fill(48, 138, 34);
  ellipse(gameChar_x - 7, gameChar_y - 35, 16, 16);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 35, 13, 13);

  //mouth

  strokeWeight(1);
  stroke(48, 138, 34);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 21);
  curveVertex(gameChar_x - 6, gameChar_y - 21);
  curveVertex(gameChar_x - 2, gameChar_y - 20);
  curveVertex(gameChar_x + 5, gameChar_y - 21);
  curveVertex(gameChar_x + 5, gameChar_y - 21);
  endShape();

  //ears

  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  triangle(
    gameChar_x - 17,
    gameChar_y - 45,
    gameChar_x - 13,
    gameChar_y - 42,
    gameChar_x - 15,
    gameChar_y - 40
  );

  triangle(
    gameChar_x + 17,
    gameChar_y - 45,
    gameChar_x + 13,
    gameChar_y - 42,
    gameChar_x + 15,
    gameChar_y - 40
  );

  //legs

  strokeWeight(4);
  stroke(38, 236, 80);
  line(gameChar_x - 2, gameChar_y - 15, gameChar_x - 16, gameChar_y);
  ellipse(gameChar_x - 16, gameChar_y, 3, 1);

  line(gameChar_x + 2, gameChar_y - 15, gameChar_x + 16, gameChar_y);
  ellipse(gameChar_x + 16, gameChar_y, 3, 1);

  //hands

  strokeWeight(3);
  line(gameChar_x - 16, gameChar_y - 24, gameChar_x - 25, gameChar_y - 36);

  line(gameChar_x + 16, gameChar_y - 24, gameChar_x + 20, gameChar_y - 30);

  //anchor point
  noStroke();
  fill(255, 0, 0);
  ellipse(gameChar_x, gameChar_y, 5, 5);
}

function drawCharacterJumpRight() {
  //head

  fill(48, 138, 34);
  ellipse(gameChar_x, gameChar_y - 29, 37, 37);

  fill(36, 236, 80);
  ellipse(gameChar_x, gameChar_y - 30, 35, 35);

  //eyes

  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 35, 23, 23);

  fill(48, 138, 34);
  ellipse(gameChar_x + 7, gameChar_y - 35, 16, 16);

  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 35, 13, 13);

  //mouth

  strokeWeight(1);
  stroke(48, 138, 34);
  noFill();
  beginShape();
  curveVertex(gameChar_x + 6, gameChar_y - 21);
  curveVertex(gameChar_x + 6, gameChar_y - 21);
  curveVertex(gameChar_x + 2, gameChar_y - 20);
  curveVertex(gameChar_x - 5, gameChar_y - 21);
  curveVertex(gameChar_x - 5, gameChar_y - 21);
  endShape();

  //ears

  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  triangle(
    gameChar_x - 17,
    gameChar_y - 45,
    gameChar_x - 13,
    gameChar_y - 42,
    gameChar_x - 15,
    gameChar_y - 40
  );

  triangle(
    gameChar_x + 17,
    gameChar_y - 45,
    gameChar_x + 13,
    gameChar_y - 42,
    gameChar_x + 15,
    gameChar_y - 40
  );

  //legs

  strokeWeight(4);
  stroke(38, 236, 80);
  line(gameChar_x - 2, gameChar_y - 15, gameChar_x - 16, gameChar_y);
  ellipse(gameChar_x - 16, gameChar_y, 3, 1);

  line(gameChar_x + 2, gameChar_y - 15, gameChar_x + 16, gameChar_y);
  ellipse(gameChar_x + 16, gameChar_y, 3, 1);

  //hands

  strokeWeight(3);
  line(gameChar_x - 16, gameChar_y - 24, gameChar_x - 20, gameChar_y - 30);

  line(gameChar_x + 16, gameChar_y - 24, gameChar_x + 25, gameChar_y - 36);

  //anchor point
  noStroke();
  fill(255, 0, 0);
  ellipse(gameChar_x, gameChar_y, 5, 5);
}

function drawCharacterJump() {
  //head

  fill(48, 138, 34);
  ellipse(gameChar_x, gameChar_y - 29, 37, 37);

  fill(36, 236, 80);
  ellipse(gameChar_x, gameChar_y - 30, 35, 35);

  //eyes

  fill(255, 255, 255);
  ellipse(gameChar_x, gameChar_y - 35, 23, 23);

  fill(48, 138, 34);
  ellipse(gameChar_x, gameChar_y - 35, 16, 16);

  fill(0);
  ellipse(gameChar_x, gameChar_y - 35, 13, 13);

  //mouth

  strokeWeight(1);
  stroke(48, 138, 34);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 21);
  curveVertex(gameChar_x - 6, gameChar_y - 21);
  curveVertex(gameChar_x - 2, gameChar_y - 20);
  curveVertex(gameChar_x + 5, gameChar_y - 21);
  curveVertex(gameChar_x + 5, gameChar_y - 21);
  endShape();

  //ears

  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  triangle(
    gameChar_x - 17,
    gameChar_y - 45,
    gameChar_x - 13,
    gameChar_y - 42,
    gameChar_x - 15,
    gameChar_y - 40
  );

  triangle(
    gameChar_x + 17,
    gameChar_y - 45,
    gameChar_x + 13,
    gameChar_y - 42,
    gameChar_x + 15,
    gameChar_y - 40
  );

  //legs

  strokeWeight(4);
  stroke(38, 236, 80);
  line(gameChar_x - 8, gameChar_y - 15, gameChar_x - 15, gameChar_y);
  ellipse(gameChar_x - 15, gameChar_y, 3, 1);

  line(gameChar_x + 8, gameChar_y - 15, gameChar_x + 15, gameChar_y);
  ellipse(gameChar_x + 15, gameChar_y, 3, 1);

  //hands

  strokeWeight(3);
  line(gameChar_x - 16, gameChar_y - 24, gameChar_x - 25, gameChar_y - 32);

  line(gameChar_x + 16, gameChar_y - 24, gameChar_x + 25, gameChar_y - 32);

  //anchor point
  noStroke();
  fill(255, 0, 0);
  ellipse(gameChar_x, gameChar_y, 5, 5);
}

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

  //open up the console to see how these work
  console.log("keyPressed: " + key);
  console.log("keyPressed: " + keyCode);

  if (keyCode == 65) {
    console.log("a");
    isLeft = true;
  } else if (keyCode == 68) {
    console.log("d");
    isRight = true;
  } else if (keyCode == 37) {
    console.log("left arrow");
    isLeft = true;
  } else if (keyCode == 39) {
    console.log("right arrow");
    isRight = true;
  } else if (keyCode == 32) {
    console.log("space");
    if (isFalling == false) {
      gameChar_y -= 100;
    }
  } else if (keyCode == 87) {
    console.log("w");
    if (isFalling == false) {
      gameChar_y -= 100;
    }
  } else if (keyCode == 38) {
    console.log("up arrow");
    if (isFalling == false) {
      gameChar_y -= 100;
    }
  }
}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.

  console.log("keyReleased: " + key);
  console.log("keyReleased: " + keyCode);

  if (keyCode == 65) {
    console.log("a");
    isLeft = false;
  } else if (keyCode == 68) {
    console.log("d");
    isRight = false;
  } else if (keyCode == 37) {
    console.log("left arrow");
    isLeft = false;
  } else if (keyCode == 39) {
    console.log("right arrow");
    isRight = false;
  } else if (keyCode == 32) {
    console.log("space");
    isFalling = false;
  } else if (keyCode == 87) {
    console.log("w");
    isFalling = false;
  } else if (keyCode == 38) {
    console.log("up arrow");
    isFalling = false;
  }
}
