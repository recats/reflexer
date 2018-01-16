'use strict';

exports.__esModule = true;
exports.Row = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  margin-right: ', ';\n  margin-left: ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  margin-right: ', ';\n  margin-left: ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _helpers = require('../helpers');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// eslint-disable-next-line
var Row = exports.Row = function Row(props) {
  return (0, _styledComponents.css)(_templateObject, (0, _helpers.propsChecker)(props, 'rowGutter'), (0, _helpers.propsChecker)(props, 'rowGutter'), props.flexDirection && (0, _helpers.mediaProperty)(props.flexDirection, 'flex-direction'), props.flexWrap && (0, _helpers.mediaProperty)(props.flexWrap, 'flex-wrap'), props.justifyContent && (0, _helpers.mediaProperty)(props.justifyContent, 'justify-content'), props.alignItems && (0, _helpers.mediaProperty)(props.alignItems, 'align-items'), props.alignContent && (0, _helpers.mediaProperty)(props.alignContent, 'align-content'));
};