'use strict';

var React = require('react');
var reactNative = require('react-native');

var Spacer = function Spacer(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 8 : _ref$size,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "vertical" : _ref$direction;
  var style = direction === "vertical" ? {
    height: size
  } : {
    width: size
  };
  return /*#__PURE__*/React.createElement(reactNative.View, {
    style: style
  });
};

var Divider = function Divider(_ref) {
  var _ref$thickness = _ref.thickness,
    thickness = _ref$thickness === void 0 ? 1 : _ref$thickness,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#E0E0E0" : _ref$color,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "horizontal" : _ref$direction,
    _ref$length = _ref.length,
    length = _ref$length === void 0 ? "100%" : _ref$length;
  var style = direction === "horizontal" ? {
    height: thickness,
    width: length,
    backgroundColor: color
  } : {
    width: thickness,
    height: length,
    backgroundColor: color
  };
  return /*#__PURE__*/React.createElement(reactNative.View, {
    style: style
  });
};

exports.Divider = Divider;
exports.Spacer = Spacer;
//# sourceMappingURL=index.js.map
