/**
 * Created by dsmarkowitz on 5/14/16.
 */

const   gulp = require('gulp'),
        del = require('del'),
        typescript = require('gulp-typescript'),
        tsconfig = require('./tsconfig.json'),
        sourcemaps = require('gulp-sourcemaps'),
        tslint = require('gulp-tslint'),
        browserSync = require('browser-sync'),
        concat = require('gulp-concat'),
        cleanCss = require('gulp-clean-css');

const   paths = {
            source: {
                css: 'src/styles/*.css',
                js: 'src/app/*.ts',
                html: ['src/static/*.html', '!src/static/index.html'],
                index: 'src/index.html',
                systemjs: 'src/systemjs.config.js'
            },
            build: {
                root: 'dist',
                css: 'dist/css',
                js: 'dist/app',
                html: 'dist/html',
                libraries: 'dist/lib'
            }
};

gulp.task('clean', function() {
    return del(paths.build.root + '/**/*');
});

gulp.task('copy-libraries', ['clean'], function() {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'es6-shim/es6-shim.map',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'reflect-metadata/Reflect.js.map',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest(paths.build.libraries));
});

gulp.task('copy-html', function() {
    gulp.src(paths.source.index)
        .pipe(gulp.dest(paths.build.root));

    gulp.src(paths.source.systemjs)
        .pipe(gulp.dest(paths.build.root));

    return gulp.src(paths.source.html)
        .pipe(gulp.dest(paths.build.html));
});

gulp.task('copy-js', function() {
    return gulp
        .src(paths.source.js)
        .pipe(sourcemaps.init())
        .pipe(typescript(tsconfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.build.js));
});

gulp.task('copy-css', function() {
    return gulp.src(paths.source.css)
        .pipe(concat('styles.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.build.css))
        .pipe(browserSync.stream());
});

gulp.task('check-js', function() {
    return gulp.src(paths.source.js)
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('build', ['clean'], function() {
    gulp.start(['check-js', 'copy-libraries', 'copy-css', 'copy-html', 'copy-js']);
});

gulp.task('start', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: paths.build.root
        }
    });

    gulp.watch('tsconfig.json', ['build'], browserSync.reload);
    gulp.watch(paths.source.css, ['copy-css']);
    gulp.watch([paths.source.html, paths.source.index], ['copy-html'], browserSync.reload);

    // TypeScript files contain paths to HTML templates which may change.
    // Need to copy html.
    gulp.watch(paths.source.js, ['check-js', 'copy-js', 'copy-html'], browserSync.reload);
});

gulp.task('default', ['start']);