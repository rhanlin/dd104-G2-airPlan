var gulp = require('gulp'); //載入gulp
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');

var browserSync = require('browser-sync').create();//create一個瀏覽器物件
var reload = browserSync.reload;

/*
 *  搬家: concat
 */
gulp.task('concat',function(){
    return gulp.src(['./img/*','./img/**/*'])
    .pipe(gulp.dest('./dist/img/'))
});

/*
 *  css壓縮處理: minicss
 */
// https://www.npmjs.com/package/gulp-clean-css
gulp.task('minicss',['sass'],function(){ 
    //sass會先執行(callback Function)，結束後再執行minicss
    return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'))
});
/*
 *  使用gulp 轉 Sass => 等於 VS Code的套件 watch Sass
 */
//https://www.npmjs.com/package/gulp-sass
gulp.task('sass',()=>{
    return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
/*
 *  watch 監看 
 */
gulp.task('watch',()=>{
    gulp.watch('./sass/*.scss' , ['minicss']); 
    gulp.watch(['./*.html','./**/*.html'] , ['fileinclude']); 
});


/*
 * html module
 */
gulp.task('fileinclude', ()=> {
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
            index: "write-letter.html"
        }
    });

    gulp.watch(["./sass/*.scss", "./sass/**/*.scss"], ['minicss']).on('change', reload);
    gulp.watch(["./*.html" , "./**/*.html"] , ['fileinclude']).on('change', reload);
});