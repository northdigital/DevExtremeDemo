"use strict";

const {src, dest, series} = require('gulp');
const del = require('del');

const modulePath = './node_modules/';
const libPath = './wwwroot/js/lib/';

// jquery
exports['clean-jquery'] = () => {
  const folder = libPath + 'jquery/**';
  return del(folder);
};

exports['copy-jquery'] = () => {
  const from = modulePath + 'jquery/dist/**';
  const to = libPath + 'jquery';

  return src(from)
    .pipe(dest(to));
};

exports.jquery = series(exports['clean-jquery'], exports['copy-jquery']);
// -jquery

// jquery-ui
exports['clean-jquery-ui'] = () => {
  const folder = libPath + 'jquery-ui/**';
  return del(folder);
};

exports['copy-jquery-ui'] = () => {
  const from1 = modulePath + 'jquery-ui/ui/**';
  const to1 = libPath + 'jquery-ui/ui';
  const from2 = modulePath + 'jquery-ui/themes/**';
  const to2 = libPath + 'jquery-ui/themes';

  src(from1).pipe(dest(to1));

  return src(from2)
    .pipe(dest(to2));
};

exports.jqueryui = series(exports['clean-jquery-ui'], exports['copy-jquery-ui']);
// -jquery-ui

// jquery-ui-bundle
exports['clean-jquery-ui-bundle'] = () => {
  const folder = libPath + 'jquery-ui-bundle/**';
  return del(folder);
};

exports['copy-jquery-ui-bundle'] = () => {
  const from1 = modulePath + 'jquery-ui-bundle/*';
  const to1 = libPath + 'jquery-ui-bundle';
  const from2 = modulePath + 'jquery-ui-bundle/images/**';
  const to2 = libPath + 'jquery-ui-bundle/images';

  src(from1).pipe(dest(to1));

  return src(from2).pipe(dest(to2));
};

exports['fix-jquery-ui-bundle'] = () => {
  const to1 = libPath + 'jquery-ui-bundle';

  return del(to1 + '/external/**', {force: true});
};

exports.jqueryuibundle = series(exports['clean-jquery-ui-bundle'], exports['copy-jquery-ui-bundle'], exports['fix-jquery-ui-bundle']);
// -jquery-ui-bundle

// jquery-ui-touch-punch
exports['clean-jquery-ui-touch-punch'] = () => {
  const folder = libPath + 'jquery-ui-touch-punch/**';
  return del(folder);
};

exports['copy-jquery-ui-touch-punch'] = () => {
  const from = modulePath + 'jquery-ui-touch-punch/**';
  const to = libPath + 'jquery-ui-touch-punch';

  return src(from).pipe(dest(to));
};

exports.jqueryuitouchpunch = series(exports['clean-jquery-ui-touch-punch'], exports['copy-jquery-ui-touch-punch']);
// -jquery-ui-touch-punch

// gridstack
exports['clean-gridstack'] = () => {
  const folder = libPath + 'gridstack/**';
  return del(folder);
};

exports['copy-gridstack'] = () => {
  const from = modulePath + 'gridstack/dist/**';
  const to = libPath + 'gridstack';

  return src(from)
    .pipe(dest(to));
};

exports.gridstack = series(exports['clean-gridstack'], exports['copy-gridstack']);
// -gridstack

// lodash
exports['clean-lodash'] = () => {
  const folder = libPath + 'lodash/**';
  return del(folder);
};

exports['copy-lodash'] = () => {
  const from = modulePath + 'lodash/**';
  const to = libPath + 'lodash';

  return src(from)
    .pipe(dest(to));
};

exports.lodash = series(exports['clean-lodash'], exports['copy-lodash']);
// -lodash

// requirejs
exports['clean-requirejs'] = () => {
  const folder = libPath + 'requirejs/**';
  return del(folder);
};

exports['copy-requirejs'] = () => {
  const from = modulePath + 'requirejs/*.{json,md,js}';
  const to = libPath + 'requirejs';

  return src(from)
    .pipe(dest(to));
};

exports.requirejs = series(exports['clean-requirejs'], exports['copy-requirejs']);
// -requirejs

// devextreme
exports['clean-devextreme'] = () => {
  const folder = libPath + 'devextreme/dist/**';
  return del(folder);
};

exports['copy-devextreme'] = () => {
  const from = modulePath + 'devextreme/dist/**';
  const to = libPath + 'devextreme';

  return src(from)
    .pipe(dest(to));
};

exports.devextreme = series(exports['clean-devextreme'], exports['copy-devextreme']);
// -devextreme

// bootstrap
exports['clean-bootstrap'] = () => {
  const folder = libPath + 'bootstrap/dist/**';
  return del(folder);
};

exports['copy-bootstrap'] = () => {
  const from = modulePath + 'bootstrap/dist/**';
  const to = libPath + 'bootstrap';

  return src(from)
    .pipe(dest(to));
};

exports.bootstrap = series(exports['clean-bootstrap'], exports['copy-bootstrap']);
// -bootstrap

// knockout
exports['clean-knockout'] = () => {
  const folder = libPath + 'knockout/build/output/**';
  return del(folder);
};

exports['copy-knockout'] = () => {
  const from = modulePath + 'knockout/build/output/**';
  const to = libPath + 'knockout';

  return src(from)
    .pipe(dest(to));
};

exports.knockout = series(exports['clean-knockout'], exports['copy-knockout']);
// -knockout

exports.all = series(exports.jquery, exports.jqueryui, exports.jqueryuibundle, exports.jqueryuitouchpunch,
  exports.gridstack, exports.lodash, exports.requirejs, exports.devextreme, exports.bootstrap, exports.knockout);
