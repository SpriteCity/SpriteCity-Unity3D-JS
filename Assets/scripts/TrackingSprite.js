#pragma strict

public class TrackingSprite extends SpriteCore {
	
	var objectToTrack: GameObject;
	var speed = 1;

	// Use this for initialization
	function Start() {
		super.Start();
	}
	
	// Update is called once per frame
	function Update() {
		super.Update();
	}
	
	// FixedUpdate should be used instead of Update when dealing with Rigidbody
	function FixedUpdate()
	{
		if (objectToTrack != null) {
			var direction = objectToTrack.transform.position - transform.position;
			direction.Normalize();

			GetComponent.<Rigidbody2D>().velocity = direction * speed;
		} else {	
			GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
		}
	}
}
