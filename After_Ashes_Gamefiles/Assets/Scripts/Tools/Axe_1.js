﻿#pragma strict

var Damage : int = 50;
var Distance : float;
var MaxDistance : float = 1.5;

function Update ()
{
	if(Input.GetButtonDown("Fire1"))
	{
	var hit : RaycastHit;
	if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit))
		{
			Distance = hit.distance;
			if(Distance < MaxDistance)
			{
				hit.transform.SendMessage("ApplyDamage", Damage, SendMessageOptions.DontRequireReceiver);
			}
		}
	}
}