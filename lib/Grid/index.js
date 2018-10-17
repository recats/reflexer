'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-left: auto;\n  margin-right: auto;\n  ', '\n'], ['\n  margin-left: auto;\n  margin-right: auto;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    ', ';\n    ', ';\n  '], ['\n    ', ';\n    ', ';\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

exports.default = _styledComponents2.default.div(_templateObject, function (props) {
  return props.fluid && (0, _styledComponents.css)(_templateObject2, (0, _helpers.mediaProperty)(props, (0, _helpers.propsChecker)(props, 'gridFluid'), 'padding-left'), (0, _helpers.mediaProperty)(props, (0, _helpers.propsChecker)(props, 'gridFluid'), 'padding-right'));
});
module.exports = exports['default'];