// The target we are following
var target : Transform;
//The Taget we are looking at 
var lookTarget : Transform;
// The distance in the x-z plane to the target
var distance : float;
// the height we want the webcam to be relative to the target
var height : float;
// How much we dampen
var heightDamping = 2.0;
var rotationDamping = 3.0;

var myTransform : Transform;

function Awake() { myTransform = transform;  }//cache transform data for easy access/preformance

function LateUpdate () {
	// Early out if we don't have a target
	if (!target)
		return;
	
	// Calculate the current rotation angles
	var wantedRotationAngle = target.eulerAngles.y;
	var wantedHeight = target.position.y + height;
		
	var currentRotationAngle = transform.eulerAngles.y;
	var currentHeight = transform.position.y;
	
	// Damp the rotation around the y-axis
	currentRotationAngle = Mathf.LerpAngle (currentRotationAngle, wantedRotationAngle, rotationDamping * Time.deltaTime);

	// Damp the height
	currentHeight = Mathf.Lerp (currentHeight, wantedHeight, heightDamping * Time.deltaTime);

	// Convert the angle into a rotation
	var currentRotation = Quaternion.Euler (0, currentRotationAngle, 0);
	
	// Set the position of the camera on the x-z plane to:
	// distance meters behind the target
	transform.position = target.position;
	transform.position -= currentRotation * Vector3.forward * distance;

	// Set the height of the object
	transform.position.y = currentHeight;
	
	// Always look at the target
	transform.LookAt (lookTarget);
}