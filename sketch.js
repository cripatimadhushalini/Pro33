var bg;
var snow,snow_Img;
var music;

function preload(){
  bg = loadImage("snow3.jpg");
  snow_Img = loadImage("snow5.webp");
  music = loadSound("roa-music-snow-dancer.mp3");
}

function setup() {
  createCanvas(800,400);
  music.play();
}

function draw() {
  background(bg);  
  drawSprites();

  if(frameCount%60===0){
    snow = createSprite(200,10,100,100);
    snow.addImage(snow_Img);
    snow.scale = 0.1;
    snow.velocityY = 4;
    snow.x = Math.round(random(100,800))
  }
}