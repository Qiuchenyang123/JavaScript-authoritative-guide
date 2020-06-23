Function.prototype.apply2 = function () {
    var context = this;
    var that = Array.prototype.shift.apply(arguments);
    var args = arguments[0];
    that.fn = context;
    var params = '';
    for (var i = 0, length = args.length; i < length; i++) {
        var arg = args[i];
        params += i === (length - 1) ? arg : (arg + ',')
    }
    eval('that.fn(' + params + ')');
    delete that.fn
};
Function.prototype.call2 = function () {
    var context = this;
    var that = Array.prototype.shift.apply(arguments);
    var args = arguments;
    that.fn = context;
    var params = '';
    for (var i = 0, length = args.length; i < length; i++) {
        var arg = args[i];
        params += i === (length -1) ? arg : (arg + ',')
    }
    console.log('arg: ', args);
    console.log('params: ', params);
    eval('that.fn' + '(' + params + ')');
    delete that.fn
};
Function.prototype.bind2 = function () {
    var context = this;
    var that = Array.prototype.shift.apply(arguments);
    var args = arguments;
    var params = '';
    that.fn = context;
    for (var i = 0, length = args.length; i < length; i++) {
        var arg = args[i];
        params += i === (length - 1) ? arg : (arg + ',')
    }
    return function () {
        eval('that.fn(' + params + ')');
        delete that.fn
    }
};

function logTest(txt, txt2) {
    console.log(this.name + txt + txt2)
}
var obj = {
    name: 'Pop'
};
// logTest.call2(obj, '123', '456', 7);
// logTest.apply2(obj, ['123', '456', 7]);
logTest.bind2(obj, ['123', '456', 7])();
