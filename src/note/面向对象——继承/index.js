/*面向对象*/
/*ES5 类的声明*/
function Animal(name) {
    this.name = name
}

/*ES6 类的声明*/
class Animal2 {
    constructor(name) {
        this.name = name;
    }
}

/*实例化*/
const dog = new Animal('Bob');
// console.log(dog);
const cat = new Animal2('Tom');
// console.log(cat);

/*五种实现继承的方法*/
/*1、借助构造函数实现继承*/
// 只能拿到父类的属性，不能取到父类原型对象上的的方法
// function Parent1() {
//   this.name = 'parent1'
// }
// Parent1.prototype.say = function () {
//   console.log(`I am ${this.name}`)
// };
// function Child1() {
//   Parent1.call(this);
//   this.type = 'child1'
// }
// var child1 = new Child1();
// console.log(child1.name); // parent1
// child1.say(); // 报错
/*2、借助原型链实现继承*/
// 缺陷：简单来说就是只能创建一个实例，因为Child2的原型对象指向同一个实例
// function Parent2() {
//   this.name = 'parent2'
// }
// Parent2.prototype.say = function () {
//   console.log(`I am ${this.name}`)
// };
// function Child2() {
//   this.type = 'child2'
// }
// Child2.prototype = new Parent2();
// var child2 = new Child2();
// console.log(child2.name);
/*3、组合方式*/
// 缺陷：父级构造函数执行了2次分别为标*位置,constructor指向Parent3
// function Parent3() {
//   this.name = 'parent3'
// }
// function Child3() {
//   Parent3.call(this); // *
//   this.type = 'child3'
// }
// Child3.prototype = new Parent3(); // *
// const c31 = new Child3();
// const c32 = new Child3();
// c31.name = '123';
// console.log(c31, c32);
/*4、组合方式优化1*/
// 缺陷：constructor指向Parent4
// function Parent4() {
//   this.name = 'parent4'
// }
// function Child4() {
//   Parent4.call(this);
//   this.type = 'child4'
// }
// Child4.prototype = Parent4.prototype;
// const c41 = new Child4();
// const c42 = new Child4();
// console.log(c41.constructor); // Parent4
// c41.name = '123';
// console.log(c41, c42);
/*5、组合方式优化2*/
// function Parent5() {
//   this.name = 'parent5'
// }
// function Child5() {
//   Parent5.call(this);
//   this.type = 'child5'
// }
// Child5.prototype = Object.create(Parent5.prototype);
// Child5.prototype.constructor = Child5;
// const c51 = new Child5();
// const c52 = new Child5();
// console.log(c51, c52);
// console.log(c51.constructor);
