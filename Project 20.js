var gardenImage;
var cat;
var mouse;

function preload() {

    //load the images here
gardenImage = loadImage("images/garden.png");

catImage1 = loadAnimation("images/cat1.png");
catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
catImage4 = loadAnimation("images/cat4.png");

mouseImage1 = loadAnimation("images/mouse1.png");
mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImage4 = loadAnimation("images/mouse4.png");

}

function setup(){

    createCanvas(1000,800);

    //create tom and jerry sprites here
      cat = createSprite(900,700);
      cat.addAnimation("cat",catImage1);
      cat.scale = 0.15;

      mouse = createSprite(90,700);
      mouse.addAnimation("mouse",mouseImage1);
      mouse.scale = 0.15;
}

function draw() {

    background(gardenImage);

    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width) / 2){  
    mouse.addAnimation("happyMouse",mouseImage4);
    mouse.changeAnimation("happyMouse");

    cat.addAnimation("happyCat",catImage4);
    cat.changeAnimation("happyCat");
    cat.x = 190;
    cat.velocityX = 0;
    }

    
    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImage2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.addAnimation("catRunning",catImage2);
    cat.changeAnimation("catRunning");
    cat.frameDelay = 25;
    cat.velocityX = -3;
  }
}