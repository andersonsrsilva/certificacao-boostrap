var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("compilar-css", function () {
    return gulp.src("./source/sass/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("./dist/css"));
});

gulp.task("escuta-me", function () {
   gulp.watch('./source/sass/*.scss', ['compilar-css']);
});