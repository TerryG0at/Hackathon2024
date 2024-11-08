function drawSky() {
  background(25, 25, 25); //fill the sky blue
}

function drawGround() {
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
}

function drawClouds()
{
    //calling the function that i have declared in start game function
    object_Cloud.cloudFly();
    for(var i = 0; i < object_Cloud.positionX.length; i++) {
        //to make the clouds float in the air
        object_Cloud.positionX[i] += object_Cloud.cloudSpeed[i];

        //each clouds will appear from the opposite side if it goes out of the frame and this can also be adjust if we expand the size of the screen by adding more objects in the game
        if(object_Cloud.positionX[i] > width) {
            object_Cloud.positionX[i] = -200;
        }
        else if(object_Cloud.positionX[i] < -200) {
            object_Cloud.positionX[i] = width;
        }

        //draw cloud. For adjusting the size and starting position, you can change the number inside the start game function
        noStroke();
        fill(255);
        rect(object_Cloud.positionX[i] - 50 * object_Cloud.size_adjust[i],
            object_Cloud.positionY[i] - 10 * object_Cloud.size_adjust[i],
            (object_Cloud.size + 50) * object_Cloud.size_adjust[i],
            (object_Cloud.size - 15) * object_Cloud.size_adjust[i]);
        ellipse(object_Cloud.positionX[i], object_Cloud.positionY[i] - 20 * object_Cloud.size_adjust[i],
            (object_Cloud.size + 30) * object_Cloud.size_adjust[i],
            object_Cloud.size * object_Cloud.size_adjust[i]);
        ellipse(object_Cloud.positionX[i] - 50 * object_Cloud.size_adjust[i], object_Cloud.positionY[i],
            object_Cloud.size * object_Cloud.size_adjust[i],
            object_Cloud.size * object_Cloud.size_adjust[i]);
        ellipse(object_Cloud.positionX[i] + 50 * object_Cloud.size_adjust[i], object_Cloud.positionY[i],
            object_Cloud.size * object_Cloud.size_adjust[i],
            object_Cloud.size * object_Cloud.size_adjust[i]);
    }
}

object_Cloud = {positionX: [30,300,650,1180,1350], 
  //this code is for adjusting height of the cloud
  positionY: [100,150,130,70,120], 
  size:50, 
  //this code is for changing the overall size
  size_adjust:[0.7,0.5,0.7,0.9,0.4],
  //create an empty array instead of assigning fixed values to already declared clouds so it will become more advance and this will automatically assign based on number of clouds that we have declared
  cloudSpeed: [],

  cloudFly: function() {
  for (var i = 0; i < this.positionX.length; i++) 
      {
      //to make sure the speed is assigned only once to each clouds and the other i put because the speed is too slow between -1 and 1
      if (this.cloudSpeed[i] == undefined || this.cloudSpeed[i] > -1 && this.cloudSpeed[i] < 1) 
          {
          this.cloudSpeed[i] = random(-3, 3);
          }
      }
  }

  };

function drawMoon() {
  let baseSize = moon.size; // Base size of the moon

  fill(255, 234, 127);
  ellipse(moon.x, moon.y, baseSize * 4.2, baseSize * 4.2);

  fill(240, 196, 32, 200);
  ellipse(moon.x, moon.y, baseSize * 4.2, baseSize * 3.9);
  ellipse(moon.x, moon.y, baseSize * 4.2, baseSize * 3.9);

  fill(255, 255, 255, 30);
  ellipse(moon.x, moon.y, baseSize * 4.2, baseSize * 4.2);

  fill(235, 229, 194, 75);
  ellipse(moon.x - baseSize * 0.31, moon.y - baseSize * 1.76, baseSize * 0.6, baseSize * 0.6);

  fill(235, 229, 194, 95);
  ellipse(moon.x - baseSize * 1.07, moon.y - baseSize * 0.97, baseSize * 0.8, baseSize * 0.8);

  fill(244, 229, 156, 50);
  ellipse(moon.x - baseSize * 1.6, moon.y + baseSize * 0.1, baseSize, baseSize);

  fill(255, 255, 255, 75);
  ellipse(moon.x, moon.y, baseSize * 4.4, baseSize * 4.4);

  // Anchor point (invisible)
  fill(255, 0, 0, 0);
  ellipse(moon.x, moon.y, baseSize * 0.1, baseSize * 0.1);
}

function drawStars() {
  for (var i = 0; i < 50; i++) 
    {
      fill(255);
      ellipse(Math.random() * 1200,Math.random() * 300, 2, 2)
    }
}