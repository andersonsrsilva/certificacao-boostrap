var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("thor", function () {
    return gulp.src("./source/sass/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("./dist/css"))
});

gulp.task("demolidor", function () {
   gulp.watch('./source/sass/**/*.scss', ['thor']);
});