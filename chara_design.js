function drawCharacterForward(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 60, 50);

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawCharacterLeft(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 60, 50);

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawCharacterRight(gameChar_x, gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 60, 50);

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawCharacterJumpLeft(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 60, 50);

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawCharacterJumpRight(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 60, 50);

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawCharacterJump(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 60, 50);

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawLevelTwoForward(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  push();
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 40, 50);
  stroke(53, 44, 44);
  ellipse(gameChar_x, gameChar_y - 40, 50, 40);
  pop();

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawLevelTwoLeft(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  push();
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 40, 50);
  stroke(53, 44, 44);
  ellipse(gameChar_x, gameChar_y - 44, 50, 40);
  pop();

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawLevelTwoRight(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  push();
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 40, 50);
  stroke(53, 44, 44);
  ellipse(gameChar_x, gameChar_y - 44, 50, 40);
  pop();

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawLevelTwoJumpLeft(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 50, 50);

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawLevelTwoJumpRight(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 50, 50);

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawLevelTwoJump(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body
  fill(0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 50, 50);

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 20, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 4, gameChar_y - 10, 20, 10);
}

function drawLevelThreeForward(gameChar_x, gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 13, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 13, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body

  fill(229, 194, 152);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 38, 50);
  ellipse(gameChar_x, gameChar_y - 55, 52, 30);

  push();
  stroke(80, 67, 52);
  line(gameChar_x, gameChar_y - 65, gameChar_x, gameChar_y - 50);
  line(gameChar_x - 20, gameChar_y - 50, gameChar_x + 20, gameChar_y - 50);

  line(gameChar_x - 12, gameChar_y - 31, gameChar_x - 12, gameChar_y - 45);

  line(gameChar_x, gameChar_y - 45, gameChar_x, gameChar_y - 30);
  line(gameChar_x - 10, gameChar_y - 36, gameChar_x + 10, gameChar_y - 36);
  line(gameChar_x - 10, gameChar_y - 44, gameChar_x + 10, gameChar_y - 44);

  line(gameChar_x + 12, gameChar_y - 31, gameChar_x + 12, gameChar_y - 45);
  pop();

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 22, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 2, gameChar_y - 10, 20, 10);
}

function drawLevelThreeLeft(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 13, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 13, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  fill(229, 194, 152);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 38, 50);
  ellipse(gameChar_x, gameChar_y - 55, 52, 30);

  push();
  stroke(80, 67, 52);
  line(gameChar_x, gameChar_y - 65, gameChar_x, gameChar_y - 55);
  line(gameChar_x - 20, gameChar_y - 55, gameChar_x + 20, gameChar_y - 55);

  line(gameChar_x - 12, gameChar_y - 31, gameChar_x - 12, gameChar_y - 45);

  line(gameChar_x, gameChar_y - 45, gameChar_x, gameChar_y - 30);
  line(gameChar_x - 10, gameChar_y - 36, gameChar_x + 10, gameChar_y - 36);
  line(gameChar_x - 10, gameChar_y - 44, gameChar_x + 10, gameChar_y - 44);

  line(gameChar_x + 12, gameChar_y - 31, gameChar_x + 12, gameChar_y - 45);
  pop();

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 22, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 2, gameChar_y - 10, 20, 10);
}

function drawLevelThreeRight(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 13, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 13, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body

  fill(229, 194, 152);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 38, 50);
  ellipse(gameChar_x, gameChar_y - 55, 52, 30);

  push();
  stroke(80, 67, 52);
  line(gameChar_x, gameChar_y - 65, gameChar_x, gameChar_y - 55);
  line(gameChar_x - 20, gameChar_y - 55, gameChar_x + 20, gameChar_y - 55);

  line(gameChar_x - 12, gameChar_y - 31, gameChar_x - 12, gameChar_y - 45);

  line(gameChar_x, gameChar_y - 45, gameChar_x, gameChar_y - 30);
  line(gameChar_x - 10, gameChar_y - 36, gameChar_x + 10, gameChar_y - 36);
  line(gameChar_x - 10, gameChar_y - 44, gameChar_x + 10, gameChar_y - 44);

  line(gameChar_x + 12, gameChar_y - 31, gameChar_x + 12, gameChar_y - 45);
  pop();

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 22, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 2, gameChar_y - 10, 20, 10);
}

