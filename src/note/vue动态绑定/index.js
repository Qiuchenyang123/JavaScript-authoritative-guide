/* @flow */
// function test(a: string) {
//     return a.split('').reverse().join('')
// }
// console.log(test('123'));

function Vue(options) {
    this.el = document.querySelector(options.el);
    this.$data = options.data;
    this.observe(this.$data, this)
    this._compileChildren(this.el);
}
// 编译
Vue.prototype._compileChildren = function(node) {
    // var frag = document.createDocumentFragment();
    this._compileNode(node)
}
Vue.prototype._compileNode = function(node) {
    switch (node.nodeType) {
        case 1: // 元素节点
            this._compileElementNode(node);
            break;
        case 3: // 文本节点
            this.compileTextNode(node);
            break;
        default:
            break;
    }
}
Vue.prototype._compileElementNode = function(node) {
    if (node.hasChildNodes()) {
        for (var i = 0, length = node.childNodes.length; i < length; i++) {
            var childNode = node.childNodes[i];
            this._compileChildren.call(this, childNode)
        }
        // Array.prototype.forEach.call(node.childNodes, this._compileChildren(), this)
    }
}
Vue.prototype.compileTextNode = function(node) {
    var content = node.nodeValue.trim();
    var reg = /{{\w+}}/;
    var matchArr = content.match(reg);
    matchArr && matchArr.length > 0 && matchArr.forEach(item => {
        var prop = item.match(/\w+/)[0];
        content = content.replace(item, this.$data[prop])
        new Watcher(this, node, prop)
    });
    node.nodeValue = content
}
// 动态监听
Vue.prototype._defineReaction = function (obj, key, value) {
    var dep = new Dep();
    Object.defineProperty(obj, key, {
        get: function () {
            if (Dep.target) dep.addSub(Dep.target)
            console.log(`获取数据${key}的值：${value}`);
            return value
        },
        set: function (val) {
            if (val === value) return;
            value = val;
            dep.notify() // 更新渲染视图
        }
    })
}
// 观察者
Vue.prototype.observe = function (obj, vm) {
    Object.keys(obj).forEach(key => {
        this._defineReaction(vm, key, this.$data[key])
    })
};
// 主题对象的构造函数
function Dep() {
    this.subs = []
}
Dep.prototype.addSub = function (sub) {
    this.subs.push(sub)
};
Dep.prototype.notify = function () {
    this.subs.forEach(sub => {
        sub.update()
    })
};
var Watcher = function (vm, node, key) {
    Dep.target = this;
    this.vm = vm;
    this.node = node;
    this.key = key;
    this.update();
    Dep.target = null
};
Watcher.prototype.get = function () {
    this.value = this.vm[this.key];
};
Watcher.prototype.update = function () {
    this.get();
    this.node.nodeValue = this.value
}
var app = new Vue({
    el: '#root',
    data: {
        name: 'Bob',
        age: 18
    }
})
document.getElementById('name').addEventListener('click', function () {
    app.name = 'Jack';
}, false)
var a = 1;