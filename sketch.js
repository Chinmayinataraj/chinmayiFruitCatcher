var man;
var block1,block2,blocks3,block4,block5,block6,block7,block8,block9,block10;
var food;
var ghost;
var appleImage,bananaImage,cherryImage,ghostImage,girlImage,kiwiImage,mangoImage,orangeImage,papayaImage,pineappleImage,pomegranateImage,strawberryImage,bgImage;
var invisibleBlock1;
var flag1Image,flag2Image;
var congralutationsImage;
var score=0;

function preload(){
  appleImage = loadImage("applepng.jpg");
  bananaImage = loadImage("banana.png");
  cherryImage = loadImage("cherry.png");
  ghostImage = loadImage("ghost.png");
  kiwiImage = loadImage("kiwi.png");
  girlImage = loadImage("girl.png");
  mangoImage = loadImage("mango.png");
  orangeImage = loadImage("orange.png");
  papayaImage = loadImage("papaya.png");
  pomegranateImage = loadImage("pomegranate.png");
  strawberryImage = loadImage("strawberry.png");
  bgImage = loadImage("bg.png");
  flag1Image = loadImage("flag123.jpg");
  flag2Image = loadImage("flag456.jpg");
  congratulationsImage = loadImage("congratulations.jpg");
}

function setup() {
  createCanvas(400, 800);
  var message = "This is a message";
 console.log(message)
  man = createSprite(40,750,10,20);
  man.addImage("man",girlImage);
  man.scale=0.1;
  block1 = createSprite(60,670,10,100);
  block1.shapeColor="brown";
  block2 = createSprite(120,600,100,10);
  block2.shapeColor="brown";
  block3 = createSprite(170,530,10,100);
  block3.shapeColor="brown";
  block4 = createSprite(230,450,100,10);
  block4.shapeColor="brown";
  block5 = createSprite(300,400,10,100);
  block5.shapeColor="brown";
  block6 = createSprite(235,350,100,10);
  block6.shapeColor="brown";
  block7 = createSprite(170,280,10,100);
  block7.shapeColor="brown";
  block8 = createSprite(120,210,100,10);
  block8.shapeColor="brown";
  block9 = createSprite(60,150,10,100);
  block9.shapeColor="brown";
  invisibleBlock1 = createSprite(200,450,20,20);
  invisibleBlock1.addImage("invisibleblock1",ghostImage);
  invisibleBlock1.scale=1.25;
  invisibleBlock1.visible=false;
  apple = createSprite(50,600,20,20);
  apple.addImage("apple",appleImage)
  apple.scale=0.1;
  banana = createSprite(150,580,20,20);
  banana.addImage("banana",bananaImage)
  banana.scale=0.1;
  cherry = createSprite(150,450,20,20);
  cherry.addImage("cherry",cherryImage)
  cherry.scale=0.1;
  kiwi = createSprite(270,430,20,20);
  kiwi.addImage("kiwi",kiwiImage)
  kiwi.scale=0.075;
  mango = createSprite(70,200,20,20);
  mango.addImage("mango",mangoImage)
  mango.scale=0.075;
  orange = createSprite(170,350,20,20);
  orange.addImage("orange ",orangeImage)
  orange.scale=0.075;
  papaya = createSprite(150,230,20,20);
  papaya.addImage("papaya",papayaImage);
  papaya.scale=0.15;
  flag1 = createSprite(310,30,20,20);
  flag1.addImage("flag123",flag2Image);
  flag1.scale=0.15;
  flag1.visible=false;
  flag2 = createSprite(70,30,20,20);
  flag2.addImage("flag456",flag1Image);
  flag2.scale=0.45;
  flag2.visible=false;
  congratulations = createSprite(185,30,20,20);
  congratulations.addImage("congratulations.jpg",congratulationsImage);
  congratulations.scale=0.4;
  congratulations.visible=false;
}

function draw() {
  background(bgImage);
  textSize(30);
  stroke("black")
  text("ENERGY="+score,200,300);
  if(keyDown("a")){
    man.x = man.x-1
  }
  if(keyDown("s")){
    man.x = man.x+1;
  }
  if(keyDown("d")){
    man.y = man.y-1; 
  }

  if(keyDown("f")){
    man.y = man.y+1;
  }
 // image(appleImage,50,600,20,20);
  //image(bananaImage,150,580,20,20);
  //image(cherryImage,150,450,20,20);
  //image(kiwiImage,270,430,20,20); 
  //image(mangoImage,280,330,20,20); 
  //image(orangeImage,235,350,20,20);
  //image(papayaImage,170,280,20,20);
  

  if(man.isTouching(block1)||man.isTouching(block2)||man.isTouching(block3)||man.isTouching(block4)||man.isTouching(block5)||man.isTouching(block6)||man.isTouching(block7)||man.isTouching(block8)||man.isTouching(block9)){
    invisibleBlock1.visible=true;
    block1.visible=false;
    block2.visible=false;
    block3.visible=false;
    block4.visible=false;
    block5.visible=false;
    block6.visible=false;
    block7.visible=false;
    block8.visible=false;
    block9.visible=false;
    apple.visible=false;
    banana.visible=false;
    cherry.visible=false;
    kiwi.visible=false;
    orange.visible=false;
    papaya.visible=false;
    mango.visible=false;

    man.x=40;
    man.y=750;
  }
  if(man.isTouching(apple)){
    apple.visible=false;
    score=score+10;
  }
  if(man.isTouching(banana)){
    banana.visible=false;
    score=score+10;
  }
  if(man.isTouching(cherry)){
    cherry.visible=false;
    score=score+10;
  }
  if(man.isTouching(kiwi)){
    kiwi.visible=false;
    score=score+10;
  }

  if(man.isTouching(mango)){
    mango.visible=false;
    score=score+10;
  }
  if(man.isTouching(orange)){
    orange.visible=false;
    score=score+10;
  }
  if(man.isTouching(papaya)){
    papaya.visible=false;
    score=score+10;
  }
  if(man.y<150){
    flag1.visible=true;
    flag2.visible=true;
    congratulations.visible=true;
  }
  drawSprites();
}

