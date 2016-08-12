function KeyPressed(e) {
	var unicode = e.keyCode ? e.keyCode : e.charCode;

	var allowedSpace = parseInt(document.getElementById("game_field").offsetWidth,
		10) - parseInt(document.getElementById("cat").offsetWidth, 10);
	var step = allowedSpace / 3;

	var position = parseInt(getComputedStyle(document.getElementById('cat')).left,
		10);
	var cat = document.getElementById('cat');

	if (unicode == 37 && position > 0) {
		cat.style["left"] = position - step;
		cat.className = "";
	}

	if (unicode == 39 && position < allowedSpace) {
		cat.style["left"] = position + step;
		cat.className = "flip_image";
	}
}

function CreateItem(name) {
	var width = document.getElementById("game_field").offsetWidth;
	var item = document.createElement("img");

	item.src = name;
	item.style.position = "absolute";
	item.style.top = 0;
	item.style.left = Math.random() * (width - 70);

	food[name].push(item);
	document.getElementById("game_field").appendChild(item);
	setTimeout(function() {
		CreateItem(name);
	}, generateSpeeds[name]);
}

function MoveItem(name) {
	var length = food[name].length;
	var heigth = document.getElementById("game_field").offsetHeight;

	for (var i = 0; i <= length; i++) {
		if (food[name][i] == undefined) continue;

		var position = parseInt(food[name][i].style.top, 10);
		food[name][i].style.top = position + 30;

		if (position + 64 > heigth) {
			document.getElementById("game_field").removeChild(food[name][i]);
			food[name].splice(i, 1);
			document.getElementById(lives).className = "hidden";
			lives--;
			if (lives == 0) {
				if (!alert('Game over!')) {
					window.location.reload();
				}
			}
		}
	}

	IsEaten(name);
	setTimeout(function() {
		MoveItem(name);
	}, moveSpeeds[name]);
}

function IsEaten(name) {
	var length = food[name].length;
	for (var i = 0; i <= length; i++) {
		if (food[name][i] == undefined) continue;

		var heigth = document.getElementById("game_field").offsetHeight;
		var positionTop = parseInt(food[name][i].style.top, 10);
		var positionLeft = parseInt(food[name][i].style.left, 10);
		var positionCatLeft = parseInt(document.getElementById("cat").style.left, 10);

		var catHeight = document.getElementById("cat").clientHeight;
		var catWidth = document.getElementById("cat").clientWidth;

		if (positionTop > heigth - catHeight && positionLeft - positionCatLeft <
			catWidth && positionLeft > positionCatLeft) {
			score += itemsScores[name];
			document.getElementById('score').innerHTML = score;
			document.getElementById("game_field").removeChild(food[name][i]);
			food[name].splice(i, 1);

			var item = document.createElement("div");
			item.className = "happy-circle";
			item.style.left = positionCatLeft + catWidth / 2;
			item.style.opacity = 0.5;
			document.getElementById("game_field").appendChild(item);
			FadeAway(item);
		}
	}
}

function FadeAway(item) {
	console.log(item);
	if (item.style.opacity <= 0)
		document.getElementById("game_field").removeChild(item);
	else {
		item.style.opacity -= 0.1;
		setTimeout(function() {
			FadeAway(item);
		}, fade);
	}
}
