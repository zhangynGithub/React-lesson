//CMD 规范，依赖就近引用
define('index', function (require, exports, module) {
    module.exports = {
        init: function () {
            var moduleA = require('./moduleA')
            moduleA.sayHello()
            document.addEventListener('click',function(){
                var moduleB = require('./moduleB')
                moduleB.sayHello()
            },false)
        }
    }
})

//moduleA.js
define('moduleA',function (require, exports, module) {
    exports.sayHello = function(){
        console.log('hello Seajs ModuleA')
    }
})

//moduleB.js
define('moduleB',function (require, exports, module) {
    exports.sayHello = function(){
        console.log('hello Seajs ModuleB')
    }
})


