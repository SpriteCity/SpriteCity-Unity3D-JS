#pragma strict


public class ItemSprite extends SpriteCore
{
	public var healthIncrease = 1;
	public var sizeIncrease = 2;
		
	// Use this for initialization
	function Start() 
	{
		super.Start();
	}

	// Update is called once per frame
	function Update() 
	{
		super.Update();
	}

	function OnCollisionEnter2D(collision2D: Collision2D ) {
		var keyMoveSprite: KeyMoveSprite = collision2D.collider.GetComponent.<KeyMoveSprite> ();

		if (keyMoveSprite != null) 
		{			
			keyMoveSprite.health += healthIncrease;
		}

		var computerSprite: ComputerSprite = collision2D.collider.GetComponent.<ComputerSprite> ();
		
		if (computerSprite != null) 
		{			
			computerSprite.transform.localScale *= 2;
		}
		
		health = 0;
	}
}
