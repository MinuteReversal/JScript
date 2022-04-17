// unsupported: getter setter
var o = {
  _color: "red",
  get color() {
    return this._color;
  },
  set color(val) {
    this._color = val;
  }
};
