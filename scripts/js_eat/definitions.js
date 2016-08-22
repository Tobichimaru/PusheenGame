var score = 0;
var level = 0;
var lives = 3;
var newLevel = 11500;
var fade = 50;

var generateSpeeds = {
	"images/img_eat/apple.png": 4500,
	"images/img_eat/cupcake.png": 4750,
	"images/img_eat/doughnut.png": 5000,
	"images/img_eat/meat.png": 5250,
	"images/img_eat/pizza.png": 5500,
	"images/img_eat/like.png": 15000
};

var moveSpeeds = {
	"images/img_eat/apple.png": 250,
	"images/img_eat/cupcake.png": 200,
	"images/img_eat/doughnut.png": 150,
	"images/img_eat/meat.png": 100,
	"images/img_eat/pizza.png": 50,
	"images/img_eat/like.png": 50
};

var itemsScores = {
	"images/img_eat/apple.png": 10,
	"images/img_eat/cupcake.png": 15,
	"images/img_eat/doughnut.png": 20,
	"images/img_eat/meat.png": 25,
	"images/img_eat/pizza.png": 30,
	"images/img_eat/like.png": 50,
};

var food = {
	"images/img_eat/apple.png": [],
	"images/img_eat/cupcake.png": [],
	"images/img_eat/doughnut.png": [],
	"images/img_eat/meat.png": [],
	"images/img_eat/pizza.png": [],
	"images/img_eat/like.png": []
};
