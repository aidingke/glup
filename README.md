# Gulp Example/Starter App

通过Gulp的案例,让大家可以理解怎样通过Gulp去应用对应的插件,解决对应的问题

### Version
1.0.0

##Dependencies
gulp-imagemin
gulp-concat
gulp-uglify
gulp-sass

## Install Dependencies
```bash
npm install
```

## Run all tasks
```bash
gulp
```

## Watch all tasks/files
```bash
gulp watch
```


//笔记
1 cd 根目录 2 npm init 3 npm install gulp -g 全局 4 npm install gulp --save-dev

5 gulp copyHtml //拷贝命令函数，自己定义的
6 npm install gulp-imagemin --save-dev  执行npm 安装图片压缩命令
7 gulp imageMin
//安装js压缩模块
npm install gulp-uglify --save-dev
Gulp minify
//定义默认任务 命令 gulp
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'minify']);
//安装合并工具
npm install gulp-concat --save-dev

