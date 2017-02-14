var gulp = require('gulp')
sass = require('gulp-sass')
notify = require('gulp-notify');

gulp.task("thor", function () {
    return gulp.src("./source/sass/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', notify.onError({title: 'Error ao compilar', message: '<%= error.message %>'}))
        .pipe(gulp.dest("./dist/css"))
});

gulp.task("buildjs", function () {
    return gulp.src([
            './source/components/jquery/dist/jquery.js',
            './source/components/jquery-mobile/jquery.mobile.custom.js'
        ])
        .pipe(gulp.dest("./dist/js"))
});

gulp.task('move-fonts', function () {
    return gulp.src('./source/components/components-font-awesome/fonts/**')
        .pipe(gulp.dest("./dist/fonts"))
})

gulp.task("aquaman", function () {
    return gulp.src('./source/js/*.js')
        .pipe(gulp.dest("./dist/js"))
});

gulp.task("demolidor", function () {
    gulp.watch('./source/sass/**/*.scss', ['thor']);
    gulp.watch('./source/js/**/*.js', ['aquaman']);
});

gulp.task("default", ['buildjs', 'thor', 'aquaman', 'demolidor']);