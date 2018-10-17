'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

exports.default = _styledComponents2.default.div(_templateObject, function (props) {
  return (0, _helpers.mediaProperty)(props, (0, _helpers.propsChecker)(props, 'colGutter'), 'padding-left');
}, function (props) {
  return (0, _helpers.mediaProperty)(props, (0, _helpers.propsChecker)(props, 'colGutter'), 'padding-right');
}, function (props) {
  return props.order && (0, _helpers.mediaProperty)(props, props.order, 'order');
}, function (props) {
  return props.offset && (0, _helpers.mediaProperty)(props, props.offset, 'margin-left', true);
}, function (props) {
  return props.basis && (0, _helpers.checkWidth)(props, props.basis);
});
module.exports = exports['default'];