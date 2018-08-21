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
      basis = _ref.basis,
      order = _ref.order,
      offset = _ref.offset,
      theme = _ref.theme,
      _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? 'div' : _ref$tag,
      props = _objectWithoutProperties(_ref, ['children', 'basis', 'order', 'offset', 'theme', 'tag']);

  return _react2.default.createElement(tag, props, children);
})(_templateObject, _styled.Col);

var ColElement = function ColElement(props) {
  return _react2.default.createElement(Styled, props);
};

ColElement.defaultProps = {
  tag: 'div',
  order: undefined,
  offset: undefined,
  theme: undefined
};

// $FlowIssues
exports.default = (0, _styledComponents.withTheme)(ColElement);
module.exports = exports['default'];