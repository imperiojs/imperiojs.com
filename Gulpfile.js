/* eslint-disable no-console */
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const nodemon = require('gulp-nodemon');
// const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const streamify = require('gulp-streamify');
const notify = require('gulp-notify');

gulp.task('browserify', scripts)
    .task('serve', serve);

function scripts() {
  const bundler = browserify({
    entries: ['./client/index.jsx'],
    transform: [[babelify, { presets: ['es2015', 'react'] }]],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true,
  });
  const watcher = watchify(bundler);

  return watcher
    .on('update', () => {
      console.log('Updating!');
      watcher.bundle()
      .on('error', (err) => {
        console.log('Error with compiling components', err.message);
      })
      .pipe(streamify(uglify('./client/build/')))
      .pipe(gulp.dest('./client/build/'))
      .pipe(notify('Built Bundle'));
    })
    // Create the initial bundle when starting the task
    .bundle()
    .on('error', (err) => {
      console.log('Error with compiling components', err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify('./client/build/')))
    .pipe(gulp.dest('./client/build/'))
    .pipe(notify('Built Bundle'));
}

function serve() {
  nodemon({
    script: 'server/server.js',
    ignore: ['client/', 'build/'],
  });
}

gulp.task('apply-prod-environment', () => {
  process.env.NODE_ENV = 'production';
});

gulp.task('default', ['apply-prod-environment', 'browserify', 'serve']);
