const path = require('path');
// console.log(path);

/*
* 路径的拼接——join
* */
// console.log(path.join('./a', './b')); // a 目录下的 b 文件，将两个路径拼接在一起

/*
* __dirname
* */
// console.log(__dirname); // 当前文件所在的绝对路径
/*
* __dirname 搭配 path.join
* */
// const textPath = path.join(__dirname, './a.txt');
// console.log(textPath);

/*
* 路径拼接2——path.resolve
* 前面会直接补上当前文件的绝对路径
* */
// const textPath = path.resolve('a', 'b');
// console.log(textPath);

/*
* 返回从 a 路径到 b 路径的走法——path.relative
* */
// const textPath = path.relative('a', 'b');
// console.log(textPath);

/*
* 路径格式化——path.parse
* {
*   root,
*   dir,
*   base,
*   ext,
*   name
* }
* */
// const a = path.parse('E:\\git2020\\fxt_zhoushan\\RiskMap_ZhouShan.sln');
// console.log(a);
// {
//     root: 'E:\\',
//     dir: 'E:\\git2020\\fxt_zhoushan',
//     base: 'RiskMap_ZhouShan.sln',
//     ext: '.sln',
//     name: 'RiskMap_ZhouShan'
// }

const url = require('url');
// const result = new url.URL('https://www.shiguangkey.com/video/5404?classId=13017&videoId=199237');
// console.log(result);
// console.log(url);

// const querystring = require('querystring');
// console.log(querystring);
// let set = new Set([1, 2, 3, 4, 3, 2, 1]);
// let arr = [...set];
// console.log(arr, arr instanceof Array) // [1, 2, 3, 4]

/*
* 原生模块——fs：读取文件*/
const fs = require('fs');
// fs.readFile('./123.txt', "utf-8", function (err, data) {
//     console.log(err);
//     console.log(data);
// });
// fs.writeFile('./124.txt', 'this is 124.txt，and I changed the content', {
//     flag: 'a'
// }, function (err) {
//     console.log(err);
// });

// fs.readdir('../node', (err, data) => {
//     if (err) {
//         return
//     }
//     console.log(data);
// });

// fs.stat('../node', (err, data) => {
//     if (err) return;
//     console.log(data.isDirectory(), data.isFile());
// });