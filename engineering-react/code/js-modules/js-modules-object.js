//普通对象模式，方法、属性挂载到一个顶级对象上面，减少对象污染风险
//内部方法、属性可以被修改，覆盖
var Tools = {
    fixNumber : function(n){
        if(isNaN(Number(n))){
            throw Error(`${n} is not a number`)
        }
        return n<10?'0'+n:n;
    }
}

//构造函数模式，每次new动作会创建一份单独空间，this指向。
//prototye指向原型链，多个new对象共享
function Swiper(opts){
    this.el = opt.el;
    //...
}

Swiper.prototype.slideNext = function(){
    //...
}

//闭包模式，抛出固定对象，内部定义局域变量，外部不可操作
(function( window, undefined ) {
    var jQuery = function( selector, context ) {
		return new jQuery.fn.init( selector, context, rootjQuery );
    }
    //...
    window.jQuery = window.$ = jQuery;
})(window)

