//index.js
let moduleA = require('./moduleA');
moduleA.sayModuleA()

import moduleB from './moduleB';
moduleB.sayHello();

import {name,age} from './moduleC';
console.log(name,age);

//moduleA.js
exports.sayModuleA = function(){
    console.log('hello webpack ModuleA')
}

//moduleB.js
export default {
    sayHello: function () {
        console.log('hello webpack ModuleB')
    }
}

//moduleC.js
let name = "李四";
let age = 20;
export { name, age };