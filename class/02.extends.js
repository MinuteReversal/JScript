function Vehicle() {
  this.drive = function () {
    WScript.Echo("Vehicle are going...");
  };
}

function Car(color) {
  this.color = color;
  this.drive = function () {
    WScript.Echo(this.color + " car are going...");
  };
}
Car.prototype = new Vehicle();

var car = new Car("red");
car.drive();
