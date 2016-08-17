window.onload = start;
document.addEventListener("keydown", KeyPressed, false);

function start() {
	if(isPaused==false){
		NewLevel();
	}
	
}

function NewLevel() {
	level++;
	if (level == 1) {
		CreateItem("img/meteor.png");
		MoveItem("img/meteor.png");
	}
	if (level == 2) {
		CreateItem("img/comet.png");
		MoveItem("img/comet.png");
	}
	if (level == 3) {
		CreateItem("img/asteroid.png");
		MoveItem("img/asteroid.png");
	}
	if (level == 4) {
		CreateItem("img/spaceship.png");
		MoveItem("img/spaceship.png");		
	}
	
	if (level == 5){
		CreateItem("img/like.png");
		MoveItem("img/like.png");
	}
	if (level == 6 || level == 7) {
		for (var item in generateSpeeds) {
			if(item>=1000) {
				item -= 500;
			}

		}
	}
	setTimeout("NewLevel()", newLevel);
}