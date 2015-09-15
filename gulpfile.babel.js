// generated on 2015-09-11 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';

/** From https://github.com/SophieV/ReactFlux_FormsApp/blob/master/gulpfile.js */
import watchify from 'watchify';
import browserify from 'browserify';
/** **/

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
path.DEST_BUILD = `${path.DEST}/build`;
path.DEST_SRC = `${path.DEST}/src`;

gulp.task('styles', () => {
  return gulp.src(`${path.STYLES}/**/*.scss`)
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
      .pipe(reload({stream: true, once: true}))
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  }
};

gulp.task('templates', function () {
  return gulp.src(`${path.SCRIPTS}/**/*.jsx`)
    .pipe($.react())
    .pipe(gulp.dest(`${path.TMP}/scripts`));
});

gulp.task('lint', lint(`${path.SRC}/scripts/**/*.js`));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('html', ['styles'], () => {
  const assets = $.useref.assets({searchPath: [path.TMP, path.SRC, '.']});

  return gulp.src(`${path.SRC}/*.html`)
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
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

gulp.task('fonts', () => {
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

gulp.task('serve', ['templates', 'styles', 'fonts'], () => {
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
  gulp.watch(`${path.SRC}/scripts/**/*.jsx`, ['templates', reload]);
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
  gulp.src(path.STYLES+ '/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest(path.STYLES+ ''));

  gulp.src(path.SRC + '/*.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest(path.SRC));
});

gulp.task('deploy', () => {
  return gulp.src(path.DEST + '/**/*')
    .pipe($.ghPages());
});

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
  return gulp.src(path.DEST + '/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
