var bg, bg2, form, system, code, security;
var key1, key2, key3;
var unlockedKeyImg;
var score = 0;
var song;

function preload() {
 
  bg = loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
  unlockedKeyImg = loadImage("unlockedKey.png");
  
}

function setup() {
  createCanvas(1000, 500);
  security = new Security();
  system = new System();
  song = loadSound('keyUnlocked.mp3');
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  key1 = createSprite(800, 420, 20, 50);
  key1.addImage(unlockedKeyImg);
  key1.scale = 0.1/2;
  key1.visible = false;

  key2 = createSprite(840, 420, 20, 50);
  key2.addImage(unlockedKeyImg);
  key2.scale = 0.1/2;
  key2.visible = false;

  key3 = createSprite(880, 420, 20, 50);
  key3.addImage(unlockedKeyImg);
  key3.scale = 0.1/2;
  key3.visible = false;

// add code for changing the background to the treasure background
  if(score === 3){
    clear();
    background(bg2);
    fill(0);
    strokeWeight(10);
    stroke("orange");
    textSize(40);
    text("Treasure Unlocked!!", 330, 270);
    text("................", 430, 290);
  }

  drawSprites();
}

