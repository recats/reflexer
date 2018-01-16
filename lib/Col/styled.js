'use strict';

exports.__esModule = true;
exports.Col = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: ', ';\n  padding-left: ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: ', ';\n  padding-left: ', ';\n  ', ';\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _helpers = require('../helpers');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint arrow-body-style: ["error", "as-needed"] */


// eslint-disable-next-line
var Col = exports.Col = function Col(props) {
  return (0, _styledComponents.css)(_templateObject, (0, _helpers.propsChecker)(props, 'colGutter'), (0, _helpers.propsChecker)(props, 'colGutter'), props.order && (0, _helpers.mediaProperty)(props.order, 'order'), props.offset && (0, _helpers.mediaProperty)(props.offset, 'margin-left', _helpers.checkPercent), props.basis && (0, _helpers.checkWidth)(props.basis));
};