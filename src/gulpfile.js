/**
 * Created by yang on 2017/2/23.
 */


var gulp = require('gulp'),
    jade = require('gulp-jade');

var html2jade = require('gulp-html2jade');
var options = {nspaces:2,donotencode:''};


gulp.task('html2jade', function(){
    gulp.src('**/*.html')
        .pipe(html2jade(options))
        .pipe(gulp.dest('dist'));
});


gulp.task('jade', function() {
    return gulp.src('**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('*/*.html', ['html2jade']);
});
//
// gulp.task('watch', function() {
//     gulp.watch('*/*.jade', ['jade']);
// });

// gulp.task('watch', function() {
//     gulp.watch('./**/*.jade', function(e) {
//         var p = e.path.replace(__dirname, '')
//             .replace(/\/[^\/]+?\.jade$/, '/');
//         gulp.src(e.path)
//             .pipe(jade())
//             .pipe(gulp.dest('.' + p));
//     });
// });

gulp.task('default', ['watch']);