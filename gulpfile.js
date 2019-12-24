var gulp = require('gulp'); //載入gulp
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
// var jshint = require('gulp-jshint');//檢查JS
// var uglify = require('gulp-uglify')//壓縮JS gulp-uglify-es
var fileinclude = require('gulp-file-include');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create(); //create一個瀏覽器物件
var reload = browserSync.reload;
var concat = require('gulp-concat');
/*
 *  圖片搬家: concatImg
 */
gulp.task('concatImg',['dist:img'],() => {
    return gulp.src(['./img/*', './img/**/*'])
        .pipe(gulp.dest('./dist/img/'))
});
/*
 * img壓縮後輸出
 */
gulp.task('dist:img', () => {
    // gulp.src('./dist/img/*').pipe(clean());
    return gulp.src(['./img/*', './img/**/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
})
/*
 *  css壓縮處理 轉存到dist/css
 */
// https://www.npmjs.com/package/gulp-clean-css
gulp.task('minicss', ['sass'], () => {
    //sass會先執行(callback Function)，結束後再執行minicss
    return gulp.src('./css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./dist/css/'))
});
/*
 *  Sass轉CSS  
 */
//https://www.npmjs.com/package/gulp-sass
gulp.task('sass', () => {
    gulp.src('./css/*.css').pipe(clean());
    return gulp.src(['./sass/*.scss', './sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
/*
 *  JS檢查->壓縮合併->存到dist/js
 */
gulp.task('dist:js', () => {
    // gulp.src('./dist/js/*.js').pipe(clean());
    // return gulp.src('./js/*.js')
    //     // .pipe(jshint())
    //     // .pipe(jshint.reporter('default'))
    //     // .pipe(uglify())
    //     .pipe(concat('public.js'))
    //     .pipe(gulp.dest('./dist/js/'))

    return gulp.src(['./js/*'])
    .pipe(gulp.dest('./dist/js/'))
});
/*
 *  watch 監看 
 */
gulp.task('watch', () => {
    gulp.watch('./sass/*.scss', ['minicss']);
    gulp.watch(['./*.html', './**/*.html'], ['fileinclude']);
    gulp.watch(["./img/*.*", "./img/**/*.*", "./img/**/**/*.*"], ['concatImg']);
});


/*
 * html module
 */
gulp.task('fileinclude', () => {
    gulp.src(['*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'));
});

/*
 * 把所有做的結果丟到瀏覽器上執行 browsersync
 */
//https://www.browsersync.io/docs/gulp
gulp.task('default', function () {
    browserSync.init({
        server: {
            //根目錄
            baseDir: "./dist",
            index: "home.html"
        }
    });

    gulp.watch(["./sass/*.scss", "./sass/**/*.scss"], ['minicss']).on('change', reload);
    gulp.watch(["./*.html", "./**/*.html"], ['fileinclude']).on('change', reload);
    gulp.watch(["./img/*.*", "./img/**/*.*", "./img/**/**/*.*"], ['concatImg']).on('change', reload);

});