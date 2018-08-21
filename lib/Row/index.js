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

var _helpers = require('../helpers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// $FlowIssues


var Styled = (0, _styledComponents2.default)(function (_ref) {
  var children = _ref.children,
      flexDirection = _ref.flexDirection,
      flexWrap = _ref.flexWrap,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      alignContent = _ref.alignContent,
      theme = _ref.theme,
      _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? 'div' : _ref$tag,
      props = _objectWithoutProperties(_ref, ['children', 'flexDirection', 'flexWrap', 'justifyContent', 'alignItems', 'alignContent', 'theme', 'tag']);

  (0, _helpers.validationProps)({
    flexDirection: flexDirection, flexWrap: flexWrap, justifyContent: justifyContent, alignItems: alignItems, alignContent: alignContent
  });
  return _react2.default.createElement(tag, props, children);
})(_templateObject, _styled.Row);

var FlexElement = function FlexElement(props) {
  return _react2.default.createElement(Styled, props);
};

FlexElement.defaultProps = {
  theme: undefined,
  tag: 'div',
  flexWrap: { xs: consts.flexWrap.wrap },
  flexDirection: { xs: consts.flexDirection.row },
  justifyContent: { xs: consts.justifyContent.flexStart },
  alignItems: { xs: consts.alignItems.stretch },
  alignContent: { xs: consts.alignContent.stretch }
};

// $FlowIssues
exports.default = (0, _styledComponents.withTheme)(FlexElement);
module.exports = exports['default'];