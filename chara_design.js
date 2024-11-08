function drawCharacterForward() {
  // Head
  fill(0);
  ellipse(gameChar_x, gameChar_y - 20, 20, 20);

  // Body
  line(gameChar_x, gameChar_y - 10, gameChar_x, gameChar_y + 20);

  // Arms
  line(gameChar_x - 15, gameChar_y, gameChar_x + 15, gameChar_y);

  // Legs
  line(gameChar_x, gameChar_y + 20, gameChar_x - 10, gameChar_y + 40);
  line(gameChar_x, gameChar_y + 20, gameChar_x + 10, gameChar_y + 40);
}

function drawCharacterLeft() {
  // Head
  fill(0);
  ellipse(gameChar_x, gameChar_y - 20, 20, 20);

  // Body
  line(gameChar_x, gameChar_y - 10, gameChar_x, gameChar_y + 20);

  // Arms, angled to the left
  line(gameChar_x, gameChar_y, gameChar_x - 15, gameChar_y + 10);

  // Legs, angled as if stepping left
  line(gameChar_x, gameChar_y + 20, gameChar_x - 10, gameChar_y + 40);
  line(gameChar_x, gameChar_y + 20, gameChar_x, gameChar_y + 40);
}

function drawCharacterRight() {
  // Head
  fill(0);
  ellipse(gameChar_x, gameChar_y - 20, 20, 20);

  // Body
  line(gameChar_x, gameChar_y - 10, gameChar_x, gameChar_y + 20);

  // Arms, angled to the right
  line(gameChar_x, gameChar_y, gameChar_x + 15, gameChar_y + 10);

  // Legs, angled as if stepping right
  line(gameChar_x, gameChar_y + 20, gameChar_x, gameChar_y + 40);
  line(gameChar_x, gameChar_y + 20, gameChar_x + 10, gameChar_y + 40);
}

function drawCharacterJumpLeft() {
  // Head
  fill(0);
  ellipse(gameChar_x, gameChar_y - 20, 20, 20);

  // Body
  line(gameChar_x, gameChar_y - 10, gameChar_x, gameChar_y + 20);

  // Arms angled upwards, as if jumping
  line(gameChar_x, gameChar_y, gameChar_x - 15, gameChar_y - 10);

  // Legs angled upwards, simulating a jump
  line(gameChar_x, gameChar_y + 20, gameChar_x - 10, gameChar_y + 30);
  line(gameChar_x, gameChar_y + 20, gameChar_x, gameChar_y + 30);
}

function drawCharacterJumpRight() {
  // Head
  fill(0);
  ellipse(gameChar_x, gameChar_y - 20, 20, 20);

  // Body
  line(gameChar_x, gameChar_y - 10, gameChar_x, gameChar_y + 20);

  // Arms angled upwards, as if jumping
  line(gameChar_x, gameChar_y, gameChar_x + 15, gameChar_y - 10);

  // Legs angled upwards, simulating a jump
  line(gameChar_x, gameChar_y + 20, gameChar_x, gameChar_y + 30);
  line(gameChar_x, gameChar_y + 20, gameChar_x + 10, gameChar_y + 30);
}

function drawCharacterJump() {
  // Head
  fill(0);
  ellipse(gameChar_x, gameChar_y - 20, 20, 20);

  // Body
  line(gameChar_x, gameChar_y - 10, gameChar_x, gameChar_y + 20);

  // Arms raised
  line(gameChar_x - 10, gameChar_y - 5, gameChar_x + 10, gameChar_y - 5);

  // Legs raised, simulating a jump
  line(gameChar_x, gameChar_y + 20, gameChar_x - 5, gameChar_y + 35);
  line(gameChar_x, gameChar_y + 20, gameChar_x + 5, gameChar_y + 35);
}
