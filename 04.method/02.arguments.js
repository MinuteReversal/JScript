function log() {
  for (var i = 0; i < arguments.length; i++) {
    WScript.Echo(arguments[i]);
  }
}

log(1, 2, 3, 4, 5);
