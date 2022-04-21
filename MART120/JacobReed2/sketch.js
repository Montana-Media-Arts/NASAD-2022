var screen = 0;
var x;
var y;
var speed;
var score = 0;
var rectSpeed;
var rectWidth = 100;
var rectY = 100;
var rectX = -250;

var rectWidth1 = 100;
var rectY1 = 150;

var randomXSpace= 50;

function setup() {
  createCanvas(400, 300);
  y = height / 2;
  x = width / 2;
}


function draw() {
  // Display the contents of the current screen
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameOn();
    // if the screen variable was changed to 2, show the game over screen 	
  } else if (screen == 2) {
    gameOver();
  }
}

function mousePressed() {
  if (screen == 0) {
    screen = 1
  } else if (screen == 2) {
    screen = 0
  }
}

function startScreen() {
  reset();
  background(96, 157, 255)
  fill(255)
  textAlign(CENTER);
  text('Avoid the Rectangles', width / 2, height / 2)
  text('click to start', width / 2, height / 2 + 20);
}

function gameOn() {
  background(0)
  ellipse(x, y, 20, 20)
  //move the ellipse 
  if (keyIsPressed) {
    if (key ===  'd') {
      x += speed
    } else if (key === 'a') {
      x -= speed
    } else if (key === 'w') {
      y -= speed
    } else if (key === 's') {
      y += speed
    }
  }

  rect(rectX, rectY, rectWidth, 20);
  rect(rectX+ randomXSpace, rectY1, rectWidth1, 20);

  
  rectX += rectSpeed;

  if (rectX > width) {
    randomWidth();
    rectX = -250;
  }
  //if you got to the other side, speed up and go back to the beginning 
  if (y < 0) {
    y = height - 20;
    rectSpeed += 1;
    score+=1
  }
  
  if (y > rectY && y < rectY + 20 && x > rectX && x < rectX + rectWidth) {
    screen = 2
  }
  if (y > rectY1 && y < rectY1 + 20 && x > rectX && x < rectX + rectWidth1) {
    screen = 2
  }
}

function gameOver() {
  background(150)
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2)
  text('click to play again', width / 2, height / 2 + 20);

}

function randomWidth() {
  rectWidth = random(50, 250)
  rectWidth1 = random(50, 250)
}

function randomSpace() {
  randomXSpace = random(50, 100)
}

function reset() {
  speed = 1;
  score = 0;
  rectSpeed = 5;
  rectY = 100;
  rectX = -100;
	rectY1 = 150;
  y = height - 20;
  x = width / 2;
}