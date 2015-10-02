#pragma strict

public class ShootySprite extends SpriteCore
{
	var speed = 10;
	var bulletSpeed = 15;
	var shootRate = 1.0;
	var shootSound: AudioClip;
	var bulletPrefab: Rigidbody2D;
	
	private var lastShot = 0.0;
	private var audioSource: AudioSource;

	// Use this for initialization
	function Start()
	{
		super.Start();
		audioSource = gameObject.AddComponent.<AudioSource>();
		audioSource.clip = shootSound;
		audioSource.volume = 1.0;
	}
    
    // Use this for initialization
    function Update()
    {
		super.Update();
    }
	
	// FixedUpdate should be used instead of Update when dealing with Rigidbody
	function FixedUpdate()
	{
		var direction = new Vector2(Input.GetAxis("SD Horizontal Move"), Input.GetAxis("SD Vertical Move"));
		
		GetComponent.<Rigidbody2D>().velocity = direction * speed;

		lastShot += Time.deltaTime;

		if (lastShot >= 1.0 / shootRate) {
			var shootDirection = new Vector2(Input.GetAxis("SD Horizontal Shoot"), Input.GetAxis("SD Vertical Shoot"));

			shootDirection.Normalize();

			if (shootDirection != Vector2.zero) {
				var bullet: Rigidbody2D;
				bullet = Instantiate(bulletPrefab, transform.position, transform.rotation) as Rigidbody2D;
				bullet.velocity = shootDirection * bulletSpeed;
			
				audioSource.Play ();

				lastShot = 0.0;
			}
		}
	}
	
	
}