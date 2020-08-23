
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(200,200,50);

dustbinWall1= new Dustbin(800,695,150,10);
dustbinWall2= new Dustbin(720,680,15,150);
dustbinWall3= new Dustbin(870,680,15,150);

ground=Bodies.rectangle(400,700,800,20,{isStatic:true});

World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();

fill("red");
rect(ground.position.x,ground.position.y,800,20);

dustbinWall1.display();
dustbinWall2.display();
dustbinWall3.display();

  drawSprites();
 
}

function keyPressed(){
    
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}}
