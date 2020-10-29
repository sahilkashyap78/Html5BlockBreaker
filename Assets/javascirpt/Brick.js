
function Brick()
{
	var x,y,w,h;
	var brickType;
	var hitCount;
	
	this.init = initializer;

	this.getX = xGetter;
	this.getY = yGetter;
	this.getBrickType = brickTypeGetter;
	this.registerHit = addImpact;

	this.getW = wGetter;
	this.getH = hGetter;
	
	function initializer(_x, _y, _w, _h, _brickType)
	{
		x = _x;
		y = _y;
		w = _w;
		h = _h;
		brickType = _brickType;
		hitCount = 0;
	}
	
	function xGetter()
	{
		return x;
	}
	
	function yGetter()
	{
		return y;
	}
	
	function brickTypeGetter()
	{
		return brickType;
	}
	
	function addImpact()
	{
		hitCount++;
		switch(brickType)
		{
			case BRICK_ORANGE:
				brickType = BRICK_DESTROYED;
				break;
			case BRICK_BLUE:
				brickType = BRICK_ORANGE;
				break;
            case BRICK_GREEN:
                greenBrickCounter = new Date().getTime();
                isGreenActive = true;
				brickType = BRICK_DESTROYED;
				break;    
			case BRICK_GRAY:
			case BRICK_DESTROYED:
				//no action
				break;
		}
	}

	function wGetter()
	{
		return w;
	}
	
	function hGetter()
	{
		return h;
	}
}