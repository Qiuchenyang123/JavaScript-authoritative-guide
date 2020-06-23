/* flow */
// var a = {
//     2: 4,
//     3: 5,
//     length: 3
// };
// Object.prototype.push = Array.prototype.push;
// Object.prototype.splice = Array.prototype.splice;
// a.push(1);
// console.log(a); // [empty, 4, 1]

// var a2 = [1, , 3];
// var newArr3 = [];
// a2.forEach((item, index, array) => {
//     newArr3.push(item * 2)
// });
// console.log(newArr3) // [2, 4, 6]

// var a3 = {
//     0: 2,
//     1: 3,
//     2: 4,
//     length: 4
// };
// Object.prototype.forEach = Array.prototype.forEach;
// Object.prototype.splice = Array.prototype.splice;
// var newArr4 = [];
// a3.forEach((item, index, array) => {
//     console.log(1)
//     newArr4.push(item)
// });
// console.log(newArr4)

// var a = [1, 2, 3];
// console.log(a.filter(Boolean)) // [1, 2, 3]
// console.log(Boolean);

// function f(arr) {
//     // return arr.map(item => {Math.max(...item)})
//     return arr.map(Function.prototype.apply.bind(Math.max, null))
// }
// // arr.map(Function.prototype.apply.bind(Math.max, null)) =>
// // arr.map(Math.max.apply.bind(Math.max, null)) =>
// // arr.map(Math.max.apply(null, Math.max))
// var arr = [
//     [1, 2, 3, 4],
//     [22, 33, 44, 55],
//     [111, 2, 3 ,3 ,4, 4],
//     [22, 2, 2, 2,3 ,4,5]
// ];
// console.log(f(arr));