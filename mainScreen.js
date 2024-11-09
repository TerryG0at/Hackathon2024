function mScreen (){
    background(200);

    textSize(32);
    fill(50);
    textAlign(CENTER, TOP);
    text("Select Your Character", width / 2, 50);

    fill(100);
    let containerWidth = width - 200;
    let containerHeight = height - 200;
    rect(
        (width - containerWidth) / 2,
        (height - containerHeight) / 2,
        containerWidth,
        containerHeight,
        20
    );

    let charWidth = 250;
    let charHeight = 250;
    let containerCenterX = width / 2;
    let containerCenterY = height / 2;

    let xOffset = containerCenterX - 200;
    let yOffset = containerCenterY;

    // Draw the first character's circle (Terry)
    fill(255);
    ellipse(xOffset, yOffset, charWidth, charHeight);

    let imgWidth = charWidth * 0.5; // Scale the image to fit the circle
    let imgHeight = charHeight * 0.8;
    imageMode(CENTER); // Image is drawn from the center
    image(terryImage, xOffset, yOffset, imgWidth, imgHeight); // Draw Terry's image inside the circle

    textSize(24);
    fill(0);
    text("Terry", xOffset, yOffset + charHeight / 2 + 20);
    text("Press 1", xOffset, yOffset + charHeight / 2 + 100);

    xOffset = containerCenterX + 200;
    // Draw the second character's circle (Lester)
    ellipse(xOffset, yOffset, charWidth, charHeight);
    image(lesterImage, xOffset, yOffset, imgWidth, imgHeight); // Draw Lester's image inside the circle

    text("Lester", xOffset, yOffset + charHeight / 2 + 20);
    text("Press 2", xOffset, yOffset + charHeight / 2 + 100);
}