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
		$( "#music").removeClass("play");
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
		CreateItem("images/img_space/meteor.png");
		MoveItem("images/img_space/meteor.png");
	}
	if (level == 2) {
		CreateItem("images/img_space/comet.png");
		MoveItem("images/img_space/comet.png");
	}
	if (level == 3) {
		CreateItem("images/img_space/asteroid.png");
		MoveItem("images/img_space/asteroid.png");
	}
	if (level == 4) {
		CreateItem("images/img_space/spaceship.png");
		MoveItem("images/img_space/spaceship.png");		
	}
	
	if (level == 5){
		CreateItem("images/img_space/like.png");
		MoveItem("images/img_space/like.png");
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