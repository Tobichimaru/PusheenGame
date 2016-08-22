window.onload = start;
document.addEventListener("keydown", KeyPressed, false);
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'sounds/backgroundsong.mp3');
audioElement.setAttribute('loop', 'loop');
var isNeverClicked = 0;

$(document).ready(function() {
        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);
        $('.play').click(playMusic);		
    });

function playMusic() {
	isNeverClicked++;
	if(isNeverClicked %2 != 0){
		audioElement.play();
		$("#music").removeClass("play");
		$("#music").addClass("stop");
	}
	else{
		audioElement.pause();
		$( "#music").removeClass("stop");
		$( "#music").addClass("play");
	}
}

function start() {
	if(isPaused==false){
		NewLevel();
	}
}

function NewLevel() {
	level++;
	if (level == 1) {
		CreateItem("images/img_eat/apple.png");
		MoveItem("images/img_eat/apple.png");
	}
	if (level == 2) {
		CreateItem("images/img_eat/cupcake.png");
		MoveItem("images/img_eat/cupcake.png");
	}
	if (level == 3) {
		CreateItem("images/img_eat/doughnut.png");
		MoveItem("images/img_eat/doughnut.png");
	}
	if (level == 4) {
		CreateItem("images/img_eat/meat.png");
		MoveItem("images/img_eat/meat.png");
	}
	if (level == 5) {
		CreateItem("images/img_eat/pizza.png");
		MoveItem("images/img_eat/pizza.png");
	}
	if (level == 6 || level == 7) {
		CreateItem("images/img_eat/like.png");
		MoveItem("images/img_eat/like.png");
		for (var item in generateSpeeds) {
			item -= 500;
		}
	}
	setTimeout("NewLevel()", newLevel);
}