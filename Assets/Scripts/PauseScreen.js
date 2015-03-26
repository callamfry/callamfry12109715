#pragma strict
var toggleSound : UnityEngine.UI.Toggle;
var pauseCanvas : Canvas;
var walkTutorial : Canvas;
var jogTutorial : Canvas;
var runTutorial : Canvas;
var stairsTutorial : Canvas;
var crouchTutorial : Canvas;
var logTutorial : Canvas;
var hopTutorial : Canvas;
var gameComplete : Canvas;
var triggerCount : int;

var Trigger : UnityEngine.Object;

function Start () {
		Screen.lockCursor = true;
		Screen.showCursor = false;
}

function Update () {//Press escape to pause game
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		pauseCanvas.enabled = true;
		Time.timeScale = 0;
		Screen.lockCursor = false;
		Screen.showCursor = true;
	}
}

function ResumeGame () {
		pauseCanvas.enabled = false;
		walkTutorial.enabled = false;
		jogTutorial.enabled = false;
		runTutorial.enabled = false;
		stairsTutorial.enabled = false;
		crouchTutorial.enabled = false;
		logTutorial.enabled = false;
		hopTutorial.enabled = false;
		Time.timeScale = 1;
		Screen.lockCursor = true;
		Screen.showCursor = false;
}

function SoundToggle (){
		if (toggleSound.isOn == false){
			AudioListener.pause = true;
		}
		else if (toggleSound.isOn == true){
			AudioListener.pause = false;
		}	
}


function ExitToMainMenu () {
		pauseCanvas.enabled = false;
		Application.LoadLevel("Menu");
		Time.timeScale = 1;
}

function ExitGame () {
		Application.Quit();
}


function OnTriggerEnter (Col : Collider) {//Tutorial triggers
	if(Col.tag == "Player")
	{
		if (triggerCount == 0){
			walkTutorial.enabled = true;
			Time.timeScale = 0;
			Screen.lockCursor = false;
			Screen.showCursor = true;
			Destroy(Trigger);
			}
		else if(triggerCount == 1){
			jogTutorial.enabled = true;
			Time.timeScale = 0;
			Screen.lockCursor = false;
			Screen.showCursor = true;
			Destroy(Trigger);
		}
		else if(triggerCount == 2){
			runTutorial.enabled = true;
			Time.timeScale = 0;
			Screen.lockCursor = false;
			Screen.showCursor = true;
			Destroy(Trigger);
		}
		else if(triggerCount == 3){
			stairsTutorial.enabled = true;
			Time.timeScale = 0;
			Screen.lockCursor = false;
			Screen.showCursor = true;
			Destroy(Trigger);
		}
		else if(triggerCount == 4){
			crouchTutorial.enabled = true;
			Time.timeScale = 0;
			Screen.lockCursor = false;
			Screen.showCursor = true;
			Destroy(Trigger);
		}
		else if(triggerCount == 5){
			logTutorial.enabled = true;
			Time.timeScale = 0;
			Screen.lockCursor = false;
			Screen.showCursor = true;
			Destroy(Trigger);
		}
		else if(triggerCount == 6){
			hopTutorial.enabled = true;
			Time.timeScale = 0;
			Screen.lockCursor = false;
			Screen.showCursor = true;
			Destroy(Trigger);
		}
		else if(triggerCount == 7){
			gameComplete.enabled = true;
			Time.timeScale = 0;
			Screen.lockCursor = false;
			Screen.showCursor = true;
			Destroy(Trigger);
		}
	}
}


