
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world; 
var court, courtImg;
var playerleft , playerleftImg;
var playerright, playerrightImg;
var rball, lball;
var obstacleImg, obstaclel , obstacler;
var lwall,rwall,topwall,bottomwall;

function preload()
{
	courtImg = loadImage("Images/Basketcourt.jpg");
	playerleftImg = loadImage("Images/leftplayer.png");
	playerrightImg = loadImage("Images/rightplayer.png");

}

function setup() {
	createCanvas(1500, 800);
 court = createSprite(750,400);
court.addImage(courtImg);
court.scale= 2.3;

playerleft = createSprite(260,400);
playerleft.addImage(playerleftImg);
playerleft.scale = 0.3;

playerright = createSprite(1240,400);
playerright.addImage(playerrightImg);
playerright.scale = 0.3;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rball = new Ball(1220,365,10);
	lball = new Ball(280,365,10);
	lwall = new Wall(110,400,10,700);
	rwall = new Wall(1390,400,10,700);
	topwall = new Wall(750,50,1290,10);
	bottomwall = new Wall(750,750,1290,10);




	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  randomObstacle();
  
 // if(keyDown("A")){
	//  playerleft.x = playerleft.x-2;
 // }
  drawSprites();
 rball.display();
 lball.display();
lwall.display();
rwall.display();
topwall.display();
bottomwall.display();


}

function randomObstacle(){
	if(frameCount%150 === 0){
		obstaclel = createSprite(Math.round(random(350,550)),Math.round(random(200,700)));
		obstaclel.lifetime = 20;

		obstacler = createSprite(Math.round(random(650,1100)),Math.round(random(200,700)));
		obstacler.lifetime = 20;
	}
}

function keyPressed(){
	//keyword A
if(keyCode===65){
	Matter.Body.setStatic(lball.body,false);
	Matter.Body.applyForce(lball.body,lball.body.position,{x:-10,y:2});
}
//keywoed w
if(keyCode===87){
	Matter.Body.setStatic(lball.body,false);
	Matter.Body.applyForce(lball.body,lball.body.position,{x:0,y:-20});
}
//keyword D
if(keyCode===68){
	Matter.Body.setStatic(lball.body,false);
	Matter.Body.applyForce(lball.body,lball.body.position,{x:30,y:0});
}
//keyword S
if(keyCode===83){
	Matter.Body.setStatic(lball.body,false);
	Matter.Body.applyForce(lball.body,lball.body.position,{x:0,y:10});
}
}



