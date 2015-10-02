#pragma strict

public class ComputerSprite extends SpriteCore 
{
	public var damage = 1;
	public var speed = 1;
	public var decisionInterval = 1.0; 
	
	private var lastDecision = 0.0;
	private var rigidBody: Rigidbody2D;
	
	// Use this for initialization
	function Start() 
	{
		super.Start();
		rigidBody = GetComponent.<Rigidbody2D>();
	}

	// Update is called once per frame
	function Update() 
	{
		super.Update();
	}
	
	// FixedUpdate should be used instead of Update when dealing with Rigidbody
	function FixedUpdate()
	{
		lastDecision += Time.deltaTime;

		if (lastDecision > decisionInterval) 
		{
			var direction = Random.rotation * Vector2.up;

			direction.Normalize();
		
			rigidBody.velocity = direction * speed;

			lastDecision = 0;
		}
	}
	
	function OnCollisionEnter2D(collision2D: Collision2D) 
	{
		var keyMoveSprite: KeyMoveSprite;
		keyMoveSprite = collision2D.collider.GetComponent.<KeyMoveSprite>();
		
		if (keyMoveSprite != null) 
		{			
			keyMoveSprite.health -= damage;
		}
	}
}