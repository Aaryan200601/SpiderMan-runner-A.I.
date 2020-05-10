var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["943720db-0a25-4bb3-b678-cec38498cc7b","e9f53d03-b1bc-4dce-a5de-11ce899b474d","e58a0c0f-d4e2-46e5-9364-047b333af1cd","ae8d52b5-fad3-4352-9321-dea82207488b","8f170e98-e72d-40a5-a971-906c95a16d8e","07598e67-d5b4-4ad7-8175-70eb5b4f4920","56417c3a-5c0a-43bc-92a2-1df5c57177cf","8494653d-9626-4a82-a758-3859401b2325","c82e5efd-9fa8-49bf-b435-e2a714e061e6","ff6615e7-04c6-46dc-9839-676c180e2276","9a1440aa-99b4-4174-ae45-0263c8dbfa97","55d0031c-18f8-4b61-8203-fb70552b3360","abf2ad3b-5730-44e4-95b3-6a3c453b042a","7f04c3da-8aae-4b4a-a54d-65c7392754da"],"propsByKey":{"943720db-0a25-4bb3-b678-cec38498cc7b":{"name":"spike1","sourceUrl":null,"frameSize":{"x":55,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"seIg3nzYI1gY.MeL7F8aDx59L6BevYEd","loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":59},"rootRelativePath":"assets/943720db-0a25-4bb3-b678-cec38498cc7b.png"},"e9f53d03-b1bc-4dce-a5de-11ce899b474d":{"name":"spike2","sourceUrl":null,"frameSize":{"x":100,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"LAHmSB_0p1DQuy.xxf3TW5JpdVt5Hs0G","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":65},"rootRelativePath":"assets/e9f53d03-b1bc-4dce-a5de-11ce899b474d.png"},"e58a0c0f-d4e2-46e5-9364-047b333af1cd":{"name":"spike3","sourceUrl":null,"frameSize":{"x":100,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"IjIzWBAsD43LgcsT44zq3ZkOW5UseV6b","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":65},"rootRelativePath":"assets/e58a0c0f-d4e2-46e5-9364-047b333af1cd.png"},"ae8d52b5-fad3-4352-9321-dea82207488b":{"name":"spider_man","sourceUrl":null,"frameSize":{"x":200,"y":99},"frameCount":2,"looping":true,"frameDelay":3,"version":"1RoijSDSm_17vyGe7Fgg4rgbcTGnrJVj","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":198},"rootRelativePath":"assets/ae8d52b5-fad3-4352-9321-dea82207488b.png"},"8f170e98-e72d-40a5-a971-906c95a16d8e":{"name":"spider_man_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":3,"version":"LK1oEx.uRSUHs6F3opC_VK6DxAKF_eE7","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/8f170e98-e72d-40a5-a971-906c95a16d8e.png"},"07598e67-d5b4-4ad7-8175-70eb5b4f4920":{"name":"spider_man_collided","sourceUrl":null,"frameSize":{"x":59,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"wbSQDunq6RIdUHuqZ_EFBoZ5ShvGOBdP","loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":100},"rootRelativePath":"assets/07598e67-d5b4-4ad7-8175-70eb5b4f4920.png"},"56417c3a-5c0a-43bc-92a2-1df5c57177cf":{"name":"surface1","sourceUrl":null,"frameSize":{"x":800,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"PTMYRZZZj46YcaCoy3OmWLPPNTqS8R94","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":20},"rootRelativePath":"assets/56417c3a-5c0a-43bc-92a2-1df5c57177cf.png"},"8494653d-9626-4a82-a758-3859401b2325":{"name":"city_1","sourceUrl":null,"frameSize":{"x":800,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"bHLnu2yDbl7DOojsWkhaxD55Sy_rNPzy","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":400},"rootRelativePath":"assets/8494653d-9626-4a82-a758-3859401b2325.png"},"c82e5efd-9fa8-49bf-b435-e2a714e061e6":{"name":"surface2","sourceUrl":null,"frameSize":{"x":800,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"OhxWM6gS81EPe22Tf08hV0YkDDMrizvL","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":60},"rootRelativePath":"assets/c82e5efd-9fa8-49bf-b435-e2a714e061e6.png"},"ff6615e7-04c6-46dc-9839-676c180e2276":{"name":"web","sourceUrl":null,"frameSize":{"x":10,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"eNHuL3ubVCE3Z.UMsIvo1mCzSyYFdl2v","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":300},"rootRelativePath":"assets/ff6615e7-04c6-46dc-9839-676c180e2276.png"},"9a1440aa-99b4-4174-ae45-0263c8dbfa97":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":1,"version":"iPoZsvn0cjks1SqPiMyBtFPnv.cpGMxd","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/9a1440aa-99b4-4174-ae45-0263c8dbfa97.png"},"55d0031c-18f8-4b61-8203-fb70552b3360":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"Rb00ukmbNk0F17dKEbDp_Ac8h.waUSgS","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/55d0031c-18f8-4b61-8203-fb70552b3360.png"},"abf2ad3b-5730-44e4-95b3-6a3c453b042a":{"name":"restart","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"uEHyVvaLIM1AYTPq8BvPcBSf12L_.Cz0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/abf2ad3b-5730-44e4-95b3-6a3c453b042a.png"},"7f04c3da-8aae-4b4a-a54d-65c7392754da":{"name":"gameOver","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"lwWx64ATACXhjBV3rHpy3thOYlpIzmij","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/7f04c3da-8aae-4b4a-a54d-65c7392754da.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating game states
var PLAY = 1;
var END = 0;
var gameState = PLAY;

//creating background
var bg = createSprite(200, 200);
bg.setAnimation("city_1");
 
//creating surfaces
var surface1 = createSprite(200, 390, 400, 20);
surface1.setAnimation("surface1");

var surface2 = createSprite(200, 30, 400, 60);
surface2.setAnimation("surface2");

//creating invisible ground
var invgr1 = createSprite(200, 40, 400, 10);
invgr1.visible = false;

var invgr2 = createSprite(200, 390, 400, 10);
invgr2.visible = false;

//creating web
var web = createSprite(50, 230, 10, 300);
web.setAnimation("web");
web.visible = false;

//creating player and giving it animation
var player = createSprite(50, 345, 20, 50);
player.setAnimation("spider_man_1");
player.scale = 0.8;

//To create groups
var SpikesGroup = createGroup();
var EnemyGroup1 = createGroup();
var EnemyGroup2 = createGroup();

//place gameOver and restart icon on the screen
var gameOver = createSprite(200,200);
var restart = createSprite(200,300);
gameOver.setAnimation("gameOver");
restart.setAnimation("restart");
restart.scale = 0.8;

gameOver.visible = false;
restart.visible = false;

//set text
textSize(18);
textFont("ALGERIAN");
textStyle(BOLD && ITALIC);

//score
var count = 0;

function draw() {
  
  //Applying the setCollider function on player
 player.setCollider("rectangle", 0, 0, 300, player.height + 20);

//setting initial background colour 
  background("white");
  drawSprites();
  
   // To fill colour in texts
  fill("magenta");
  
  //display score
  text("Score: "+ count, 250, 100);
  
 if(gameState === PLAY)
{ 
     //scoring
    count = Math.round(World.frameRate/60) + count;
   
   //jump away when the up arrow key is pressed
   if(keyWentDown("UP_ARROW")){
    player.velocityY = -12;
    web.visible = true;
    web.height = player.y - 40;
     playSound("assets/category_accent/puzzle_game_accent_lock_02.mp3");
  }
  
  if(keyWentUp("UP_ARROW"))
  {
    web.y  = 225;
    web.visible = false;
  }
  
   //jump away when the down arrow key is pressed
   if(keyDown("DOWN_ARROW")){
    player.velocityY = 12 ;
    web.visible = true;
     web.height = 390 - player.y;
    playSound("assets/category_accent/puzzle_game_accent_lock_02.mp3");
  }
  
  if(keyWentUp("DOWN_ARROW"))
  {
   web.y = 175;
    web.visible = false;
  }
  
  //To set condition for the player's animation
if(player.y < 200)
  {
    player.setAnimation("spider_man");
  }
 
   //To set condition for the player's animation
  if(player.y > 200)
  {
    player.setAnimation("spider_man_1");
  }
 
  
 //Showing the background is moving
 bg.velocityX = -10;
 if(bg.x < 0 )
 {
   bg.x = bg.width/2;
 }
 
 //Showing the surface is moving
 surface1.velocityX = -10;
 if(surface1.x < 0)
 {
   surface1.x = 200;
 }
  surface2.velocityX = -10;
 if(surface2.x < 0)
 {
   surface2.x = 200;
 }
 
 if(player.isTouching(SpikesGroup)) 
 {
  //playSound("assets/category_hits/vibrant_game_frozen_break_hit_1.mp3");
  //gameState = END;
  player.velocityY = -10;
  web.visible = true;
playSound("assets/category_accent/puzzle_game_accent_lock_02.mp3");
 }
 
  if(player.isTouching(EnemyGroup1)) 
 {
  player.velocityY = -10;
  //gameState = END;
  //playSound("assets/category_hits/vibrant_game_frozen_break_hit_1.mp3");
  web.visible = true;
playSound("assets/category_accent/puzzle_game_accent_lock_02.mp3"); 
   
 }
 
  if(player.isTouching(EnemyGroup2)) 
 {
   player.velocityY = 10;
   //playSound("assets/category_hits/vibrant_game_frozen_break_hit_1.mp3");
   //gameState = END;
   web.visible = true;
playSound("assets/category_accent/puzzle_game_accent_lock_02.mp3");
 }
 
 if(player.isTouching(surface1)|| player.isTouching(surface2) ){
   web.visible = false;
 }
 
  score();
  spawnEnemy2();
  spawnSpikes();
  spawnEnemy1();
 }
 else if(gameState === END)
 {
   gameOver.visible = true;
   restart.visible = true;
   bg.visible = false;
   web.visible = false;
   surface1.visible = false;
   surface2.visible = false;
   SpikesGroup.setVisibleEach(false);
   EnemyGroup1.setVisibleEach(false);
   EnemyGroup2.setVisibleEach(false);
   
   if(mousePressedOver(restart))
   {
     playSound("assets/category_accent/puzzle_game_accent_b_01.mp3");
      reset();
   }
   
 }
  
   
  //Setting player to collide with the invisible ground
  player.collide(invgr1);
  player.collide(invgr2);
    
}

function spawnSpikes()
{
if(World.frameCount % 79=== 0)
{
 
 //Creating Spikes
 var spike1 = createSprite(400, 365, 40, 10);
  spike1.velocityX = -12;
  spike1.scale = 0.5;
  
  // creating Random Numbers
  var rand = randomNumber(1,3);
    spike1.setAnimation("spike" + rand);
  
  //Creating lifetime for the spike
   spike1.lifetime = 33;
   
     //Adding spikes to the group
   SpikesGroup.add(spike1);
}
}

function spawnEnemy1()
{
if(World.frameCount % 57 === 0)
{
  var enemy1 = createSprite(400, 250, 40, 10);
  enemy1.velocityX = -12;
  enemy1.scale = 0.5;
  
  // creating Random Numbers
  enemy1.setAnimation("enemy1");
  
  //Creating lifetime for the spike
   enemy1.lifetime = 33;
   
     //Adding spikes to the group
   EnemyGroup1.add(enemy1);
}
}

function spawnEnemy2()
{
if(World.frameCount % 93 === 0)
{
  var enemy2 = createSprite(400, 125, 40, 10);
  enemy2.velocityX = -12;
  enemy2.scale = 0.5;
  
  // creating Random Numbers
  enemy2.setAnimation("enemy2");
  
  //Creating lifetime for the spike
   enemy2.lifetime = 33;
   
     //Adding spikes to the group
   EnemyGroup2.add(enemy2);
}
}

function reset()
{
  gameState = PLAY;
  gameOver.visible= false;
  restart.visible = false;
  bg.visible = true;
  surface1.visible = true;
  surface2.visible = true;
  player.y = 345;
  SpikesGroup.destroyEach();
  EnemyGroup1.destroyEach();
  EnemyGroup2.destroyEach();
  player.setAnimation("spider_man_1");
  count = 0;
}

function score()
{
   bg.depth = count.depth;
  count.depth = count.depth + 10;
  
  count.depth = surface1.depth;
  count.depth = count.depth + 1;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
