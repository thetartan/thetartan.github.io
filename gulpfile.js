'use strict';

var path = require('path');
var gulp = require('gulp');

var nodeModulesDir = path.join(__dirname, 'node_modules');
var assetsDir = path.join(__dirname, 'assets');

gulp.task('default', function() {
  gulp.src([
    path.join(nodeModulesDir, 'angular/angular.min.js'),
    path.join(nodeModulesDir, 'angular-tartan/dist/angular-tartan.min.js'),
    path.join(nodeModulesDir, 'tartan/dist/tartan.min.js'),
    path.join(nodeModulesDir, 'tartan-processing/dist/tartan-processing.min.js'),
    path.join(nodeModulesDir, 'tartan-render/dist/tartan-render.min.js'),
    path.join(nodeModulesDir, 'tartan-schema/dist/tartan-schema.min.js'),
    path.join(nodeModulesDir, 'lodash/lodash.min.js'),
    path.join(nodeModulesDir, 'jquery/dist/jquery.min.js')
  ]).pipe(gulp.dest(assetsDir));
});
