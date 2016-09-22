function saveScore () {
	var $score = $("#score");

	localStorage.setItem('score', $score.text());
};
 
