var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 50, 80);
  movingRect = createSprite(100,700,200,50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
movingRect.velocityY = -4;
fixedRect.velocityY = 4;
}

function draw() {
  background(0);  


if( movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
 fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
movingRect.velocityY = movingRect.velocityY * -1;
fixedRect.velocityY = fixedRect.velocityY * -1;
 
}


  drawSprites();
}