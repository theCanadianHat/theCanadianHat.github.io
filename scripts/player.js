Quintus.ActionPlatformerPlayer = function(Q){
	Q.Sprite.extend("Player", {
		init: function(p){
			this._super(p,{
				sheet: "player",
				jumpSpeed: -300,
				speed: 100,
			});
			this.add("2d, platformerControls");
			//"fire" is mapped to spacebar
			Q.input.on("fire",this,"fireWeapon");
		},

		fireWeapon: function(){
			//insert a new sprite for the bullet
			//eventually use pooling
			var p = this.p;
			Q.stage().insert(new Q.Bullet({
				x: p.x,
				y: p.y,
				speed: 250
			}));
		}
	});
};