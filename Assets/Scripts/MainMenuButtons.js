#pragma strict
var toggleSound : UnityEngine.UI.Toggle;

function StartGame () {
Application.LoadLevel("Main");
}

function ExitGame () {
Application.Quit();
}

function SoundToggle (){
		if (toggleSound.isOn == false){
			AudioListener.pause = true;
		}
		else if (toggleSound.isOn == true){
			AudioListener.pause = false;
		}	
}
