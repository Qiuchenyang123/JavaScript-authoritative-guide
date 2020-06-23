// 重写 Object 的方法 keys
Object.prototype.keys2 = function() {
    console.log(this)
    var arr = [];
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            arr.push(key)
        }
    }
    return arr
};
var a = {
    b: 1,
    c: 2
};
console.log(a.keys2());
// 简单的对象拓展
function extend(destination, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) destination[key] = source[key]
    }
    return destination
}

extend({ a: 1 }, { b: 2, c: 3 });
