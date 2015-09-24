Quintus.ActionPlatformerPlayer = function(Q){
	Q.Sprite.extend("Player", {
		init: function(p){
			this._super(p,{
				sheet: "chad",
				jumpSpeed: -300,
				speed: 100,
			});
			this.add("2d, platformerControls");
		}
	});
};