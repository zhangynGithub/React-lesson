var moduleA = require('../modules/moduleA');
var arr = [1,2,3,4,5];
console.log(arr);
moduleA((res) =>{
    let tpl = '<ul>';
    $(res).each((i,item) =>{
        tpl += `<li><img src="${item.path}" width="100" height="100"/></li>`
    })
    tpl+='</ul>'
    $("body").append(tpl);
});

[1,2,3,4,5,6].forEach(item =>{
    console.log(item)
})

// var moduleB = require('../modules/moduleB');
// moduleB.getMA().then(function(res){
//     alert(res.code)
// }).catch(function(res){
//     alert(res.code)
// })