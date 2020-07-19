
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint=Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


  engine = Engine.create();

	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(width/2,height/4,width/7,20);

 
  bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new Ball(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Ball(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Ball(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Ball(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Ball(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
  
  
  rope1=new Line(bob1.body,ground.body,-bobDiameter*2, 0) 
  rope2=new Line(bob2.body,ground.body,-bobDiameter*1, 0)
   rope3=new Line(bob3.body,ground.body,0, 0)
   rope4=new Line(bob4.body,ground.body,bobDiameter*1, 0)
    rope5=new Line(bob5.body,ground.body,bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  keyPressed();



  drawSprites();
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  }
}


function drawLine(constraint)
{
BallBodyPosition=constraint.bodyA.position
GroundBodyPosition=constraint.bodyB.position

GroundBodyOffset=constraint.pointB;

GroundBodyX=GroundBodyPosition.x+GroundBodyOffset.x
GroundBodyY=GroundBodyPosition.y+GroundBodyOffset.y
line(bobBodyPosition.x, bobBodyPosition.y, GroundBodyX,GroundBodyY);
}


