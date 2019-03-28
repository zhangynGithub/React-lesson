//AMD规范，依赖在定义的时候引入
define('index', ["exports",'./moduleA','./moduleB'], function (exports,moduleA,moduleB) {
    exports.init = function () {
        moduleA.sayHello()
        document.addEventListener('click',function(){
            moduleB.sayHello();
        },false)
    }
})

//moduleA.js
define('moduleA', ["exports"],function (exports) {
    exports.sayHello = function () {
        console.log('hello Seajs ModuleA')
    }
})

//moduleB.js
define('moduleB', ["exports"], function (exports) {
    exports.sayHello = function () {
        console.log('hello Seajs ModuleB')
    }
})

//requirejs兼容了CMD/commonjs规范