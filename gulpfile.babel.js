// generated on 2015-09-11 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';

var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

let path = {
  NOT_MINIFIED: 'build.js',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  /** DIR **/
  SRC: 'src',
  TMP: '.tmp',
  DEST: 'dist'
};

path.HTML = `${path.SRC}/index.html`;
path.STYLES = `${path.SRC}/styles`;
path.SCRIPTS = `${path.SRC}/scripts`;
path.ENTRY_POINT = `${path.SCRIPTS}/App.jsx`;

path.TMP_HTML = `${path.TMP}/index.html`;
path.TMP_STYLES = `${path.TMP}/styles`;
path.TMP_SCRIPTS = `${path.TMP}/scripts`;

path.DEST_BUILD = `${path.DEST}/build`;
path.DEST_SRC = `${path.DEST}/src`;

function isProd() {
  return process.env.NODE_ENV == 'production';
}

gulp.task('styles', () => {
  return gulp.src(`${path.STYLES}/main.scss`)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 1 version']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.TMP + '/styles'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe(reload({stream: true, once: true}))
      .pipe($.babel())
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      .pipe($.sourcemaps.write('.'))
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  },
  baseConfig: {
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      templateStrings: true,
      classes: true,
      jsx: true,
      modules: true
    }
  }
};

gulp.task('transpile', ['templates'], () => {
  return browserify(`${path.SRC}/scripts/App.jsx`, {debug: true})
      .transform(babelify)
      .bundle()
      .pipe($.plumber())
      .pipe(source('App.js'))
      .pipe(buffer())
      .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe($.if(isProd(), $.uglify()))
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest(`${path.TMP}/scripts/`));
});

gulp.task('copyTranspiledJStoDist', ['transpile'], () => {
  return gulp.src(`${path.TMP}/scripts/*.js`)
    .pipe(gulp.dest(`${path.DEST}/scripts/`));
});

gulp.task('templates', function () {
  return gulp.src(`${path.SCRIPTS}/**/*.jsx`)
    .pipe($.plumber())
    .pipe($.react())
    .pipe($.sourcemaps.init())
    .pipe($.eslint({
      "rules": {
        "strict": 0,
        "quotes": false,
        "no-trailing-spaces": false,
        "no-extra-boolean-cast": 2,
        "no-var": 2
      }
    }))
    .pipe($.eslint.format())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(`${path.TMP}/scripts`));
});

gulp.task('lint', ['transpile'], lint(`${path.SRC}/scripts/**/*.js`));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('html', ['templates', 'styles'], () => {
  const assets = $.useref.assets({searchPath: [path.TMP, path.SRC, '.']});

  return gulp.src(`${path.SRC}/*.html`)
    .pipe($.plumber())
    .pipe(assets)
    //.pipe($.if('*.js', $.uglify()))
    //.pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('images', () => {
  return gulp.src(`${path.SRC}/images/**/*`)
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest(`${path.DEST}/images`));
});

// fix to hard copy fonts from font-awesome as they don't include their fonts in their bower.json file
gulp.task('copy-fa-fonts', () => {
  return gulp.src('bower_components/font-awesome/fonts/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest(`${path.TMP}/fonts/`))
    .pipe(gulp.dest(`${path.DEST}/fonts/`));
});

gulp.task('fonts', ['copy-fa-fonts'], () => {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat(`${path.SRC}/fonts/**/*`))
    .pipe(gulp.dest(`${path.TMP}/fonts`))
    .pipe(gulp.dest(`${path.DEST}/fonts`));
});

gulp.task('extras', () => {
  return gulp.src([
    `${path.SRC}/*.*`,
    `!${path.SRC}/*.html`
  ], {
    dot: true
  }).pipe(gulp.dest(path.DEST));
});

gulp.task('clean', del.bind(null, [path.TMP, path.DEST]));

gulp.task('serve', ['transpile', 'styles', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: [path.TMP, path.SRC],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    `${path.SRC}/*.html`,
    `${path.SRC}/scripts/**/*.js`,
    `${path.TMP}/scripts/**/*.js`,
    `${path.SRC}/images/**/*`,
    `${path.TMP}/fonts/**/*`
  ]).on('change', reload);

  gulp.watch(`${path.STYLES}/**/*.scss`, ['styles']);
  gulp.watch(`${path.SRC}/scripts/**/*.jsx`, ['transpile', reload]);
  gulp.watch(`${path.SRC}/fonts/**/*`, ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: [path.DEST]
    }
  });
});

gulp.task('serve:test', () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src(`${path.STYLES}/*.scss`)
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest(path.STYLES));

  gulp.src(path.SRC + '/*.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest(path.SRC));
});

gulp.task('deploy', () => {
  return gulp.src(`${path.DEST}/**/*`)
    .pipe($.ghPages());
});

gulp.task('build', ['lint', 'copyTranspiledJStoDist', 'html', 'images', 'fonts', 'extras'], () => {
  return gulp.src(`${path.DEST}/**/*`).pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
