/*手写封装ajax*/
// 步骤：
// 1、创建异步对象 var xmlHttp = new XMLHttpRequest() 注意：(ActiveXObject(兼容IE5、6))
// 2、设置请求行 xmlHttp.open(type, url, async) 注意 type === 'get' 时，参数放 url 上；post 时，参数放 send 方法里
// 3、设置请求头 xmlHttp.setRequestHeader('Content-type', 'application/' + dataType)
// 4、发送请求 xmlHttp.send() 如果是 post 请求，需要把参数传过去
// 5、异步对象接受服务器响应数据 xmlHttp.onreadystatechange = function() {} xmlHttp.status === 200 && xmlHttp.readyState === 4 时请求成功
function Ajax(params) {
    // arguments: {url, async, type, dataType, data, success, error}
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    if (xmlHttp !== null) {
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                console.log(xmlHttp);
                params.success(JSON.parse(xmlHttp.response))
            } else {
                params.error(xmlHttp.responseText)
            }
        };
        xmlHttp.open(params.type, params.url, params.async);
        xmlHttp.setRequestHeader('Content-type', 'application/' + params.dataType);
        xmlHttp.send(params.data) // "uniqueCode": "dike",
    }
}
// Ajax({
//     url: 'http://106.14.46.221:8701/statistics/engineering/list',
//     async: false,
//     data: {},
//     dataType: 'json',
//     type: 'GET',
//     success: function (res) {
//         console.log(res);
//     },
//     error: function (err) {
//         console.log(err);
//     }
// });
// 练习2——添加默认设置
// function Ajax2(params) {
//     var setting = {
//         url: params.url || '',
//         data: params.data || {},
//         dataType: 'application/' + (params.dataType || 'json'),
//         type: params.type || 'get',
//         async: params.async !== undefined ? params.async : true,
//         success: params.success || function () {},
//         error: params.error || function () {}
//     };
//     var xmlHttp;
//     if (window.XMLHttpRequest) {
//         xmlHttp = new XMLHttpRequest()
//     } else if (window.ActiveXObject) {
//         xmlHttp = new ActiveXObject('microsoft.XMLHTTP')
//     }
//     if (xmlHttp) {
//         xmlHttp.onreadystatechange = function () {
//             if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
//                 setting.success(JSON.parse(xmlHttp.response))
//             } else {
//                 setting.error(xmlHttp.responseText)
//             }
//         };
//         if (setting.type.toLowerCase() === 'get') {
//             setting.url += '?';
//             var keys = Object.keys(setting.data);
//             var length = keys.length;
//             keys.forEach((key, index) => {
//                 setting.url += key + '=' + setting.data[key] + (index === (length - 1) ? '' : '&')
//             });
//             xmlHttp.open(setting.type, setting.url, setting.async);
//             xmlHttp.setRequestHeader('Content-type', setting.dataType);
//             xmlHttp.send()
//         } else {
//             xmlHttp.open(setting.type, setting.url, setting.async);
//             xmlHttp.setRequestHeader('Content-type', setting.dataType);
//             xmlHttp.send(params.data)
//         }
//
//     }
// }
// Ajax2({
//     url: 'http://106.14.46.221:8701/statistics/county/list',
//     async: false,
//     data: {uniquecode: 'dike'},
//     dataType: 'json',
//     type: 'GET',
//     success: function (res) {
//         console.log('success', res);
//     },
//     error: function (err) {
//         console.log('error', err);
//     }
// });

/*手写 Promise 封装Ajax*/
function Ajax_Promise(params) {
    return new Promise((resolve, reject) => {
        let setting = {
            url: params.url || '',
            data: params.data || {},
            dataType: 'application/' + (params.dataType || 'json'),
            type: params.type || 'get',
            async: params.async !== undefined ? params.async : true,
        };
        let xmlHttp;
        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest()
        } else if (window.ActiveXObject) {
            xmlHttp = new ActiveXObject('microsoft.XMLHTTP')
        }
        if (xmlHttp) {
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    resolve(JSON.parse(xmlHttp.response))
                } else if (xmlHttp.readyState === 4) {
                    reject(xmlHttp.response)
                }
            };
            if (setting.type.toLowerCase() === 'get') {
                const keys = Object.keys(setting.data);
                const length = keys.length;
                setting.url += '?';
                keys.forEach((key, index) => {
                    setting.url += key + '=' + setting.data[key] + (index === (length -1) ? '' : '&')
                });
                xmlHttp.open(setting.type, setting.url, setting.async);
                xmlHttp.setRequestHeader('Content-type', setting.dataType);
                xmlHttp.send()
            } else {
                xmlHttp.open(setting.type, setting.url, setting.async);
                xmlHttp.setRequestHeader('Content-type', setting.dataType);
                xmlHttp.send(setting.data)
            }
        }
    })
}
// Ajax_Promise({
//     url: 'http://106.14.46.221:8701/statistics/county/list',
//     async: false,
//     data: {uniquecode: 'dike'},
//     dataType: 'json',
//     type: 'GET',
// }).then((res) => {
//     console.log('resolve', res);
// }).catch((err) => {
//     console.log(err);
// });

/*手写 Promise*/
// Promise 实例化时需要传入一个函数： fn，Promise 在实例化时会调用 fn;
// Promise 有一个实例方法 then，以及一个私有方法 resolve，
// 可以写一个简单的构造函数
// const a = new Promise((resolve, reject) => {
//     resolve(2)
// }).then((res) => {
//     console.log(res);
// }, (error) => {
//     console.log(error);
// })
function Promise2(func) {
    this.func = func;
    this.callbacks = [];
    setTimeout(() => {
        this.render()
    });
}
Promise2.prototype.then = function (resolve, reject) {
    this.callbacks.push(resolve);
};
Promise2.prototype.render = function () {
    this.callbacks.forEach((resolve) => {
        const ret = this.func(resolve);
        return ret ? ret : this
    })
};

const p = new Promise2(function (resolve) {
    setTimeout(() => {
        resolve(1)
    })
});
p.then((res) => {
    console.log(res);
});
p.then(res => {
    console.log(2, res)
});