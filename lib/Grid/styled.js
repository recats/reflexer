'use strict';

exports.__esModule = true;
exports.Grid = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-left: auto;\n  margin-right: auto;\n  ', '\n'], ['\n  margin-left: auto;\n  margin-right: auto;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    ', ';\n    ', ';\n  '], ['\n    ', ';\n    ', ';\n  ']);

var _styledComponents = require('styled-components');

var _helpers = require('../helpers');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// eslint-disable-next-line
var Grid = exports.Grid = function Grid(props) {
  return (0, _styledComponents.css)(_templateObject, props.fluid && (0, _styledComponents.css)(_templateObject2, (0, _helpers.mediaProperty)((0, _helpers.propsChecker)(props, 'gridFluid'), 'padding-left'), (0, _helpers.mediaProperty)((0, _helpers.propsChecker)(props, 'gridFluid'), 'padding-right')));
};