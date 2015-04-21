var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var browserSync	= require('browser-sync');


gulp.task('serve', function(){

	browserSync.init(['css/*.css'], {
		server: {
			baseDir: '../'
		},
		port: '1337'
	});


});

gulp.task('html', function(){
	return gulp.src('../*.html')
		.pipe(browserSync.reload({stream: true}));
})

gulp.task('sass', function(){
	return gulp.src('../sass/*.scss')
		.pipe(sass({
			includePaths: ['scss']
		}) )
		.pipe(gulp.dest('../css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['sass', 'serve'], function(){
	gulp.watch('../sass/*.scss', ['sass']);
	gulp.watch('../*.html', ['html']);
});