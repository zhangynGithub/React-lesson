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