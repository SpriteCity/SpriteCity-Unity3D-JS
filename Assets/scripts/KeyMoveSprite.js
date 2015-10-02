#pragma strict

public class KeyMoveSprite extends SpriteCore
{
    var speed = 10;

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

    // FixedUpdate should be used instead of Update when dealing with Rigidbody
    function FixedUpdate()
    {
        var direction: Vector2 = new Vector2(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"));

        GetComponent.<Rigidbody2D>().velocity = direction * speed;
    }
}
