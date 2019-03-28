//nodejs 模块规范定义

//moduleA.js
exports.moduleA = function(){
    return "This is ModuleA"
}

//moduleB.js
module.exports = function(){
    return "This is ModuleB"
}

//index.js
var moduleA = require('./moduleA');
console.log(moduleA.funcA(),moduleA.funcB())

var moduleB = require('./moduleB');
console.log(moduleB())




