// var text = "hello";
// module.exports = text;
var gulp = require('gulp'); //載入gulp
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');



var web = {
    img: [
        'dev/img/*.*',
        'dev/img/**/*.*'
    ],
    css: [
        'dev/css/*.css'
    ],
    html  :[
        'dev/*.html'
    ],
    js  :[
        'dev/js/*.*'
    ],
    font  :[
        'dev/font/*.*'
    ]
}




/*
 *  圖片搬家: concatImg
 */
gulp.task('concatImg',['dist:img'],() => {
    return gulp.src(web.img)
        .pipe(gulp.dest('./dist/img/'))
});
/*
 * img壓縮後輸出
 */
gulp.task('dist:img', () => {
    // gulp.src('./dist/img/*').pipe(clean());
    return gulp.src(web.img)
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
})

//html 搬家

gulp.task('concatHtml', () => {
    // gulp.src('./dist/img/*').pipe(clean());
    return gulp.src(web.html)
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/'))
});

// css 搬家
gulp.task('concatCss', () => {
    // gulp.src('./dist/img/*').pipe(clean());
    return gulp.src(web.css)
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/css'))
});


// font 搬家
gulp.task('concatFont', () => {
    // gulp.src('./dist/img/*').pipe(clean());
    return gulp.src(web.font)
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/font'))
})


// js 搬家
gulp.task('concatJs', () => {
    // gulp.src('./dist/img/*').pipe(clean());
    return gulp.src(web.js)
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/js'))
})


