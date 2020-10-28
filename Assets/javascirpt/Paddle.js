function Paddle()
{
	var x,y,w,h;
	var MOVEMENT = 5;
	var imageIndex;

	this.init = initializer;
	this.moveLeft = left;
	this.moveRight = right;

	this.getX = xGetter;
	this.getY = yGetter;
	this.getW = wGetter;
	this.getH = hGetter;
	this.getImageIndex = imageIndexGetter;
	
	function initializer(_x, _y, _w, _h, _imageIndex)
	{
		x = _x;
		y = _y;
		w = _w;
		h = _h;
		imageIndex = _imageIndex;
	}

	function left()
	{
		x = x - MOVEMENT;
		//HARDIK: RESTRICTING PADDLE INSIDE GAME-PLAY FROM LEFT-EDGE
		if(x < 0)
			x = 0;
	}

	function right()
	{
		x = parseFloat(x) + parseFloat(MOVEMENT);
		//HARDIK: RESTRICTING PADDLE INSIDE GAME-PLAY FROM RIGHT-EDGE
		//IF X + WIDTH-OF-PADDLE GET GREATER THAN SCREEN-WIDTH THEN, WE SET X = SCREEN-WIDTH - WIDTH-OF-PADDLE
		if(x + w > SCR_W)
			x = SCR_W - w;
	}
	
	function xGetter()
	{
		return x;
	}

	function yGetter()
	{
		return y;
	}
	
	function wGetter()
	{
		return w;
	}
	
	function hGetter()
	{
		return h;
	}

	function imageIndexGetter()
	{
		return imageIndex;
	}
}