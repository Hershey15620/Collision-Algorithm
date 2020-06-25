var Mrect, Frect;



function setup() {
  createCanvas(800,400);
  Mrect= createSprite(400, 200, 50, 50);
  Frect= createSprite(400,100,50,50);
}

function draw() {
  background(255,255,255);  
  Mrect.x=World.mouseX;
  Mrect.y= World.mouseY;
if (Mrect.x-Frect.x<Mrect.width/2+Frect.width/2
  &&Frect.x-Mrect.x<Mrect.width/2+Frect.width/2
  &&Mrect.y-Frect.y<Mrect.height/2+Frect.height/2
  &&Frect.y-Mrect.y<Mrect.height/2+Frect.height/2){

    Mrect.shapeColor="blue";
    Frect.shapeColor="blue";
  }
  else{
    Mrect.shapeColor="grey";
    Frect.shapeColor="grey";

  }

  
  
  
  drawSprites();
}