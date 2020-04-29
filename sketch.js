var PLAY=1;
var END=0;

var gameState=PLAY; 

var ground;
var player;

var player_img;

var cloudsGroup,clouds_img;

var obstaclesGroup;

var itemGroup;

//var font;


var count=0;

//var coins;

//var coins_img;

var coin;
var gameover,gameover_img;
var ground,ground_img;

//var background_img;

var coin_img;
var obstacle2;

var obstacle2_img;

function preload(){
coin_img = loadImage("coin.png");

cloud = loadImage("cloud 1.png");

// font = loadFont('assets/inconsolata.otf');

//background_img = loadImage("Background1.jpg");

coins_img = loadImage("coins.png");

gameover_img = loadImage("KO.png")

player_img = loadImage("Naruto 1 .png");


obstacle2_img = loadImage("Fire1.png");


ground_img = loadImage("ground.png");

                 }
function setup(){ 
  

  createCanvas(820,650);
  
  ground = createSprite(200,600,400,10);
  ground.addImage("ground",ground_img);

 ground.x = ground.width /2;
 ground.velocityX = -(8 + 5*count/100);

 gameover = createSprite(360,270);
 gameover.addImage(gameover_img);

 gameover.visible = false;
 gameover.scale = 1.2;

 player = createSprite(55,300,20,50);
 player.addAnimation("player",player_img);
 player.scale=1.1;


 itemGroup=new Group();
 ObstacleGroup=new Group();
 cloudsGroup = new Group();

}




 player.setCollider("circle",0,0,40);

function draw() {
    background(rgb(135,206,235));

    // background.addImage("background",background_img)
    //display score
    fill(rgb(31,26,116));
    textSize(30);
    textAlign(LEFT);
    textFont("Comic Sans");
    text("COINS:"+count,40,35);
    //textFont('Comic Sans', 50);
  // console.log(player.y);
 
 
    player.collide(ground)
    //spawnObstacles();
    
   
    if(gameState===PLAY){
      ground.velocityX=-6;
      //count=Math.round(World.frameCount/6);  

    if(ground.x<0){
      ground.x=ground.width/2;
                      }



    player.velocityY=player.velocityY+1.8;
   

          if(keyDown("space") && player.y >= 50) {
        
            player.velocityY = -14;
          }

         

    if(player.isTouching(itemGroup)){
      itemGroup.destroyEach();
      count=count+1;
                                   }                           

    if(player.isTouching(ObstacleGroup)){
       gameState=END;
       
                                         }
    

        coins();
        Obstacle();  
        

                         }

    else if(gameState===END){
        gameover.visible = true;
        player.destroy();
        ground.velocityX=0;
        itemGroup.setVisibleEach(0);

     //   obstaclesGroup.setVelocityXEach(0);
     
                            }
      createEdgeSprites();
      drawSprites();
 }
function coins(){
 
    if(frameCount%80 === 0){
      var item=createSprite(202,330,40,10);
      var rand = Math.round(random(1,1));

      switch(rand) {
      case 1: item.addImage("coin.png",coin_img);
              break;
              break;
              break;
              break;
      
        }
           
    // item.addImage(coin_img);
    //item.setCollider("circle");

    item.scale=0.75;
    item.velocityX=-3;

   /* if(item.collide(screenLeft)){
      count = count - 1;
    }*/
   
    item.y=Math.round(random(120,340));

    item.lifetime=134;
    itemGroup.add(item);
     }
    }
   
  
function Obstacle(){

     if(frameCount%70===0){
        var obstacle=createSprite(400,565,10,10);
        obstacle.velocityX = -(6 + 5*count/100);
        //obstacle.addImage("obstacle2",obstacle2_img);
        obstacle.scale = 1.4;
       var rand = Math.round(random(1,1));
    switch(rand) {
     case 1: obstacle.addImage("obstacle2",obstacle2_img);
            break;
              default:break;
    }
    


    obstacle.collide(ground);
    obstacle.setCollider("circle",0,0,40);
    obstacle.velocityX=-6;
    obstacle.lifetime=70;
    obstacle.y = Math.round(random(130,340));
    obstacle.scale = 0.9;
    console.log(player.x);
    ObstacleGroup.add(obstacle);
    
   

                             }
                   }

                    
                        
