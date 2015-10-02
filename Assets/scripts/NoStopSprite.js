#pragma strict

public class NoStopSprite extends SpriteCore
{
	var speed = 1;

	private var previousDirection: Vector2;

    // Use this for initialization
    function Start()
    {
		super.Start();
    }
    
    // Use this for initialization
    function Update()
    {
		super.Update();
    }

	// FixedUpdate should be used instead of Update when dealing with Rigidbody
	function FixedUpdate()
	{
		var direction = new Vector2(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"));

		if (direction == Vector2.zero) {
			direction = previousDirection;
		} else {
			previousDirection = direction;
		}

		direction.Normalize();

		var velocity = direction * speed;

		GetComponent.<Rigidbody2D>().velocity = velocity;

	}
}
