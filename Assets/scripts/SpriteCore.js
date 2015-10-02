#pragma strict

public class SpriteCore extends MonoBehaviour {
	public var health = 1;
	
	// Use this for initialization
	function Start () {

	}

	// Update is called once per frame
	function Update () {
		if (health <= 0) {
			Destroy (gameObject);
		}
	}
}