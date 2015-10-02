#pragma strict

public class BulletSprite extends SpriteCore 
{
	private var directionX = 0;
	private var directionY = 0;
	
	private var owner;

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

	function OnCollisionEnter2D(collision2D: Collision2D) 
	{
		var sprite = collision2D.collider.GetComponent.<SpriteCore>();
		var wallSprite = collision2D.collider.GetComponent.<WallSprite>();
		
		if (sprite != null) 
		{			
			if (wallSprite == null)
			{
				sprite.health -= 1;
			}
			
			health -= 1;
		}
	}
}

