'use strict';

exports.__esModule = true;
exports.validationProps = exports.mediaProperty = exports.checkWidth = exports.media = exports.checkPercent = exports.propsChecker = exports.isObject = exports.theme = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteralLoose(['\n        flex-grow: 1;\n        flex-basis: 0;\n        max-width: 100%;\n      '], ['\n        flex-grow: 1;\n        flex-basis: 0;\n        max-width: 100%;\n      ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      flex-basis: ', ';\n      max-width: ', ';\n    '], ['\n      flex-basis: ', ';\n      max-width: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n        ', ': ', ';\n      '], ['\n        ', ': ', ';\n      ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n      ', ': ', ';\n    '], ['\n      ', ': ', ';\n    ']);

var _generatorMediaQuery = require('./generatorMediaQuery');

var _generatorMediaQuery2 = _interopRequireDefault(_generatorMediaQuery);

var _const = require('./Row/const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var theme = exports.theme = {
  reflexer: {
    gridFluid: '2rem',
    rowGutter: '-0.5rem',
    colGutter: '0.5rem',
    column: 12,
    size: {
      xl: 75,
      lg: 64,
      md: 48,
      sm: 30,
      xs: 0
    }
  }
};

var isObject = exports.isObject = function isObject(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Object;
};

var propsChecker = exports.propsChecker = function propsChecker(props, entity) {
  var newProps = _extends({}, props, {
    theme: _extends({}, props.theme, { reflexer: _extends({}, theme.reflexer, props.theme.reflexer) })
  });
  return newProps.theme.reflexer[entity];
};

var checkPercent = exports.checkPercent = function checkPercent(props, size) {
  return 100 / (+propsChecker(props, 'column') / size) + '%';
};

var media = exports.media = function media(props, key) {
  var sizeMedia = propsChecker(props, 'size');
  var acm = Object.keys(sizeMedia).reduce(function (accumulator, label) {
    var accum = accumulator;
    accum[label] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (0, _generatorMediaQuery2.default)(sizeMedia[label], args);
    };
    return accum;
  }, {});

  if (!Object.prototype.hasOwnProperty.call(sizeMedia, key)) {
    console.error('@@reflexer. in ' + JSON.stringify(sizeMedia) + ' no \'' + key + '\'');
  }

  return acm[key];
};

var checkTypeParams = function checkTypeParams(props, params) {
  var values = {};
  if (typeof params === 'string' || typeof params === 'number') {
    var _values;

    var firstValue = Object.keys(propsChecker(props, 'size'));
    values = (_values = {}, _values[firstValue[0]] = params, _values);
  } else if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
    values = params;
  }
  return values;
};

var checkWidth = exports.checkWidth = function checkWidth(props, params) {
  var object = checkTypeParams(props, params);
  var countColumn = +propsChecker(props, 'column');
  return Object.keys(object).map(function (key) {
    if (object[key] === 'auto') {
      return media(props, key)(_templateObject);
    }

    if (typeof object[key] === 'string') {
      console.warn('@@reflexer. value must be a number', object[key]);
    }

    var $size = object[key] <= countColumn ? object[key] : countColumn;

    if (object[key] > countColumn) {
      console.warn('@@reflexer. The ->' + key + '<- must be <= ' + countColumn + ' for the <Col /> component');
    }

    if (key !== undefined && key === 'xs' && !object[key]) {
      console.warn('@@reflexer. The `xs` is not specified for the <Col /> component');
      $size = countColumn;
    }

    var percent = checkPercent(props, $size);

    return media(props, key)(_templateObject2, percent, percent);
  });
};

var mediaProperty = exports.mediaProperty = function mediaProperty(props, params, paramsKey, isCheckPercent) {
  var object = checkTypeParams(props, params);
  return Object.keys(object).map(function (key) {
    if (isCheckPercent) {
      return media(props, key)(_templateObject3, paramsKey, isCheckPercent ? checkPercent(props, object[key]) : object[key]);
    }

    return media(props, key)(_templateObject4, paramsKey, object[key]);
  });
};

var validationProps = exports.validationProps = function validationProps(validationObject) {
  Object.keys(validationObject).forEach(function (key) {
    var objectValue = Object.values(_const.RowValues[key] || {});
    var inner = validationObject[key];

    var warning = function warning(value) {
      return console.warn('\n@@reflexer.\n' + value + ' is not supported.\nfor ' + key + ' you can use one of these [' + objectValue.toString() + '].\n');
    };

    if (objectValue.length) {
      if (typeof inner === 'string') {
        if (!objectValue.includes(inner.trim())) {
          return warning(inner);
        }
        return false;
      }
      if (isObject(inner)) {
        return Object.keys(inner).map(function (innerKey) {
          return objectValue.includes(inner[innerKey]) || warning(inner[innerKey] + ' in ' + innerKey);
        });
      }
      return console.warn('\n@@reflexer.\n' + (typeof inner === 'undefined' ? 'undefined' : _typeof(inner)) + ' - ' + inner + ' is not supported\n');
    }
    return console.warn('\n@@reflexer.\n' + key + ' is not defined\n');
  });
};