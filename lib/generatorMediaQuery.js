'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint no-else-return: 0 */


var _templateObject = _taggedTemplateLiteralLoose(['\n      @media (', ': ', '', ') { ', ' }\n    '], ['\n      @media (', ': ', '', ') { ', ' }\n    ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      @media ', ' { ', ' }\n    '], ['\n      @media ', ' { ', ' }\n    ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n        @media (min-width: ', 'em) { ', ' }\n      '], ['\n        @media (min-width: ', 'em) { ', ' }\n      ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['', ''], ['', '']);

var _styledComponents = require('styled-components');

var _helpers = require('./helpers');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

exports.default = function (value, args) {
  var getObj = function getObj(data) {
    return _extends({ querie: 'min-width', unit: 'em' }, data);
  };

  var style = _styledComponents.css.apply(undefined, args);

  if ((0, _helpers.isObject)(value)) {
    var obj = getObj(value);
    return (0, _styledComponents.css)(_templateObject, obj.querie, obj.size, obj.unit, style);
  } else if (Array.isArray(value)) {
    var query = value.map(function (e) {
      var obj = getObj(e);
      return '(' + obj.querie + ': ' + obj.size + obj.unit + ')';
    });
    return (0, _styledComponents.css)(_templateObject2, query.join(' and '), style);
  } else if (typeof value === 'number') {
    if (value > 0) {
      return (0, _styledComponents.css)(_templateObject3, value, style);
    }
    return (0, _styledComponents.css)(_templateObject4, style);
  } else if (typeof value === 'string') {
    return (0, _styledComponents.css)(_templateObject2, value, style);
  }

  return style;
};

module.exports = exports['default'];