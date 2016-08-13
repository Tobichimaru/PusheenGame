$(function () {

	function feed(event) {
		var $money = $(".money p").text();
		var $price = $(".food." + event.data.food + " .price").text();
		var $calories = $(".food." + event.data.food + " .calories").text();
		if (+$money >= +$price) {
			$(".money p").text(+$money-(+$price));
			$(".cat-img").attr("src","design/img/eat-" + event.data.food + ".gif");
			setTimeout(function () {
				$(".cat-img").attr("src","design/img/pusheen.png");
			}, 1500);
			//progress
		}
	}

	$(".meat").on("click", {food: "meat"} , feed);
	$(".pizza").on("click", {food: "pizza"} , feed);
	$(".hamburguer").on("click", {food: "hamburguer"} , feed);
	$(".donut").on("click", {food: "donut"} , feed);
	$(".cupcake").on("click", {food: "cupcake"} , feed);
});
