define('moduleB',function (require, exports, module) {
    console.log('moduleB is loaded')
    exports.sayHello = function(){
        console.log('hello Seajs ModuleB')
    }
})