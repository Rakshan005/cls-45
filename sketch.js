var monkey, monkey_running, monkey_collided;
var banana, bananaImage, apple, appleImage, obstacleImage;
var foodGroup, obstacleGroup, cloudsGroup;
var backgroundImage, groundImage, cloudImage;
var gameOver, gameOverImage, restart, restartImage;
var invisibleGround;
var score;

function preload(){
monkey_running = loadAnimation("monkey walking .gif");

bananaImage = loadImage("banana.png");
backgroundImage = loadImage("background.png");
groundImage = loadImage("ground.png");
cloudImage = loadImage("cloud.png");
gameOverImage = loadImage("gameOver.png");
restartImage = loadImage("restart.png");

}




















function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

