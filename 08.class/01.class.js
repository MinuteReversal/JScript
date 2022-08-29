function Car() {
  this.color = "red";
  this.drive = function () {
    WScript.Echo(this.color + " car are going...");
  };
}

var car = new Car();
car.drive();

var car2 = car;
car2.color = "blue";
car.drive();
car2.drive();
