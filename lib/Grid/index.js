'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// $FlowIssues


var Styled = (0, _styledComponents2.default)(function (_ref) {
  var children = _ref.children,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      as = _ref$as === undefined ? 'div' : _ref$as,
      props = _objectWithoutProperties(_ref, ['children', 'fluid', 'as']);

  return _react2.default.createElement(as, props, children);
})(_templateObject, _styled.Grid);

var GridElement = function GridElement(props) {
  return _react2.default.createElement(Styled, props);
};

GridElement.defaultProps = {
  as: 'div',
  fluid: false
};

// $FlowIssues
exports.default = GridElement;
module.exports = exports['default'];