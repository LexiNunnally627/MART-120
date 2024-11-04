var x = 100;
var y = 100;
var diameter = 50;
var faceMovement = 5;
var glassesMovement = 5;
var hairMovement = 2;
var size = 25;
var count = 0;
var textMovement = 5;


function setup()
{
    createCanvas(500, 600);
    faceMovement = floor(random() * 10) +1;
    glassesMovement = floor(random() * 10) +1;
}
function draw()
{
    background(120);
    strokeWeight(7);
    
    //hair-250,430,300,500
    fill(2256,250,150);
    ellipse(x+150,y,300,500);

    
    //neck
    fill(200,150,100);
    strokeWeight(7);
    rect(200,350,100,150);
    
    //ears-150,300,50,75--350,300,50,75
    ellipse(x+50,300,50,75);
    ellipse(x+250,300,50,75);
    if(x >= 300 || x <= -50)
        {
            faceMovement *= -1;
        }
        x += faceMovement;
    
        //body
    fill(250,100,150);
    circle(250,625,350);
   
    //face-250,300,200
    fill(200,150,100);
    circle(x+150,300,diameter+150);
    if(x >= 300 || x <= -50)
    {
        faceMovement *= -1;
    }
    x += faceMovement;
   
    //glasses-175,275,50--275,275,50--225,300,275,300
    fill(100,100,100);
    square(175,y,diameter);
    square(275,y,diameter);
    line(225,y+25,275,y+25);
    if(y >= 300 || y <= 0)
        {
            glassesMovement *= -1;
        }
    y += glassesMovement;
    //nose
    triangle(250,330,250,320,245,330);
    
    //mouth
    line(275,350,250,350);
    
    //eyes
    strokeWeight(13);
    point(200,300);
    point(300,300);
    
    //text
    fill(300,200,450);
    textSize(15);
    text('Lexi Nunnally',400,550);

    textSize(size);
    if(count >= 5)
    {
        textMovement *= -1;
        count = -10;
    }
    size+= textMovement;
    count++;
    text('My Self Portrait',175,100);

}