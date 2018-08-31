var p = Promise.resolve();

var ret = null;
console.log("outer1");

var ary = [23, 34, 45, 56, 67];
for(var i of ary) {
  console.log("test-for" , i);
  p = p.then(function(val) {
    console.log("test-promise" , i);
    console.log(val);
    return val;
  });
}
console.log("outer2");