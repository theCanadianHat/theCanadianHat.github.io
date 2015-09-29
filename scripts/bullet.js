Quintus.ActionPlatformerBullet = function(Q){
	Q.Sprite.extend("Bullet",{
		init: function(p){
			this._super(p,{
				sheet: "bullet",
				speed: 200
			});
			//detect collisions and movement
			this.add("2d");
		},
		step: function(dt){
			//check to see if the bullet is off screen
			//I think
			if(this.p.x > Q.width || this.p.x < 0){
				this.destroy();
			}
		}
	});
};