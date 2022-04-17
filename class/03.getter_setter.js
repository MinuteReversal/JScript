function Test() {
  var value = 0;

  // unsupported
  this.__defineGetter__("value", function () {
    return value;
  });

  // unsupported
  this.__defineSetter__("value", function (val) {
    value = val;
  });
}

var test = new Test();
test.value = 999;
WScript.Echo(test.value);
