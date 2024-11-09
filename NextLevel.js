function playGame(){
    if (currentFG >= maxFG){
        gameWon = true;
    }
}

function nxtLevelScreen(){
    //background(68, 143, 163); 
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text('Level ' + gameLevel + ' Complete!', width / 2, height / 2 -20);
    fill(255);
    text('Press Enter!', width / 2, height / 2 + 20);

    if (keyIsPressed && keyCode === ENTER){
        nxtLevel();
    }
}

function endGameScreen(){
    background(0, 0, 0, 50);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text('Congrats on beating the game! Press Enter!', width / 2, height / 2 - 20);
    fill(252,245,150);
    text('New Character Unlocked!: Terry', width / 2, height / 2 + 20);

    if (keyIsPressed && keyCode === ENTER){
        gameWon = false;
        gameLevel = 0;
        currentFG = 0;
        loopwon += 1;
    }
}

function nxtLevel(){
    //advance to the next level
    gameLevel += 1;
    gameWon = false;
    currentFG = 0;
}