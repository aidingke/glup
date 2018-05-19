//引入gulp
var gulp = require("gulp");
var imagemin = require("gulp-imagemin")
var uglify = require("gulp-uglify")
var concat =require("gulp-concat")

gulp.task('message',function(){
	return console.log("gulp is running!")
})

gulp.task("default",function(){
  return console.log('这是默认的任务，只需执行gulp即可！');
});


gulp.task('copyHtml',function(){
  gulp.src("src/*.html")
      .pipe(gulp.dest('dist'));
});

//图片压缩
gulp.task("imageMin",function(){
	gulp.src("src/images/*")
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
})

//压缩js文件
gulp.task('minify',function(){
  gulp.src("src/js/*.js")
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

//定义默认任务 命令 gulp
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'scripts']);

//代码合并
gulp.task('scripts',function(){
  gulp.src("src/js/*.js")
      .pipe(concat("main.js"))//合并成一个js
      .pipe(uglify()) //压缩到指定文件夹
      .pipe(gulp.dest('dist/js'))
});





//监听文件
gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
});






