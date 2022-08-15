const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

function copyHtml() {
  return src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./build'));
};

function copyImg() {
  return src(['./src/images/**/*.{gif,jpg,png,svg}'])
    .pipe(dest('./build/images'));
}

function copyScc() {
  return src('./src/styles/**/*.scss')
    .pipe(sass({ sourceMap: false }).on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(concat('main.css'))
    .pipe(dest('./build/styles'));
};

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

exports.build = parallel(copyHtml, copyScc, copyImg);
