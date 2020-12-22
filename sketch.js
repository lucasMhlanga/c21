var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";

  car = createSprite(200,200,30,30);
  car.shapeColor = "blue";
  car.velocityX = 4;

  wall = createSprite(1000,200,20,60);
  wall.shapeColor = "yellow";
  
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(isTouching(car,wall)){
    car.shapeColor = "red";
    //car.velocityX = 0;
  }

  bounce(car,wall);
  drawSprites();
}

fuction bounce(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object2.velocityX=object1.velocityX;
      object1.velocityX=0
    }

    if(object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        object2.velocityY=object1.velocityY;
        object1.velocityY=0
      }
}
