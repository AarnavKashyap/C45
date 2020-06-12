
var backgroundImg,canvas,playerImg,groundImg,ground,player,invisibleGround;
var enemyGroup,enemy,enemyAnim;
var score = 0;

function preload(){
    backgroundImg = loadImage("bg.png");
    playerImg = loadAnimation("mario2.png","mario1.png");
    //playerdeadImg = loadImage("mario_dead.png");
    groundImg = loadImage("ground.png");
enemyAnim = loadAnimation("enemy1.png", "enemy2.png");
}



function setup(){
    player = createSprite(50,displayHeight-200,50,50);
ground = createSprite(displayWidth/2-30,displayHeight - 145,displayWidth,20);
canvas = createCanvas(displayWidth-60,displayHeight-115);

player.addAnimation("mario",playerImg);
player.scale = 0.4;
ground.addImage(groundImg);

invisibleGround = createSprite(displayWidth/2-30,displayHeight-158,displayWidth,20);
invisibleGround.visible = false;

enemyGroup = createGroup();

}
function draw(){
    background(backgroundImg);
    fill("black");
    textSize(26);
    text("SCORE : " + score, 40,25);
    ground.velocityX = -4;
    console.log(displayWidth);

    if(ground.x < 0 ){
        ground.x = ground.width/2;
    }
    player.collide(invisibleGround);
    if(keyDown(UP_ARROW) && player.isTouching(ground)){
        player.velocityY = -15;
    }
    player.velocityY = player.velocityY + 0.8;
    if(enemyGroup.isTouching(player)){
        score -= 1;
        enemyGroup.setVelocityXEach(0)  ;
player.velocityX =0;
    }
    spawnEnemy();
    drawSprites();


}
function spawnEnemy(){
    if(frameCount % 300 === 0){
        var enemy = createSprite(displayWidth, displayHeight-200, 50,50);
        enemy.velocityX = -4;
        enemy.addAnimation("enemy",enemyAnim);
        enemy.scale = 0.15;
        enemyGroup.add(enemy);
        enemy.lifetime = 342
    }
}
