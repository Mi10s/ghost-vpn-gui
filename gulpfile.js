const { exec } = require('child_process');
const gulp = require('gulp');
const babel = require('gulp-babel');
const css = require('gulp-clean-css');

// 1. Copy the index.html as is
gulp.task('html', () => gulp.src('index.html')
  .pipe(gulp.dest('app/')));

// 2. Compile CSS file and move them to the app folder
gulp.task('css', () => gulp.src(['src/**/*.css', 'css/semantic.min.css'])
  .pipe(css())
  .pipe(gulp.dest('app/')));

// 3. Compile JS files and move them to the app folder
gulp.task('js', () => gulp.src(['main.js', 'src/**/*.jsx', 'src/**/*.js'])
  .pipe(babel())
  .pipe(gulp.dest('app/')));

// 4. Start the electron process.
gulp.task('start', gulp.series('html', 'css', 'js', () => exec(`${__dirname}/node_modules/.bin/electron .`)
  .on('close', () => process.exit())));
