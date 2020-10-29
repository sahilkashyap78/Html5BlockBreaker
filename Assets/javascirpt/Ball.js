function Ball()
{
	var x,y,w,h;
	var speed, pathSlope;
	var prevX, prevY;
	var imageIndex;

	this.init = initializer;
	this.ballMovement = moveBall;
	this.ballMoveCancel = moveCancel;
	this.reflectHorizontally = horizontalReflect;
	this.refectVertically = verticalReflect;
    this.setMoreSpeed = increaseSpeed;
    this.setNormalSpeed = normalSpeed;
	this.getX = xGetter;
	this.getY = yGetter;
	this.getPrevX = prevXGetter;
	this.getPrevY = prevYGetter;
	this.getW = wGetter;
	this.getH = hGetter;
	this.getImageIndex = imageIndexGetter;
	
	function initializer(_x, _y, _w, _h, _speed, _pathSlope, _imageIndex)
	{
		x = _x;
		y = _y;
		prevX = x;
		prevY = y;
		w = _w;
		h = _h;
		speed = _speed; //PIXELS PER SECOND
		pathSlope = _pathSlope; // DEGREES
		imageIndex = _imageIndex;
	}

// Update 1 occurs at 22:32:10:50 -> Update 2 occurs at 22:32:10:80
// Suppose ball moves at a speed of 100 pixels per second
// dt = 30 milliseconds = 0.03 seconds
// distance = speed x dt
// distance = 100 x 0.03
// distance = 3 px
	function moveBall(timeElapsed) // timeElapsed is the difference in time between the last and current update
	{
		prevX = x;
		prevY = y;
		var distance = (timeElapsed / 1000) * speed;
		var dx = distance * Math.cos(pathSlope * (3.14 / 180));
		var dy = distance * Math.sin(pathSlope * (3.14 / 180));
		x = parseFloat(x) + parseFloat(dx);
		y = parseFloat(y) - parseFloat(dy);
	}

	function moveCancel()
	{
		x = prevX;
		y = prevY;
	}

	function verticalReflect() // is when ball reflects vertically when it collides with a horizontal surface
	{
		pathSlope = -pathSlope;
	}

	function horizontalReflect() // is when ball reflects horizontally when it collides with a vertical surface
	{
		pathSlope = 180 - pathSlope;
	}
    
    function increaseSpeed()
    {
        speed = 600;
    }
    
    function normalSpeed()
    {
        speed = 400;
    }

	function xGetter()
	{
		return x;
	}

	function yGetter()
	{
		return y;
	}
	
	function prevXGetter()
	{
		return prevX;
	}

	function prevYGetter()
	{
		return prevY;
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