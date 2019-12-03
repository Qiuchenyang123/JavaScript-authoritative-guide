/* 13 Web 浏览器中的 JavaScript */
/* 13.1 客户端 JavaScript */
// 全局对象 window
console.log('====================================');
console.log(window);
console.log('====================================');

// 13.1.1 Web 文档里的 JavaScript
// JavaScript 程序可以通过 Document 对象和它包含的 Element 对象遍历和管理文档内容
// 用户体验不应依赖于 JavaScript，但可以通过 JavaScript 提高体验

// 13.1.2 Web 应用里的 JavaScript

/* 13.2 在 HTML 里嵌入 JavaScript */
// 4种方式：
// 1、内联，放置在<script></script>标签之间
// 2、放置在由 script 标签引入的 src 属性指定的外部文件中
// 3、放置在 HTML 事件处理程序中，例如 <button onclick="alert(1)"></button>
// 4、放在一个 URL 里，这个 URL 使用特殊的 “JavaScript” 协议。
const getCurrentTime = function() {
    const time = new Date();
    const yyyy = time.getFullYear();
    const MM = time.getMonth() + 1 < 10 ? ('0' + time.getMonth() + 1) : (time.getMonth() + 1);
    const DD = time.getDate() < 10 ? ('0' + time.getDate()) : time.getDate();
    const HH = time.getHours() < 10 ? ('0' + time.getHours()) : time.getHours();
    const mm = time.getMinutes() < 10 ? ('0' + time.getMinutes()) : time.getMinutes();
    const ss = time.getSeconds() < 10 ? ('0' + time.getSeconds()) : time.getSeconds();
    return yyyy + '-' + MM + '-' + DD + ' ' + HH + ':' + mm + ':' + ss
};
const handleLoadFunction = function() {
    const root = document.getElementById('root');
    root.innerHTML = getCurrentTime();
    setTimeout(handleLoadFunction, 1000);
};

window.onload = handleLoadFunction;
