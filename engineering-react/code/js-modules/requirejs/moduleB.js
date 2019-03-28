define('moduleB', ["exports"], function (exports) {
    console.log('moduleB is loaded')
    exports.sayHello = function () {
        console.log('hello Seajs ModuleB')
    }
})