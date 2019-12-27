var gulp = require('gulp'); //載入gulp
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
// var jshint = require('gulp-jshint');//檢查JS
// var uglify = require('gulp-uglify')//壓縮JS gulp-uglify-es
var fileinclude = require('gulp-file-include');

var browserSync = require('browser-sync').create(); //create一個瀏覽器物件
var reload = browserSync.reload;
var prompt = require("gulp-prompt");
var gulppackage = require('./gulppackage.js');

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
    gulp.src('./dev/css/*.css').pipe(clean());
    return gulp.src(['./dev/sass/*.scss', './dev/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dev/css'));
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
    gulp.watch('./dev/sass/*.scss', ['minicss']);
    gulp.watch(['./dev/html/*.html', './dev/html/**/*.html'], ['fileinclude']);
    // gulp.watch(["./dev/img/*.*", "./dev/img/**/*.*", "./dev/img/**/**/*.*"], ['concatImg']);
});


/*
 * html module
 */
gulp.task('fileinclude', () => {
    gulp.src(['./dev/html/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dev'));
});

/*
 * 把所有做的結果丟到瀏覽器上執行 browsersync
 */
//https://www.browsersync.io/docs/gulp
gulp.task('browsersync', function () {
    browserSync.init({
        server: {
            //根目錄
            baseDir: "./dev",
            index: "home.html"
        }
    });

    gulp.watch(["./dev/sass/*.scss", "./dev/sass/**/*.scss"] , ['sass']).on('change', reload);
    gulp.watch(["./dev/html/*.html", "./dev/html/**/*.html"], ['fileinclude']).on('change', reload);
    // gulp.watch(["./dev/img/*.*", "./dev/img/**/*.*", "./dev/img/**/**/*.*"], ['concatImg']).on('change', reload);

});

//打包前清理

gulp.task('clean', function () {
    return gulp.src(['./dist'], {
            read: false
        })
        .pipe(clean());
});







//==================
// 執行指令
//==================

gulp.task('selecttask', function () {
    
    //三種模式用變數帶出來    
    var  task_mission = ['develop' , 'clear' , 'package']

    return gulp.src('./gulpfile.js')
        .pipe(prompt.prompt({
            type: 'checkbox',
            name: 'task',
            message: '你想執行那個任務？（ 請按空白鍵選擇 ） develop 開發 / clear清除打包 / package 打包  ',
            choices: task_mission
        }, function (res) {
            var selectedTask = res.task;
            gulp.start(selectedTask);
            // console.log('選中:', res);
        }));
});


gulp.task('test', () => {
    console.log(gulppackage);
});

//任務分配
gulp.task('clear', ['clean']);
gulp.task('develop', ['browsersync']);
gulp.task('package', ['concatImg' , 'concatHtml' , 'concatJs' , 'concatCss' , 'concatFont']);


gulp.task('default', ['selecttask']);



