'use strict';

exports.__esModule = true;
exports.Grid = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-left: auto;\n  margin-right: auto;\n  ', '\n'], ['\n  margin-left: auto;\n  margin-right: auto;\n  ', '\n']);

var _styledComponents = require('styled-components');

var _helpers = require('../helpers');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// eslint-disable-next-line
var Grid = exports.Grid = function Grid(props) {
  return (0, _styledComponents.css)(_templateObject, props.fluid && '\n    padding-right: ' + (0, _helpers.propsChecker)(props, 'gridFluid') + ';\n    padding-left: ' + (0, _helpers.propsChecker)(props, 'gridFluid') + ';\n  ');
};