var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(windowWidth,windowHeight);
  speed = random(55,90);
  weight = random(100,200);
  
  thickness = random(22,83);

  bullet = createSprite(width/32,height/2,height/8,width/325);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite(width-width/thickness-width/thickness-width/thickness,height/2,thickness,height/2);
  wall.shapeColor = color(80,80,80)
  
}

function draw() {
  background(55,255,255);
  if(isTouching(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness*thickness*thickness;
    console.log(damage);
    if(damage<100000000000/2){wall.shapeColor="green";}
    if(damage>100000000000/2){wall.shapeColor="red";}
  }
  drawSprites();
}