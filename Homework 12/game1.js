var characterX = 50;
var characterY = 50;
var diameter = 25;

var shapeXA = 30;
var shapeYA = 50;
var shapeXB = 30;
var shapeYB = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;

var LEFT_ARROW
var RIGHT_ARROW
var UP_ARROW
var DOWN_ARROW

function setup()
{
    createCanvas(500,500);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createPlayer(50,50);
}
function draw()
{
    background(200);

    createBorder(10);

    exitText();

    drawPlayer();
    keyPressed();

    mousePress();

    enemySmall();
    enemyLarge();

    leave();
}

//movement
function keyPressed() 
{
    if (keyCode === LEFT_ARROW) 
    {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) 
    {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) 
    {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) 
    {
        characterY += 10;
    }

}

//Player
function createPlayer(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawPlayer()
{
    fill(100,60,75);
    circle(characterX,characterY,diameter);
}

//Borders
function createBorder(thickness)
{
    fill(100,60,75);
    //top boarder
    rect(0,0,width,10);
    //left boarder
    rect(0,0,10,height);
    //bottom boarder
    rect(0,height-10,width,10);
    //right boarder
    rect(width-10,0,10,height-100);
}

//Mouse Click
function mousePress()
{   fill(100,60,75)
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

//enemy 1
function enemySmall()
{
    fill(75,10,75);
    square(shapeXA+50,shapeYA-20,20);
    shapeXA -= shapeXSpeed;
    shapeYA -= shapeYSpeed;
    enemySmallMove();
}
function enemySmallMove()
{
    if(shapeXA > width)
        {
            shapeXA = 0;
        }
        if(shapeXA < 0)
        {
            shapeXA = width;
        }
        if(shapeYA > height)
        {
            shapeYA = 0;
        }
        if(shapeYA < 0)
        {
            shapeYA = height;
        } 
}

//enemy 2
function enemyLarge()
{
    fill(50,10,100);
    square(shapeXB-50,shapeYB+70,30);
    shapeXB += shapeXSpeed;
    shapeYB += shapeYSpeed;
    enemyLargeMove();
}
function enemyLargeMove()
{
    if(shapeXB > width)
        {
            shapeXB = 0;
        }
        if(shapeXB < 0)
        {
            shapeXB = width;
        }
        if(shapeYB > height)
        {
            shapeYB = 0;
        }
        if(shapeYB < 0)
        {
            shapeYB = height;
        }
    
}

//exit and text
function exitText()
{
    fill(100,60,75);
    textSize(16);
    text("leave",450,400);
    text("use arrow keys",200,50);
    text("space to stop moving",175,70);
}

//leaving screen
function leave()
{
    if(characterX > width && characterY > width-100)
        {
            fill(100,60,75);
            textSize(20);
            text("Yay!!",225,250);
        }  
}
