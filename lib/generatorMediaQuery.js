'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint no-else-return: 0 */


var _templateObject = _taggedTemplateLiteralLoose(['\n      @media (', ': ', '', ') { ', ' }\n    '], ['\n      @media (', ': ', '', ') { ', ' }\n    ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      @media ', ' { ', ' }\n    '], ['\n      @media ', ' { ', ' }\n    ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n      @media (min-width: ', 'em) { ', ' }\n    '], ['\n      @media (min-width: ', 'em) { ', ' }\n    ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

exports.default = function (value, args) {
  var getObj = function getObj(data) {
    return _extends({ querie: 'min-width', unit: 'em' }, data);
  };

  var style = _styledComponents.css.apply(undefined, args);

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Object) {
    var obj = getObj(value);
    return (0, _styledComponents.css)(_templateObject, obj.querie, obj.size, obj.unit, style);
  } else if (Array.isArray(value)) {
    var query = value.map(function (e) {
      var obj = getObj(e);
      return '(' + obj.querie + ': ' + obj.size + obj.unit + ')';
    });
    return (0, _styledComponents.css)(_templateObject2, query.join(' and '), style);
  } else if (typeof value === 'number') {
    return (0, _styledComponents.css)(_templateObject3, value, style);
  } else if (typeof value === 'string') {
    return (0, _styledComponents.css)(_templateObject2, value, style);
  }

  return style;
};

module.exports = exports['default'];