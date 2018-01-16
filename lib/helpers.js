'use strict';

exports.__esModule = true;
exports.mediaProperty = exports.checkWidth = exports.checkPercent = exports.media = exports.propsChecker = exports.sizeMedia = exports.theme = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n    @media (min-width: ', 'em) {\n      ', '\n    }\n  '], ['\n    @media (min-width: ', 'em) {\n      ', '\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      flex-basis: ', ';\n      max-width: ', ';\n    '], ['\n      flex-basis: ', ';\n      max-width: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n      ', ': ', ';\n    '], ['\n      ', ': ', ';\n    ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var theme = exports.theme = {
  reflexer: {
    gridFluid: '2rem',
    rowGutter: '-0.5rem',
    colGutter: '0.5rem'
  }
};

var sizeMedia = exports.sizeMedia = {
  xl: 75, lg: 64, md: 48, sm: 30, xs: 0
};

var propsChecker = exports.propsChecker = function propsChecker(props, entity) {
  return props.theme.reflexer ? props.theme.reflexer[entity] : theme.reflexer[entity];
};

var media = exports.media = Object.keys(sizeMedia).reduce(function (accumulator, label) {
  var accum = accumulator;
  accum[label] = function () {
    return (0, _styledComponents.css)(_templateObject, sizeMedia[label], _styledComponents.css.apply(undefined, arguments));
  };
  return accum;
}, {});

var checkPercent = exports.checkPercent = function checkPercent(size) {
  return 100 / (12 / size) + '%';
};

var checkWidth = exports.checkWidth = function checkWidth(object) {
  return Object.keys(object).map(function (key) {
    var $size = object[key] <= 12 ? object[key] : 12;

    if (object[key] > 12) {
      console.warn('The ->' + key + '<- must be <= 12 for the <Col /> component');
    }

    if (key !== undefined && key === 'xs' && !object[key]) {
      console.warn('The `xs` is not specified for the <Col /> component');
      $size = 12;
    }

    var percent = checkPercent($size);

    // $FlowIssues
    return media[key](_templateObject2, percent, percent);
  });
};

var mediaProperty = exports.mediaProperty = function mediaProperty(object, paramsKey, calculate) {
  return Object.keys(object).map(function (key) {
    if (key === 'xs') {
      return paramsKey + ': ' + (calculate ? calculate(object[key]) : object[key]) + ';';
    }

    return media[key](_templateObject3, paramsKey, object[key]);
  });
};