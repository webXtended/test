var gulp = require("gulp");
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");

gulp.task("default", ["compress"]);

gulp.task('compress', function (cb) {
    pump([
            gulp.src('src/*.js'),
            uglify(),
            rename({ suffix: '.min' }),
            gulp.dest('dist')
        ],
        function(){
            if(cb){
                cb()
            }
        }
    );
});