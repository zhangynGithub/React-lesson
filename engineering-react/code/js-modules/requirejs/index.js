define('index', ["exports",'./moduleA','./moduleB'], function (exports,moduleA,moduleB) {
    exports.init = function () {
        moduleA.sayHello()
        document.addEventListener('click',function(){
            moduleB.sayHello();
        },false)
    }
})