const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
	  rename = require('gulp-rename'),
	  concat = require('gulp-concat'),
	  imagemin = require('gulp-imagemin'),
		sass = require('gulp-sass');
	  cssnano = require('gulp-cssnano')
	  //ѹ��ͼƬ
	  gulp.task('js',function(){
		  return gulp.src("./img/*").pipe(imagemin()).pipe(gulp.dest('dist/img'))
	  })
		//������ҳ
		gulp.task('sass',function(){
			return gulp.src("src/sass/*.scss").pipe(sass()).pipe(rename({"suffix" : ".min"}))
			// .pipe(cssnano())
			.pipe(gulp.dest('css'));
		})
		gulp.task('default',function(){
			gulp.watch('src/sass/*.scss',['sass']);
		})
		
		//����login
		gulp.task('sass1',function(){
			return gulp.src("src/sass/register.scss").pipe(sass()).pipe(rename({"suffix" : ".min"}))
			 .pipe(cssnano())
			.pipe(gulp.dest('css'));
		})
		gulp.task('default',function(){
			gulp.watch('src/sass/*.scss',['sass']);
		})
		
		//shop
		gulp.task('sass2',function(){
			return gulp.src("src/sass/shop.scss").pipe(sass()).pipe(rename({"suffix" : ".min"}))
			.pipe(cssnano())
			.pipe(gulp.dest('css'));
		})
		gulp.task('default',function(){
			gulp.watch('src/sass/*.scss',['sass']);
		})
		
		//shopcart
		
		gulp.task('sass3',function(){
			return gulp.src("src/sass/shopcart.scss").pipe(sass()).pipe(rename({"suffix" : ".min"}))
			.pipe(cssnano())
			.pipe(gulp.dest('css'));
		})
	

