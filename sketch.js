var bg;
var caixa ;
function setup() {
  createCanvas(400,400);
caixa=createSprite(200,200,50,50);
caixa.shapeColor="blue";
bg = "green";

}

function draw() 
{
  background(bg);
if (keyDown("up")){
  bg= "pink";
}

  drawSprites();

}




