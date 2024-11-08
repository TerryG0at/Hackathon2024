function drawSky() {
  background(255, 255, 255);
  fill(2, 4, 20);
  rect(0, 0, 1024, 220);
  fill(3, 7, 38);
  rect(0, 220, 1024, 240);
  fill(5, 19, 40);
  rect(0, 340, 1024, 120);
}

function drawGround() {
  fill(255, 0, 0);
  rect(0, height - 100, width, 100);
}
