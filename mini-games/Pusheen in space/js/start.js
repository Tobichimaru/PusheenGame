window.onload = start;
document.addEventListener("keydown", KeyPressed, false);

 var audioElement = document.createElement('audio');
 audioElement.setAttribute('src', 'audio/backgroundsong.mp3');
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