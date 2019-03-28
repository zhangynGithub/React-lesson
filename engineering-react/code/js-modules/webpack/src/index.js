let moduleA = require('./moduleA');
moduleA.sayModuleA()

import moduleB from './moduleB';
moduleB.sayHello();

import {name,age} from './moduleC';
console.log(name,age);