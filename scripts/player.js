Quintus.ActionPlatformerPlayer = function(Q){
	Q.Sprite.extend("Player", {
		init: function(p){
			this._super(p,{
				sheet: "player",
				jumpSpeed: -300,
				speed: 100,
			});
			this.add("2d, platformerControls");
			Q.input.on("fire",this,"fireWeapon");
		},

		fireWeapon: function(){
			//insert a new sprite for the bullet
			//eventually use pooling
		}
	});
};