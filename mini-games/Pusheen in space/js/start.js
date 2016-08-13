window.onload = start;
document.addEventListener("keydown", KeyPressed, false);

function start() {
	NewLevel();
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
		CreateItem("img/spaceship.png");
		MoveItem("img/spaceship.png");
	}
	if (level == 4) {
		CreateItem("img/pill.png");
		MoveItem("img/pill.png");
	}
	if (level == 5 || level == 6) {
		for (var item in generateSpeeds) {
			item -= 500;
		}
	}
	setTimeout("NewLevel()", newLevel);
}