var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nestedcss = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('default', function() {
    console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
    console.log("Imagine something useful being done to your HTML here");
});

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nestedcss, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    })

});