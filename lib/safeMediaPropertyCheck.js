'use strict';

exports.__esModule = true;

var _const = require('./Row/const');

var EnumRow = _interopRequireWildcard(_const);

var _helpers = require('./helpers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaultParams = {
  flexWrap: { xs: EnumRow.flexWrap.wrap },
  flexDirection: { xs: EnumRow.flexDirection.row },
  justifyContent: { xs: EnumRow.justifyContent.flexStart },
  alignItems: { xs: EnumRow.alignItems.stretch },
  alignContent: { xs: EnumRow.alignContent.stretch }
};

exports.default = function (props, valueKey, paramsKey, isCheckPecent) {
  if (Object.prototype.hasOwnProperty.call(props, valueKey)) {
    return (0, _helpers.mediaProperty)(props, props[valueKey], paramsKey, isCheckPecent);
  }
  return (0, _helpers.mediaProperty)(props, defaultParams[valueKey], paramsKey, isCheckPecent);
};

module.exports = exports['default'];