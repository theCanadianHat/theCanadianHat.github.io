Quintus.ActionPlatformerEnemy = function(Q){
	//custom component that all enemies will have
	Q.component("commonEnemy",{
		added: function(){
			//this is the enetity that the component is attached to
			//in this case it is an enemy
			var entity = this.entity;
			//when something collides on the left, right, and bottom do this callback
			entity.on("bump.left, bump.right, bump.bottom", function(collision){
				//checking if the enemy ran into a player
				if(collision.obj.isA("Player")){
					console.log(collision);
					console.log("you died");
				}
			});
			//when something collides with the top of the enemy
			entity.on("bump.top",function(collision){
				if(collision.obj.isA("Player")){
					//make the player bounce a little off the top of the enemy's head
					collision.obj.p.vy = -100;
					//kill the enemy
					this.destroy();
				}
			});
		}
	});


	Q.Sprite.extend("GroundEnemy",{
		init: function(p){
			this._super(p, {vx: -50, defaultDirection: "left"});
			//aiBounce makes the enemy change direction when it runs into a wall
			this.add("2d, aiBounce, commonEnemy");
		},
		step: function(dt){
			//get the direction of the enemy
			var dirX = this.p.vx / Math.abs(this.p.vx); // 1 or -1
			//check what is under the enemy
			var ground = Q.stage().locate(this.p.x, this.p.y + this.p.h/2 + 1, Q.SPRITE_DEFAULT);
			//check what is in front of the enemy
			var nextElement = Q.stage().locate(this.p.x + dirX * this.p.w/2, this.p.y + this.p.h/2 + 1, Q.SPRITE_DEFAULT);
			var nextTile;

			if(nextElement instanceof Q.TileLayer){
				nextTile = true;
			}

			//if we are on the ground and about to walk off a cliff
			if(!nextTile && ground){
				//switch directions
				this.p.vx = -this.p.vx;
			}
			this.p.flip = false;
			// if(!nextTile && ground) {
		 //        if(this.p.vx > 0) {
		 //          if(this.p.defaultDirection == "right") {
		 //            // this.p.flip = "x";
		 //          }
		 //          else {
		 //            this.p.flip = false;
		 //          }
		 //        }
		 //        else {
		 //          if(this.p.defaultDirection == "left") {
		 //            // this.p.flip = "x";
		 //          }
		 //          else {
		 //            this.p.flip = false;
		 //          }
		 //        }
		 //    	this.p.vx = -this.p.vx;
		 //    }
		}
	});

};