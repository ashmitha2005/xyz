
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var groundobj, dustbinobj, paperobj;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobj = new ground(width/2,670,width,20);
	paperobj = new Paper(200,450,70);
	dustbinobj = new dustbin(1200,650);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  })

	

  
	  Engine.run(engine);
	  Render.run(render);



  
}


function draw() {
	background(0);
  rectMode(CENTER);

  paperobj.display();
  groundobj.display();
  dustbinobj.display();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:270,y:-270});
	}
}














