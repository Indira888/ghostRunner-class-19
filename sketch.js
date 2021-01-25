var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var gameState = "play";
var invisibleBlock,invisibleBlockGroup;

function preload(){
  
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  
  createCanvas(600,600);
  //spookySound.loop();
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 2;
  
  ghost = createSprite(400,400);
  ghost.scale = 0.3;
  ghost.addImage("ghost",ghostImg);
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  
  
  
  
}

function draw(){
 
background(0);
  

  
  if(gameState === "play"){
    
  
    
    
  if(tower.y>400){
    tower.y = 300;
  }
  
  if (keyDown("space")){
    ghost.velocityY = -5;
      }
    ghost.velocityY = ghost.velocityY+0.8;
    
  if (keyDown("LEFT_ARROW")){
    ghost.x = ghost.x-3;
      }
    
  if (keyDown("RIGHT_ARROW")){
    ghost.x = ghost.x+3;
      }
  
  
  spawnDoors();
    
  if (climbersGroup.isTouching(ghost)) {
    ghost.VelocityY = 0;
  }
   if (invisibleBlockGroup.isTouching(ghost)|| ghost.y>600) {
     ghost.destroy();
     gameState = "end";
   }
  
  drawSprites();

}

if (gameState === "end"){
 
  stroke("yellow")
  fill("yellow")
  textSize(30);
  
  
  text("GAMEOVER",230,250);

}
}


function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    door.addImage(doorImg);
    door.lifetime = 800;
    
    var climber = createSprite(200,10);
    climber.addImage(climberImg);
    climber.lifetime = 700;
   
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    invisibleBlock.lifetime = 700;
    invisibleBlock.debug = true;
    
    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
   
    

    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
 
    
    ghost.depth = door.depth;
    ghost.depth +=1;
    
    doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
    
   
  }
}