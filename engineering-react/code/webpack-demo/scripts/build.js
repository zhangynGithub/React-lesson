#!/usr/bin/env node
let path = require('path');
let { exec } = require('child_process');
let rimraf = require('rimraf');

process.env.WEBROOT = process.argv.pop();
let root = './dist';

rimraf(root, function () {//清除原打包文件夹
    let free = exec('npm run ant');

    free.stdout.on('data', function (data) {
        console.log(data.toString());
    });
    free.stderr.on('data', function (data) {
        console.error(data.toString());
    });
    free.on('exit', function (code, signal) {
        // replaceHtml()
    });
})

//替换html引用相对路径地址
// function replaceHtml() {
//     var fs = require("fs");
//     var path = require('path');
//     fs.readdir(root, function (code, ls) {
//         ls.forEach(function (item) {
//             if (/\.html$/.test(item)) {
//                 var data = fs.readFileSync(path.join(root, item), "utf-8");
//                 fs.writeFile(path.join(root, item), data.replace(/\.\.\//g, './'), (err) => {
//                     if (err) throw err;
//                 });
//             }
//         })
//     });
// }