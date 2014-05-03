#pragma strict

var walkSpeed : float = 7; //Regular speed
var sprintSpeed : float = 13; //Sprinting speed

private var charMotor : CharacterMotor;
private var charController : CharacterController;


function Start () 
{
	charMotor = GetComponent(CharacterMotor);
	charController = GetComponent(CharacterController);
}

function Update () 
{
	//Making the speed var
	var speed = walkSpeed;
	
	//Checking for sprinting
	if(charController.isGrounded && Input.GetKey("left shift") || Input.GetKey("right shift"))
	{
		//Changing the speed to Sprint
		speed = sprintSpeed;
	}
	
	charMotor.movement.maxForwardSpeed = speed; //Setting the speed
	
}