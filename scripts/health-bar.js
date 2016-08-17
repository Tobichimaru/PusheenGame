$(function() {
	var difference = 1;
	var img = $('.cat-img');
	 
	setInterval(function() {
		var valueNumber = $('.now-progress').text();
		var value = $('.progress.percent').width();
		var valueMaxNumber = $('.level-max').text();

		if (valueNumber >= 0) {
			value -= value/valueNumber;
			valueNumber -= difference;

			if (valueNumber == 0){
				img.css("background-image", "url(design/img/thumb.gif)");  
				return;
			} 

			$('.progress.percent').width(value);
			$('.now-progress').text(valueNumber); 	

			if (valueNumber == valueMaxNumber*0.3) {
				img.css("background-image", "url(design/img/Anger.gif)");  
				return;
			} 
			if (valueNumber == valueMaxNumber*0.6) {
				img.css("background-image", "url(design/img/sadness.gif)");  
				return;
			}	
		}
	}, 300);
});

function changeCatImage() {
	var valueNumber = $('.now-progress').text();
	var valueMaxNumber = $('.level-max').text();
	if (valueNumber == 0){
		$('.cat-img').css("background-image", "url(design/img/thumb.gif)");  
		return;
	} 
	if (valueNumber <= valueMaxNumber*0.3) {
		$('.cat-img').css("background-image", "url(design/img/Anger.gif)");  
		return;
	} 
	if (valueNumber <= valueMaxNumber*0.6) {
		$('.cat-img').css("background-image", "url(design/img/sadness.gif)");  
		return;
	}	
	$('.cat-img').css("background-image", "url(design/img/pusheen.gif)");  
}