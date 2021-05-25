var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dg1,dg2,dg3;
var dg1sprite,dg2sprite,dg3sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 6 , {restitution:0.3,friction:0.84, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 dg1 = Bodies.rectangle((width/2)+60,650,70,10, {isStatic:true});
	 dg1sprite =createSprite((width/2)+60,600,70,10)
	 dg1sprite.shapeColor=color("red");
	 World.add(world,dg1)
	 dg2 = Bodies.rectangle(420,620,10,70, {isStatic:true});
	 World.add(world,dg2)
	 dg2sprite =createSprite(380,640,10,70)
	 dg2sprite.shapeColor=color("red");
	 dg3 = Bodies.rectangle(490,620,10,70, {isStatic:true});
	 World.add(world,dg3)
	 dg3sprite =createSprite(380,640,10,70)
	 dg3sprite.shapeColor=color("red");
	 




	 var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
	Engine.run(engine);
	Matter.Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  helicopterSprite.x =packageSprite.x 
  
  dg1sprite.x= dg1.position.x;
  dg1sprite.y= dg1.position.y;
  dg2sprite.x= dg2.position.x;
  dg2sprite.y= dg2.position.y;
  dg3sprite.x= dg3.position.x;
  dg3sprite.y= dg3.position.y;
 
  
  drawSprites();
 
}

function keyPressed() { 
	if(packageSprite.y<400){
	if (keyCode === LEFT_ARROW){
	helicopterSprite.x=helicopterSprite.x-20; translation={x:-20,y:0}
	Matter.Body.translate(packageBody, translation) }
	else if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:20,y:0}
	Matter.Body.translate(packageBody, translation)
	}
}
	if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false); } }
	
