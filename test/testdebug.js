var debug = require('debug')('myapp');
debug('现在的时间是 %s', new Date());

var foo = function () {
    debug('现在的时间是 %s', new Date());
    //    console.time('timer1');
    var a = 3,
        b = 5;
    debugger;
    var bar = function () {
        var b = 7,
            c = 11;
        a += b + c;
    }
    bar();
    debugger;
    //  console.timeEnd('timer1');
};
foo();