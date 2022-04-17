function fn1() {}
function fn2(x) {}
function fn3() {
  return 666;
}
function fn4(x) {
  return x;
}

fn1();
fn2(123);
var r = fn3();
var r2 = fn4(123);
