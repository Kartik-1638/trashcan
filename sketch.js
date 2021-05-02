var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var dustbin
function preload()
{
dustbin=loadImage("trashcan.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
box1=new Box(600,600,20,100)
box2=new Box(650,650,100,20)
box3=new Box(700,600,20,100)
ball=new Ball(70,575,25)
ground=new Ground()
	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  drawSprites();
 box1.display()
 box2.display()
 box3.display()
 ball.display()
 ground.display()
 image(dustbin,575,500,150,150)
if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(ball.ball,ball.ball.position,{x:0.01,y:0.06})

}


}
