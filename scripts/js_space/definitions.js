var score = 0;
var level = 0;
var lives = 3;
var newLevel = 11500;
var fade = 50;

var generateSpeeds = {
	"images/img_space/meteor.png": 1500,
	"images/img_space/comet.png": 2000,
	"images/img_space/asteroid.png": 3000,
	"images/img_space/spaceship.png": 3500,
	"images/img_space/like.png": 20000,
};

var moveSpeeds = {
	"images/img_space/meteor.png": 100,
	"images/img_space/comet.png": 100,
	"images/img_space/asteroid.png": 100,
	"images/img_space/spaceship.png": 90,
	"images/img_space/like.png": 50,
};

var itemsScores = {
	"images/img_space/meteor.png": 10,
	"images/img_space/comet.png": 15,
	"images/img_space/asteroid.png": 20,
	"images/img_space/spaceship.png": 20,
	"images/img_space/like.png": 50,
};

var spaceStone = {
	"images/img_space/meteor.png": [],
	"images/img_space/comet.png": [],
	"images/img_space/asteroid.png": [],
	"images/img_space/spaceship.png": [],
	"images/img_space/like.png": [],
};
