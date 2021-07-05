var gardenImg,rabbitImg;
var appleImg;
var rand;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rand = Math.round(random(1, 2));
  
  rabbit.x = mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  if(frameCount%80 ===0){

    if(rand === 1){
      createApple();
    }
    
    else{
      createLeaf();
    }
  }
  
  drawSprites();
}

function createApple(){
  if(frameCount%80 === 0){
  var apple = createSprite(Math.round(random(25, 390)), 50, 15, 15);
  apple.velocityY = 5;
  apple.addImage(appleImg);
  apple.scale=0.05;
}
}

function createLeaf(){
  if(frameCount%80 === 0){
    var leaf = createSprite(Math.round(random(10, 395)), 50, 15, 15);
    leaf.velocityY = 4;
    leaf.scale=0.05;
    leaf.addImage(leafImg);
    
  }
}
