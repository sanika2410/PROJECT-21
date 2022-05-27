
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
  ball = Bodies.circle(30,30,50,ball_options)
  World.add(world,ball)

  ground = new Ground(600,1100,width,20)

  leftground = new Ground(900,1050,20,120)
  rightground = new Ground(1100,1050,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  leftground.display()
  rightground.display()
  ellipse(ball.position.x,ball.position.y,50,50)
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:100,y:-150})
	}

}



