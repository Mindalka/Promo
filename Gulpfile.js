var gulp=require("gulp");
var less=require("gulp-less");
var print = require('gulp-print');

gulp.task("style",function(){
	gulp.src("source/less/styles.less")
	.pipe(less())
	.pipe(gulp.dest("source/css"));
	
});

gulp.task('message', async function() {
  console.log("HTTP Server Started");
});

