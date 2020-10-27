var movingRect,fixedRect;
var obj1;
function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="green";

  movingRect=createSprite(400,600,80,50);
  movingRect.shapeColor="green";

  fixedRect.velocityY=3;
  movingRect.velocityY=-3;
  obj1=createSprite(100,100,20,20);
  obj1.shapeColor="green";
}
function draw() {
  background(0); 
  
 /* movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(isTouching(movingRect,obj1)){
    obj1.shapeColor="red";
    movingRect.shapeColor="red";
  }else{
    obj1.shapeColor="green";
    movingRect.shapeColor="green"; 
  }*/
  bounceOff(movingRect , fixedRect);
  drawSprites();
}  

