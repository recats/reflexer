'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styled = require('./styled');

var _const = require('./const');

var consts = _interopRequireWildcard(_const);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Styled = (0, _styledComponents2.default)(function (_ref) {
  var children = _ref.children,
      flexDirection = _ref.flexDirection,
      flexWrap = _ref.flexWrap,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      alignContent = _ref.alignContent,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['children', 'flexDirection', 'flexWrap', 'justifyContent', 'alignItems', 'alignContent', 'theme']);

  return _react2.default.createElement('div', props, children);
})(_templateObject, _styled.Row);

var FlexElement = function FlexElement(props) {
  return _react2.default.createElement(Styled, props);
};

FlexElement.defaultProps = {
  theme: undefined,
  flexWrap: { xs: consts.flexWrap.wrap },
  flexDirection: { xs: consts.flexDirection.row },
  justifyContent: { xs: consts.justifyContent.flexStart },
  alignItems: { xs: consts.alignItems.stretch },
  alignContent: { xs: consts.alignContent.stretch }
};

// $FlowIssues
exports.default = (0, _styledComponents.withTheme)(FlexElement);
module.exports = exports['default'];