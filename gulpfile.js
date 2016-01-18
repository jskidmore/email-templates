var gulp = require('gulp');
var inlineCss = require('gulp-inline-css');
var layout = require('handlebars-layouts');
var compile = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var defaultTemplate = require('fs')
  .readFileSync('./source/layouts/default.hbs', 'utf8');

compile.Handlebars.registerHelper(layout(compile.Handlebars));
compile.Handlebars.registerPartial({
  default: compile.Handlebars.compile(defaultTemplate)
});

gulp.task('default', function() {
  return gulp.src('./source/*.hbs')
  .pipe(compile({}))
  .pipe(inlineCss())
  .pipe(rename({extname: '.html'}))
  .pipe(gulp.dest('build/'));
});