function drawLevelThreeJumpLeft(gameChar_x, gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 13, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 13, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body

  fill(229, 194, 152);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 38, 50);
  ellipse(gameChar_x, gameChar_y - 55, 52, 30);

  push();
  stroke(80, 67, 52);
  line(gameChar_x, gameChar_y - 65, gameChar_x, gameChar_y - 55);
  line(gameChar_x - 20, gameChar_y - 55, gameChar_x + 20, gameChar_y - 55);

  line(gameChar_x - 12, gameChar_y - 31, gameChar_x - 12, gameChar_y - 45);

  line(gameChar_x, gameChar_y - 45, gameChar_x, gameChar_y - 30);
  line(gameChar_x - 10, gameChar_y - 36, gameChar_x + 10, gameChar_y - 36);
  line(gameChar_x - 10, gameChar_y - 44, gameChar_x + 10, gameChar_y - 44);

  line(gameChar_x + 12, gameChar_y - 31, gameChar_x + 12, gameChar_y - 45);
  pop();

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 22, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 2, gameChar_y - 10, 20, 10);
}

function drawLevelThreeJumpRight(gameChar_x,gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 13, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 13, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body

  fill(229, 194, 152);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 38, 50);
  ellipse(gameChar_x, gameChar_y - 55, 52, 30);

  push();
  stroke(80, 67, 52);
  line(gameChar_x, gameChar_y - 65, gameChar_x, gameChar_y - 55);
  line(gameChar_x - 20, gameChar_y - 55, gameChar_x + 20, gameChar_y - 55);

  line(gameChar_x - 12, gameChar_y - 31, gameChar_x - 12, gameChar_y - 45);

  line(gameChar_x, gameChar_y - 45, gameChar_x, gameChar_y - 30);
  line(gameChar_x - 10, gameChar_y - 36, gameChar_x + 10, gameChar_y - 36);
  line(gameChar_x - 10, gameChar_y - 44, gameChar_x + 10, gameChar_y - 44);

  line(gameChar_x + 12, gameChar_y - 31, gameChar_x + 12, gameChar_y - 45);
  pop();

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 22, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 2, gameChar_y - 10, 20, 10);
}

function drawLevelThreeJump(gameChar_x, gameChar_y) {
  // Left Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x - 18, gameChar_y - 40, 13, 40);

  // Right Pant
  noStroke();
  fill(245, 245, 220);
  rect(gameChar_x + 5, gameChar_y - 40, 13, 40);

  // Left Hand
  fill(229, 194, 152);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(229, 194, 152);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body

  fill(229, 194, 152);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 38, 50);
  ellipse(gameChar_x, gameChar_y - 55, 52, 30);

  push();
  stroke(80, 67, 52);
  line(gameChar_x, gameChar_y - 65, gameChar_x, gameChar_y - 55);
  line(gameChar_x - 20, gameChar_y - 55, gameChar_x + 20, gameChar_y - 55);

  line(gameChar_x - 12, gameChar_y - 31, gameChar_x - 12, gameChar_y - 45);

  line(gameChar_x, gameChar_y - 45, gameChar_x, gameChar_y - 30);
  line(gameChar_x - 10, gameChar_y - 36, gameChar_x + 10, gameChar_y - 36);
  line(gameChar_x - 10, gameChar_y - 44, gameChar_x + 10, gameChar_y - 44);

  line(gameChar_x + 12, gameChar_y - 31, gameChar_x + 12, gameChar_y - 45);
  pop();

  // Head
  fill(229, 194, 152);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

  fill(0, 0, 0);
  arc(gameChar_x, gameChar_y - 95, 35, 28, PI, 0, CHORD);

  // Left eye
  fill(255, 255, 255);
  ellipse(gameChar_x - 7, gameChar_y - 90, 10, 10);

  fill(0);
  ellipse(gameChar_x - 7, gameChar_y - 90, 6, 6);

  // Right eye
  fill(255, 255, 255);
  ellipse(gameChar_x + 7, gameChar_y - 90, 10, 10);
  fill(0);
  ellipse(gameChar_x + 7, gameChar_y - 90, 6, 6);

  // Mouth
  strokeWeight(1);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(0);
  noStroke();
  rect(gameChar_x - 22, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(0);
  noStroke();
  rect(gameChar_x + 2, gameChar_y - 10, 20, 10);
}
