function prompt(title, propopsal) {
  var ie = new ActiveXObject("internetexplorer.application");
  ie.Navigate("about:blank");
  response = ie.document.parentWindow.prompt(title, propopsal);
  ie.Quit();
  return response;
}
WScript.Echo(prompt("hi", "test"));
