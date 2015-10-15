// generated on 2015-09-11 using generator-gulp-webapp 1.0.3
/*eslint no-process-exit:0 */
/*jshint strict: false */
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';

let source = require('vinyl-source-stream');
let browserify = require('browserify');
let buffer = require('vinyl-buffer');

let gutil = require('gulp-util');
let reactify = require('reactify');
let babelify = require('babelify');
let watchify = require('watchify');
let notify = require('gulp-notify');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

let path = {
  SRC: 'src',
  TMP: '.tmp',
  DEST: 'dist'
};

path.HTML = `${path.SRC}/index.html`;
path.STYLES = `${path.SRC}/styles`;
path.SCRIPTS = `${path.SRC}/scripts`;
path.ENTRY_POINT = `${path.SCRIPTS}/App.js`;

path.TMP_HTML = `${path.TMP}/index.html`;
path.TMP_STYLES = `${path.TMP}/styles`;
path.TMP_SCRIPTS = `${path.TMP}/scripts`;

path.DEST_BUILD = `${path.DEST}/build`;
path.DEST_SRC = `${path.DEST}/src`;

function isProd() {
  return process.env.NODE_ENV === 'production';
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
    .pipe($.autoprefixer({browsers: ['last 2 versions']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.TMP + '/styles'))
    .pipe(reload({stream: true}));
});

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

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe(reload({stream: true, once: true}))
      .pipe($.eslint(testLintOptions))
      .pipe($.eslint.format('stylish'))
      .pipe($.sourcemaps.write('.'))
      .pipe($.if(!browserSync.active, $.eslint.failAfterError())
        .pipe(gulp.dest('../output')));
  };
}

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {

  let props = {
    entries: [`${path.SRC}/scripts/` + file], //'.' +
    debug : true,
    transform:  [babelify, reactify]
  };

  // watchify() if watch requested, otherwise run browserify() once
  let bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    let stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest(`${path.TMP}/scripts`))
      .pipe(gulp.dest(`${path.DEST}/scripts`));
  }

  // listen for an update and run rebundle
  bundler.on('update', () => {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

// run once
gulp.task('scripts', () => {
  return buildScript(`App.js`, false);
});

// run 'scripts' task first, then watch for future changes
gulp.task('watchScripts', () =>{
  return buildScript(`App.js`, true);
});

gulp.task('minifyJS', ['scripts'], () =>{
  return gulp.src(`${path.DEST}/scripts/App.js`)
    .pipe($.uglify())
    .pipe(gulp.dest(`${path.DEST}/scripts/`));
});

gulp.task('lint', ['scripts'], lint(`${path.TMP}/scripts/App.js`));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('html', ['styles'], () => {
  const assets = $.useref.assets({searchPath: [path.TMP, path.SRC, '.']});

  return gulp.src(`${path.SRC}/*.html`)
    .pipe($.plumber())
    .pipe(assets)
    // .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
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

gulp.task('serve', ['scripts', 'styles', 'fonts'], () => {
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
    `${path.SRC}/images/**/*`,
    `${path.TMP}/fonts/**/*`
  ]).on('change', reload);

  gulp.watch(`${path.STYLES}/**/*.scss`, ['styles']);
  gulp.watch(`${path.SRC}/scripts/**/*.js`, ['watchScripts', reload]);
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
    .pipe($.ghPages('git@github.com:josephdburdick/adoptive-2015'));
});

gulp.task('build', ['html', 'scripts', 'images', 'fonts', 'extras', 'minifyJS'], () => {
  return gulp.src(`${path.DEST}/**/*`).pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

process.on('exit', () => {
  if (gulp.fail) {
    // return non-zero exit code
    process.exit(1);
  }
});
