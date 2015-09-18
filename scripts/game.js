//listen for load event to be trigger
window.addEventListener("load",function() {
  var Q = window.Q = Quintus({development: true})
    .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
    .include("ActionPlatformerPlayer")
    .setup({
      width: 320,   //to fit devices with a screne resolution of 1280 x 720
      height: 180,
      scaleToFit: true
    }).controls().touch();
    //cheanged tmx

    Q.setImageSmoothing(false);

    //define scene "level"
    Q.scene("level", function(stage){
      Q.stageTMX("myLevel.tmx", stage);
    });

    //load assets
    //knows to look in "data" folder for tmx & json
    //looks in "images" folder for png
    Q.loadTMX("myLevel.tmx, sprites.json, sprites.png", function(){
      //compile the sheets for the sprites.png which needs sprites.json
      //using the json keys I can associate sprites with the right assests
      Q.compileSheets("sprites.png","sprites.json");
      //staging the screen
      //what ever is on the screen is staged
      Q.stageScene("level");
    });
    
});     