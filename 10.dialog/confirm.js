var shell = WScript.CreateObject("WScript.Shell");
var result = shell.Popup(
  "Do you feel alright?",
  7,
  "Answer This Question:",
  4 + 32
);

WScript.Echo(result);
