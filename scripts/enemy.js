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
		}
	});

};