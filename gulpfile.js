'use strict';

const gulp = require('gulp');

require('./gulp-tasks/lint');

gulp.task('default', () => {
  gulp.start('lint');
});
