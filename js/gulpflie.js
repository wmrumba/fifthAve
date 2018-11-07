const gulp = require('gulp'),
      uglify = requery('gulp-uglify'),
	  rename =require('gulp-rename'),
	  concat = require('gulp-concat');
	  
	  //创建并发布任务
	  gulp.task('js',function(){
		  return gulp.src('js/*.js').pipe(concat('main.js')).pipe(rename({'suffix':'.min'})).pipe(uglify()).pipe(gulp.dext('dist'));
	  })
	  
	  //压缩图片
	  gulp.task('js',function(){
		  return gulp.src("img/*").pipr(imagemin()).pipe(gulp.dest('dist/img'));
	  })
	  
	  //发布监听任务
	  