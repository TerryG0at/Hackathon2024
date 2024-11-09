function drawDarkForward() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  fill(245, 245, 220);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 60, 50);

  // Head
  fill(134, 90, 72);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
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

function drawDarkLeft() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  fill(245, 245, 220);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 60, 50);

  // Head
  fill(134, 90, 72);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
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

function drawDarkRight() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  fill(245, 245, 220);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 60, 50);

  // Head
  fill(134, 90, 72);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
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

function drawDarkJump() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body
  fill(245, 245, 220);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 60, 50);

  // Head
  fill(134, 90, 72);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
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

// ----------------------------------------------------------------------------------------------

function drawLevelTwoDarkForward() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  push();
  fill(245, 245, 220);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 40, 50);
  ellipse(gameChar_x, gameChar_y - 40, 50, 40);
  pop();

  // Head
  fill(134, 90, 72);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
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

function drawLevelTwoDarkLeft() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  push();
  fill(245, 245, 220);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 40, 50);
  ellipse(gameChar_x, gameChar_y - 44, 50, 40);
  pop();

  // Head
  fill(134, 90, 72);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
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

function drawLevelTwoDarkRight() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  push();
  fill(245, 245, 220);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 40, 50);
  ellipse(gameChar_x, gameChar_y - 44, 50, 40);
  pop();

  // Head
  fill(134, 90, 72);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
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

function drawLevelTwoDarkJump() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 16, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 16, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body
  push();
  fill(245, 245, 220);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 50, 50);
  pop();

  // Head
  fill(134, 90, 72);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
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

// ----------------------------------------------------------------------------------------------

function drawLevelThreeDarkForward() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 13, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 13, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  fill(134, 90, 72);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 38, 50);
  ellipse(gameChar_x, gameChar_y - 55, 52, 30);

  push();
  stroke(82, 55, 44);
  line(gameChar_x, gameChar_y - 65, gameChar_x, gameChar_y - 50);
  line(gameChar_x - 20, gameChar_y - 50, gameChar_x + 20, gameChar_y - 50);

  line(gameChar_x - 12, gameChar_y - 31, gameChar_x - 12, gameChar_y - 45);

  line(gameChar_x, gameChar_y - 45, gameChar_x, gameChar_y - 30);
  line(gameChar_x - 10, gameChar_y - 36, gameChar_x + 10, gameChar_y - 36);
  line(gameChar_x - 10, gameChar_y - 44, gameChar_x + 10, gameChar_y - 44);

  line(gameChar_x + 12, gameChar_y - 31, gameChar_x + 12, gameChar_y - 45);
  pop();

  // Head
  fill(117, 77, 61);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(245, 245, 220);
  noStroke();
  rect(gameChar_x - 22, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(245, 245, 220);
  noStroke();
  rect(gameChar_x + 2, gameChar_y - 10, 20, 10);
}

function drawLevelThreeDarkLeft() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 13, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 13, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  fill(134, 90, 72);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 38, 50);
  ellipse(gameChar_x, gameChar_y - 55, 52, 30);

  push();
  stroke(82, 55, 44);
  line(gameChar_x, gameChar_y - 65, gameChar_x, gameChar_y - 55);
  line(gameChar_x - 20, gameChar_y - 55, gameChar_x + 20, gameChar_y - 55);

  line(gameChar_x - 12, gameChar_y - 31, gameChar_x - 12, gameChar_y - 45);

  line(gameChar_x, gameChar_y - 45, gameChar_x, gameChar_y - 30);
  line(gameChar_x - 10, gameChar_y - 36, gameChar_x + 10, gameChar_y - 36);
  line(gameChar_x - 10, gameChar_y - 44, gameChar_x + 10, gameChar_y - 44);

  line(gameChar_x + 12, gameChar_y - 31, gameChar_x + 12, gameChar_y - 45);
  pop();

  // Head
  fill(117, 77, 61);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(245, 245, 220);
  noStroke();
  rect(gameChar_x - 22, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(245, 245, 220);
  noStroke();
  rect(gameChar_x + 2, gameChar_y - 10, 20, 10);
}

function drawLevelThreeDarkRight() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 13, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 13, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 40, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 40, 10, 10);

  // Body
  fill(134, 90, 72);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 38, 50);
  ellipse(gameChar_x, gameChar_y - 55, 52, 30);

  push();
  stroke(82, 55, 44);
  line(gameChar_x, gameChar_y - 65, gameChar_x, gameChar_y - 55);
  line(gameChar_x - 20, gameChar_y - 55, gameChar_x + 20, gameChar_y - 55);

  line(gameChar_x - 12, gameChar_y - 31, gameChar_x - 12, gameChar_y - 45);

  line(gameChar_x, gameChar_y - 45, gameChar_x, gameChar_y - 30);
  line(gameChar_x - 10, gameChar_y - 36, gameChar_x + 10, gameChar_y - 36);
  line(gameChar_x - 10, gameChar_y - 44, gameChar_x + 10, gameChar_y - 44);

  line(gameChar_x + 12, gameChar_y - 31, gameChar_x + 12, gameChar_y - 45);
  pop();

  // Head
  fill(117, 77, 61);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(245, 245, 220);
  noStroke();
  rect(gameChar_x - 22, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(245, 245, 220);
  noStroke();
  rect(gameChar_x + 2, gameChar_y - 10, 20, 10);
}

function drawLevelThreeDarkJump() {
  // Left Pant
  noStroke();
  fill(0);
  rect(gameChar_x - 18, gameChar_y - 40, 13, 40);

  // Right Pant
  noStroke();
  fill(0);
  rect(gameChar_x + 5, gameChar_y - 40, 13, 40);

  // Left Hand
  fill(134, 90, 72);
  ellipse(gameChar_x - 30, gameChar_y - 65, 10, 10);

  // Right Hand
  fill(134, 90, 72);
  ellipse(gameChar_x + 30, gameChar_y - 65, 10, 10);

  // Body
  fill(134, 90, 72);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 50, 38, 50);
  ellipse(gameChar_x, gameChar_y - 55, 52, 30);

  push();
  stroke(82, 55, 44);
  line(gameChar_x, gameChar_y - 65, gameChar_x, gameChar_y - 55);
  line(gameChar_x - 20, gameChar_y - 55, gameChar_x + 20, gameChar_y - 55);

  line(gameChar_x - 12, gameChar_y - 31, gameChar_x - 12, gameChar_y - 45);

  line(gameChar_x, gameChar_y - 45, gameChar_x, gameChar_y - 30);
  line(gameChar_x - 10, gameChar_y - 36, gameChar_x + 10, gameChar_y - 36);
  line(gameChar_x - 10, gameChar_y - 44, gameChar_x + 10, gameChar_y - 44);

  line(gameChar_x + 12, gameChar_y - 31, gameChar_x + 12, gameChar_y - 45);
  pop();

  // Head
  fill(117, 77, 61);
  ellipse(gameChar_x, gameChar_y - 90, 37, 37);

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
  stroke(181, 87, 87);
  noFill();
  beginShape();
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x - 6, gameChar_y - 80);
  curveVertex(gameChar_x, gameChar_y - 78);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  curveVertex(gameChar_x + 6, gameChar_y - 80);
  endShape();

  // Left Shoe
  fill(245, 245, 220);
  noStroke();
  rect(gameChar_x - 22, gameChar_y - 10, 20, 10);

  //Right shoe
  fill(245, 245, 220);
  noStroke();
  rect(gameChar_x + 2, gameChar_y - 10, 20, 10);
}
