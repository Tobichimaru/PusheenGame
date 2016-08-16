
var info = {
	'money': 1000,
	'level': 1,
	'nowProgress': 70,
	'levelMax': 100
};

$(function () {
	$(".now-progress").text(info.nowProgress);
	$(".level-max").text(info.levelMax);
	$(".level").text(info.level);
	$(".totalMoney").text(info.money);
});