const Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies, 
    Render = Matter.Render,
    Constraint = Matter.Constraint;


var engine, world;
var ballq,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,start_logo,defeat_logo,victory_logo,ball_2;
var backgImg;
var gameState = "loading";

var cirle_lod;
var rand; 

function preload() {

start_logo = loadImage("logo_2_game.png");
defeat_logo = loadImage("logoforlol.png");
victory_logo = loadImage("Victory_Logo.png");
backgImg = loadImage("game_bg.png");

}

function setup() {
createCanvas(2174,1223);

  engine = Engine.create();
  world = engine.world;

  ballq = new Ball(65,1120);

  rand = Math.round(random(0,8));
}

function draw() {


background(backgImg);
  Engine.update(engine);

  //ballq.display();
  
  
  
 /* This is how to use Matter.Body.applyForce.
 
 if(keyWentDown(UP_ARROW)) {
    Matter.Body.applyForce(PAPER1.body,PAPER1.body.position,{x:130, y:-120});
}*/


if(rand === 0) {
  gameState = "play";
  }
  
  if(rand === 1) {
    gameState = "onBallSling";
  }
  
  if(rand === 2) {
    gameState = "onPinUp";
  }
  
  if(rand === 3) {
    gameState = "onPinDown";
  }
  
  if(rand === 4) {
    gameState = "onPinThrow";
  }
  
  if(rand === 5) {
    gameState = "onPinKick";
  }
  
  if(rand === 6) {
    gameState = "onBallSink";
  }
  
  if(rand === 7) {
    gameState = "onStoneHit";
  }
  
  if(rand === 8) {
    gameState = "onPinAway";
  }




if(gameState === "play") {

}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

if(gameState === "play") {
  
}

































































  
  console.log(rand);
  
  
  textSize(20);
  fill("red");
  text("x : "+mouseX,30,1200);
  text("y : "+mouseY,120,1200);
  
}






 function mouseReleased() {
  if (mouseX > 0  && mouseX < 1920 && mouseY > 0 && mouseY < 1080) {
    
    
  let fs = fullscreen();
  fullscreen(!fs);

    //how to zoom in p5 - research !!!!!!!!!!!!!!!!!!!!!!!!!!!.+ : DONE
    
  }
} 

/*function SlingBall() {
//ball shoot on sling, go to pins
}

function PinFlyUp() {
//pins fly up when ball comes and later down
}

function PinFlyDown() {
//pins fly down when ball comes and later up

}



function PinKickBall() {
//one random pin goes and hits ball, ball is thrown back and then part of ground moves away and ball falls into trench
}

function PinSlingToBall() {
//pins shoot on sling involuntarily and hit ball, rest is same as pinkickball().
}

function BallSinkDown() {
//same as last part of pinkickball().
}

function StoneHitBall() {
//stone crushes ball to pieces as the stone drops with force from the sky
}

function PinGetPullAway() {
//pins get pulled away by alien force/robot.
}*/