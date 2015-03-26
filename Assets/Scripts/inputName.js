#pragma strict

var username : String;
var inputField : UnityEngine.UI.InputField;
var nameDisplay : UnityEngine.UI.Text;

function NameInput () {
   username = inputField.text;
   nameDisplay.text = username;
   inputField.enabled = false;
}