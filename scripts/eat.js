$(function () {

	function feed(event) {
		var $money = $(".money p").text();
		var $price = $(".food." + event.data.food + " .price").text();
		var $calories = $(".food." + event.data.food + " .calories").text();

		if (+$money >= +$price) {
			$(".money p").text(+$money-(+$price));
			$(".cat-img").css("background-image", "url(design/img/eat-" + 
				event.data.food + ".gif)");
			setTimeout(function () {
				changeCatImage();	
			}, 1500);
			//progress
			progress($calories);
		}
		else {
			$('.cat-img').css("background-image", "url(design/img/sadness.gif)");  
			setTimeout(function () {
				changeCatImage();				
			}, 2000);
		}
	}

	function percentage(max, now) {
		var p = (+now * 100) / +max;
		return p + "%";
	}

	function progress(calories) {
		var $progress = $(".now-progress").text();
		var $newProgress = +$progress + (+calories);
		if ($newProgress >= +$(".level-max").text()) {
			$newProgress -= +$(".level-max").text();
			//increase level
			var $levelMax = $(".level-max").text();
			$(".level-max").text(+$levelMax + 100); 
			var $level = $(".level").text();
			$(".level").text(+$level + 1); 
		}

		$(".now-progress").text(+$newProgress);
		$(".progress.percent").css("width", percentage($(".level-max").text(),$(".now-progress").text()))
	}

	$(".meat").on("click", {food: "meat"} , feed);
	$(".pizza").on("click", {food: "pizza"} , feed);
	$(".hamburguer").on("click", {food: "hamburguer"} , feed);
	$(".donut").on("click", {food: "donut"} , feed);
	$(".cupcake").on("click", {food: "cupcake"} , feed);
});

