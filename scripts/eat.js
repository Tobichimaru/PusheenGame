$(function () {

	function feed(event) {
		var $money = $(".money p").text();
		var $price = $(".food." + event.data.food + " .price").text();
		var $calories = $(".food." + event.data.food + " .calories").text();
		if (+$money >= +$price) {
			$(".money p").text(+$money-(+$price));
			$(".cat-img").attr("src","design/img/eat-" + event.data.food + ".gif").attr("style", event.data.attr);
			setTimeout(function () {
				$(".cat-img").attr("src","design/img/pusheen.png").attr("style","");
			}, 1500);
			//progress
			var $progress = $(".now-progress").text();
			$(".now-progress").text(+$progress + (+$calories));
			$(".progress.percent").css("width", percentage($(".level-max").text(),$(".now-progress").text()))
		}
		else {
			$(".cat-img").attr("src","design/img/sadness.gif").attr("style", "margin: 64px 0 0 328px");
			setTimeout(function () {
				$(".cat-img").attr("src","design/img/pusheen.png").attr("style","");
			}, 2000);
		}
	}

	function percentage(max, now) {
		var p = (+now * 100) / +max;
		return p + "%";
	}

	$(".meat").on("click", {food: "meat", attr: "margin: 66px 0 0 345px; width: 265px"} , feed);
	$(".pizza").on("click", {food: "pizza", attr: "margin: 29px 0 0 300px"} , feed);
	$(".hamburguer").on("click", {food: "hamburguer", attr: "margin: -14px 0 0 313px"} , feed);
	$(".donut").on("click", {food: "donut", attr: "margin: 44px 0 0 313px"} , feed);
	$(".cupcake").on("click", {food: "cupcake", attr: "margin: -6px 0 0 332px; height: 371px"} , feed);
});

