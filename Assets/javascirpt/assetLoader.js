var allImages;
var allImagePaths;
var totalImages;
var loadedImageCount;

var GAME_BG;
var BALL_IMG;
var BRICK_ORANGE_IMG;
var BRICK_BLUE_IMG;
var BRICK_GRAY_IMG;
var PADDLE_IMG;
var GAME_OVER_IMG;

function loadImages()
{
	allImagePaths = new Array();
	var i = 0;
	allImagePaths[i] = IMAGES_PATH + "game_bg.png";
	GAME_BG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "ball.png";
	BALL_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "brick_orange.png";
	BRICK_ORANGE_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "brick_blue.png";
	BRICK_BLUE_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "brick_gray.png";
	BRICK_GRAY_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "paddle.png";
	PADDLE_IMG = i;
	i++;
	
	allImagePaths[i] = IMAGES_PATH + "game_over.png";
	GAME_OVER_IMG = i;
	i++;
	
	totalImages = i;
	
	loadedImageCount = 0;
	allImages = new Array();
	for(i = 0; i < totalImages; i++)
	{
		allImages[i] = new Image();
		allImages[i].onload = imageLoaded;
		allImages[i].src = allImagePaths[i];
	}
}

function imageLoaded()
{
	loadedImageCount++;
	if(loadedImageCount != totalImages)
		return;
	
	startGameLoop();
}