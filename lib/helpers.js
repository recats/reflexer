'use strict';

exports.__esModule = true;
exports.mediaProperty = exports.checkWidth = exports.checkPercent = exports.media = exports.propsChecker = exports.theme = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteralLoose(['\n        flex-grow: 1;\n        flex-basis: 0;\n        max-width: 100%;\n      '], ['\n        flex-grow: 1;\n        flex-basis: 0;\n        max-width: 100%;\n      ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      flex-basis: ', ';\n      max-width: ', ';\n    '], ['\n      flex-basis: ', ';\n      max-width: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n        ', ': ', ';\n      '], ['\n        ', ': ', ';\n      ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n      ', ': ', ';\n    '], ['\n      ', ': ', ';\n    ']);

var _generatorMediaQuery = require('./generatorMediaQuery');

var _generatorMediaQuery2 = _interopRequireDefault(_generatorMediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var theme = exports.theme = {
  reflexer: {
    gridFluid: '2rem',
    rowGutter: '-0.5rem',
    colGutter: '0.5rem',
    size: {
      xl: 75,
      lg: 64,
      md: 48,
      sm: 30,
      xs: 0
    }
  }
};

var propsChecker = exports.propsChecker = function propsChecker(props, entity) {
  return props.theme.reflexer ? props.theme.reflexer[entity] : theme.reflexer[entity];
};

var media = exports.media = function media(props) {
  var sizeMedia = propsChecker(props, 'size');
  return Object.keys(sizeMedia).reduce(function (accumulator, label) {
    var accum = accumulator;
    accum[label] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (0, _generatorMediaQuery2.default)(sizeMedia[label], args);
    };
    return accum;
  }, {});
};

var checkPercent = exports.checkPercent = function checkPercent(size) {
  return 100 / (12 / size) + '%';
};

var checkTypeParams = function checkTypeParams(params) {
  var values = {};
  if (typeof params === 'string' || typeof params === 'number') {
    values = { xs: params };
  } else if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
    values = params;
  }
  return values;
};

var checkWidth = exports.checkWidth = function checkWidth(props, params) {
  var object = checkTypeParams(params);

  // $FlowIssues
  return Object.keys(object).map(function (key) {
    if (object[key] === 'auto') {
      // $FlowIssues
      return media(props)[key](_templateObject);
    }

    if (typeof object[key] === 'string') {
      console.warn('value must be a number', object[key]);
    }

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
    return media(props)[key](_templateObject2, percent, percent);
  });
};

var mediaProperty = exports.mediaProperty = function mediaProperty(props, params, paramsKey, calculate) {
  var object = checkTypeParams(params);
  // $FlowIssues
  return Object.keys(object).map(function (key) {
    if (calculate) {
      return media(props)[key](_templateObject3, paramsKey, calculate ? calculate(object[key]) : object[key]);
    }

    return media(props)[key](_templateObject4, paramsKey, object[key]);
  });
};