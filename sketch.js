var lander,bgImg,landerImg,ground;
var vx,vy;

vx=0
vy=0
gravity=0.05


function preload(){
  bgImg=loadImage("bg.png");
  landerImg=loadImage("normal.png")

}

function setup(){
createCanvas(1000,700)

frameRate(60)

lander=createSprite(500,100,10,10)
lander.addImage(landerImg)
lander.scale=0.2

rectMode(CENTER)
}

function draw(){
background(bgImg)

if(keyIsDown(LEFT_ARROW)){
  lander.x-=4
}

if(keyIsDown(RIGHT_ARROW)){
  lander.x+=4
}

if(keyDown(UP_ARROW)){
  lander.y-=10
}

if(keyIsDown(DOWN_ARROW)){
  lander.y+=4
}
push()
text("vertical velocity"+round(vy),100,100)



pop()
vy +=gravity
lander.position.y+=vy
  drawSprites()
}