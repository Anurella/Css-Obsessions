

// set up gulp file
var gulp = require('gulp');
var sass = require('gulp-sass');


// arguments (name of task and callback function to run the task)

gulp.task('styles', function() {

	return gulp.src('Sass/styles.scss')  //get source files 
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./css'));
});



//watch task 

gulp.task('default', function() {
	gulp.watch('Sass/styles.scss', ['styles']);


});


