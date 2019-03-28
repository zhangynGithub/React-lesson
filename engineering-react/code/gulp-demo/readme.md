# gulp demo

``` bash
# install dependencies
npm install

# 开发环境 localhost:8001
npm start

# 打包命令
npm run build

```
# 目录说明
```
│  .gitignore
│  gulpfile.js
│  package-lock.json
│  package.json
│  readme.md
│
└─src
    │  index.html //页面文件
    │
    ├─css
    │  ├─modules //css模块
    │  └─router //css入口文件
    │
    ├─images
    │
    ├─js
    │  ├─modules //js模块
    │  └─router  //js入口文件
    │
    └─statics //直接拷贝到dest目录
```