'use strict';

exports.__esModule = true;
exports.Row = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _helpers = require('../helpers');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// eslint-disable-next-line
var Row = exports.Row = function Row(props) {
  return (0, _styledComponents.css)(_templateObject, (0, _helpers.mediaProperty)(props, (0, _helpers.propsChecker)(props, 'rowGutter'), 'margin-left'), (0, _helpers.mediaProperty)(props, (0, _helpers.propsChecker)(props, 'rowGutter'), 'margin-right'), props.flexDirection && (0, _helpers.mediaProperty)(props, props.flexDirection, 'flex-direction'), props.flexWrap && (0, _helpers.mediaProperty)(props, props.flexWrap, 'flex-wrap'), props.justifyContent && (0, _helpers.mediaProperty)(props, props.justifyContent, 'justify-content'), props.alignItems && (0, _helpers.mediaProperty)(props, props.alignItems, 'align-items'), props.alignContent && (0, _helpers.mediaProperty)(props, props.alignContent, 'align-content'));
};