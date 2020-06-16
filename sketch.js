var helicopterIMG, helicopterSprite, packageSprite,packageIMG, boxl,boxli, boxr,boxri, boxb,boxbi,velocityB;
var packageBody,ground, gameState, packagecheck
var boxgroup
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	velocityB = 19
	packagecheck = 0
	gameState = "intro"
	boxgroup = createGroup()
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxbi=createSprite(390, 650, 100, 10);
	boxli=createSprite(340, 630, 10, 50);
	boxri=createSprite(440, 630, 10, 50);
	boxgroup.add(boxbi)
	boxgroup.add(boxri)
	boxgroup.add(boxli)
	//groundSprite.shapeColor=color(34)
	//boxgroup.setVelocityEach(velocityB, 0)
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	boxb = Bodies.rectangle(390, 650, 100, 10 , {isStatic:true} );
	World.add(world, boxb);
	boxl = Bodies.rectangle(340, 630, 10, 50 , {isStatic:true} );
	World.add(world, boxb);
	boxr = Bodies.rectangle(440, 630, 10, 50 , {isStatic:true} );
	World.add(world, boxb);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 40 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  //if(gameState = "play"){

  rectMode(CENTER);
  background(0);
  createEdgeSprites();
  packageSprite.debug = true
  //allSprites.debug = true
  //boxgroup.collide(packageSprite)
  /*if(packageSprite.isTouching(boxbi)){
	Matter.Body.setStatic(packageBody, true);
	Matter.Body.setStatic(boxl, true)
	Matter.Body.setStatic(boxr, true)
	Matter.Body.setStatic(boxb, true)
	packageSprite.velocityX = velocityB
	velocityB = 0
	packagecheck=1
  }*/
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 
  boxb.position.x = boxbi.x
  boxb.position.y = boxbi.x
  boxl.position.x = boxli.x
  boxl.position.y = boxli.y
  boxr.position.x = boxri.x
  boxr.position.y = boxri.y
  drawSprites();
  //bounceOff();
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}

function bounceOff(){
    if(boxbi.velocityX > 0 ){
		if(boxbi.x > 750){
			velocityB = -(velocityB) 
			boxbi.velocityX = velocityB
			boxli.velocityX = velocityB
			boxri.velocityX = velocityB
		}
	}
	if(boxbi.velocityX < 0){
		if(boxbi.x < 50){
			velocityB = -(velocityB) 
			boxbi.velocityX = velocityB
			boxli.velocityX = velocityB
			boxri.velocityX = velocityB
		}
	}

}

function BoxCorrector(){
	//oxli.x = boxri
	//boxli.y = boxri.y
	
	//boxri.x = boxli - 100
}
