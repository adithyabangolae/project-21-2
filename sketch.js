var bullet,wall,thickness;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet=createSprite(400, 200, 50, 5);
  bullet.shapeColor=color("white");
  bullet.velocityX = speed;
  wall=createSprite(1200,200, thickness, height/2);

}

function draw() {

  background("black"); 
  
  if (hasCollided(bullet, wall))
  {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

      if (damage>10)
      {
          wall.shapeColor=color(255,0,0)
      }

      if (damage<10)
      {
          wall.shapeColor=color(0,255,0)
      }
  
  }
  drawSprites();
//hasCollided();

}


function hasCollided(bullet, wall)
{

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
   return true 
}
return false;

}

