//listen for load event to be trigger
window.addEventListener("load",function() {
  var Q = window.Q = Quintus({development: true})
    .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio, Anim")
    .include("ActionPlatformerPlayer, ActionPlatformerEnemy, ActionPlatformerBullet") 
    .setup({
      width: 640,   //to fit devices with a screne resolution of 1280 x 720
      height: 180,
      scaleToFit: true
    }).controls().touch();
    //cheanged tmx

    Q.setImageSmoothing(false);

    //define scene "level"
    Q.scene("level", function(stage){
      stage.insert(new Q.Repeater({asset: "sky.png", speedX: 0.25, speedY: 0, type:0}));
      stage.insert(new Q.Repeater({asset: "mountains.png", speedX: 0.5, speedY: 0, type:0}));
      stage.insert(new Q.Repeater({asset: "ground.png", speedX: 1, speedY: 0, type:"collision"}));
      stage.insert(new Q.Player());
      //get the palyer
      var player = Q("Player").first();
      stage.add("viewport").follow(player,{x:true, y:true});
    });

    //load assets
    //knows to look in "data" folder for tmx & json
    //looks in "images" folder for png
    Q.load("sprites.json, sprites.png, sky.png, mountains.png, ground.png", function(){
      //compile the sheets for the sprites.png which needs sprites.json
      //using the json keys I can associate sprites with the right assests
      Q.compileSheets("sprites.png","sprites.json");
      // Q.compileSheets("chad.png","chad.json");
      //staging the screen
      //what ever is on the screen is staged
      Q.stageScene("level");
    });
    
});     