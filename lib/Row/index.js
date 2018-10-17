'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _safeMediaPropertyCheck = require('../safeMediaPropertyCheck');

var _safeMediaPropertyCheck2 = _interopRequireDefault(_safeMediaPropertyCheck);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

exports.default = _styledComponents2.default.div(_templateObject, function (props) {
  return (0, _helpers.mediaProperty)(props, (0, _helpers.propsChecker)(props, 'rowGutter'), 'margin-left');
}, function (props) {
  return (0, _helpers.mediaProperty)(props, (0, _helpers.propsChecker)(props, 'rowGutter'), 'margin-right');
}, function (props) {
  return (0, _safeMediaPropertyCheck2.default)(props, 'flexDirection', 'flex-direction');
}, function (props) {
  return (0, _safeMediaPropertyCheck2.default)(props, 'flexWrap', 'flex-wrap');
}, function (props) {
  return (0, _safeMediaPropertyCheck2.default)(props, 'justifyContent', 'justify-content');
}, function (props) {
  return (0, _safeMediaPropertyCheck2.default)(props, 'alignItems', 'align-items');
}, function (props) {
  return (0, _safeMediaPropertyCheck2.default)(props, 'alignContent', 'align-content');
});
module.exports = exports['default'];