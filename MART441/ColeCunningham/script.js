class Square {
    constructor(x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }

    get theX() {
        return this.x;
    }

    set theX(x) {
        this.x = x;
    }

    get theY() {
        return this.y;
    }

    set theY(y) {
        this.y = y;
    }

    get theHeight() {
        return this.height;
    }

    get theWidth() {
        return this.width;
    }

    get theColor() {
        return this.color;
    }
}

const axis = ['x', 'y'];
const direction = [2, -2];
var count = 0;
var backgroundColor = "#9fb785";
var score = 0;

var canvasH = 700;
var canvasW = 1200;

var compH = 60;
var compW = 60;
var compX = 600;
var compY = 350;

var playerH = 27;
var playerW = 18;
var playerX = 55;
var playerY = 40;

var computer;
var player;

var squareArray1 = [];
var squareArray2 = [];

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.font="400px Comic Sans MS";
ctx.textAlign = "center";

setInterval(update, 1000 / 70);

function update() {
    drawObjects();
}

$(document).ready(function () {

    setup();

    $(this).keypress(function (event) {
        getKey(event);
    });
});

function setup(){
    $.getJSON("data/data1.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray1.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
    });
    $.getJSON("data/data2.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray2.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
    });
    drawObjects();
}

function drawObjects() {
    ctx.clearRect(0, 0, 1200, 700);

    // Computer
    computer = new Square(compX, compY, compH, compW, "#440583");
    ctx.fillStyle = computer.theColor;
    ctx.fillRect(computer.theX, computer.theY, computer.theWidth, computer.theHeight);
    compMove();

    // Player
    player = new Square(playerX, playerY, playerH, playerW, "#5afce2");
    ctx.fillStyle = player.theColor;
    ctx.fillRect(player.theX, player.theY, player.theWidth, player.theHeight);

    // Objects
    for(var i = 0; i < squareArray1.length; i++)
    {
        ctx.fillStyle = squareArray1[i].theColor;
        ctx.fillRect(squareArray1[i].x, squareArray1[i].y, squareArray1[i].width, squareArray1[i].height);
    }

    // Collectables
    for(var i = 0; i < squareArray2.length; i++)
    {
        ctx.fillStyle = squareArray2[i].theColor;
        ctx.fillRect(squareArray2[i].x, squareArray2[i].y, squareArray2[i].width, squareArray2[i].height);
    }


    ctx.fillStyle = "rgb(242, 242, 242, 0.2)";
    if (score == 5)
        ctx.fillText("=)", canvas.width/2, canvas.height/2);
    else
        ctx.fillText(score, canvas.width/2, canvas.height/2);
}

function getKey(event) {
    if (hasCollided(computer, player)) {
        collision_effect();
    }

    for(var i = 0; i < squareArray1.length; i++) {
        if (hasCollided(player, squareArray1[i])) {
            collision_effect();
        }
    }

    for(var i = 0; i < squareArray2.length; i++) {
        if (hasCollided(player, squareArray2[i])) {
            squareArray2[i].color = "rgba(0, 0, 0, 0)" ;
            squareArray2[i].x = 0
            squareArray2[i].y = 0
            score++;
        }
    }

    var wall = wallCollided(player);
    if (wall) {
        playerX = 55;
        playerY = 45;
        score = 0;
        setup()
    }

    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    drawObjects();
}

function moveUp() {
    playerY -= 10;
}

function moveDown() {
    playerY += 10;
}

function moveLeft() {
    playerX -= 10;
}

function moveRight() {
    playerX += 10;
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function wallCollided(object1) {
    return (
        ((object1.y + object1.height) < 0) ||
        ((object1.y + object1.height) > (canvasH))||
        ((object1.x + object1.width) < 0) ||
        ((object1.x + object1.width) > (canvasW))
    );
}

function collision_effect() {
    playerX = 55;
    playerY = 40;

    if (backgroundColor === "#9fb785") {
        document.body.style.background = "#efc598";
        backgroundColor = "#efc598";
    } else {
        document.body.style.background = "#9fb785";
        backgroundColor = "#9fb785";
    }

    score = 0;
    setup()
}

var a, d;
function compMove() {
    if (count === 0) {
        a = axis[Math.floor(Math.random() * axis.length)];
        d = direction[Math.floor(Math.random() * direction.length)];
    }

    if (a === 'x') {
        compX += d;
    } else {
        compY += d;
    }
    count++;

    if (count === 38) {
        count = 0;
    }

    var wall = wallCollided(computer);
    if (wall) {
        compX = 600;
        compY = 350;
    }
}

var audio = document.getElementById("music");
audio.volume = 0.1;