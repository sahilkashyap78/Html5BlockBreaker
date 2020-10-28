function Input()
{

	var leftKeyPressed;
	var rightKeyPressed;
	
	this.isLeftPressed = checkLeft;
	this.isRightPressed = checkRight;
	this.setLeftKey = leftSetter;
	this.setRightKey = rightSetter;
	
	function checkLeft()
	{
		return leftKeyPressed;
	}
	
	function checkRight()
	{
		return rightKeyPressed;
	}
	
	function leftSetter(val)
	{
		leftKeyPressed = val;
	}
	
	function rightSetter(val)
	{
		rightKeyPressed = val;
	}
}