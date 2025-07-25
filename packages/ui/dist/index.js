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

var Stack = function Stack(_ref) {
  var children = _ref.children,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'column' : _ref$direction,
    _ref$spacing = _ref.spacing,
    spacing = _ref$spacing === void 0 ? 8 : _ref$spacing,
    style = _ref.style;
  var isRow = direction === 'row';
  return /*#__PURE__*/React.createElement(reactNative.View, {
    style: [{
      flexDirection: direction
    }, style]
  }, React.Children.map(children, function (child, index) {
    var isLast = index === React.Children.count(children) - 1;
    var spacingStyle = isRow ? {
      marginRight: isLast ? 0 : spacing
    } : {
      marginBottom: isLast ? 0 : spacing
    };
    return /*#__PURE__*/React.createElement(reactNative.View, {
      style: spacingStyle
    }, child);
  }));
};

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

var _excluded$5 = ["children", "padding", "maxWidth", "style"];
function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Container = function Container(_ref) {
  var children = _ref.children,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 16 : _ref$padding,
    _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === void 0 ? 600 : _ref$maxWidth,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded$5);
  return /*#__PURE__*/React.createElement(reactNative.View, _objectSpread$6({
    style: [styles.container, {
      padding: padding,
      maxWidth: maxWidth
    }, style]
  }, props), children);
};
var styles = reactNative.StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center'
  }
});

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultLightTheme = {
  colors: {
    primary: "#1E90FF",
    text: "#000",
    background: "#FFF",
    muted: "#888",
    border: "#E0E0E0"
  },
  mode: "light",
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  }
};
var defaultDarkTheme = _objectSpread$5(_objectSpread$5({}, defaultLightTheme), {}, {
  colors: _objectSpread$5(_objectSpread$5({}, defaultLightTheme.colors), {}, {
    text: "#FFF",
    background: "#121212",
    border: "#333",
    muted: "#AAA"
  }),
  mode: "dark"
});

var ThemeContext = /*#__PURE__*/React.createContext(defaultLightTheme);
var ThemeToggleContext = /*#__PURE__*/React.createContext(function () {});
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;
  var systemColorScheme = reactNative.Appearance.getColorScheme();
  var _useState = React.useState(systemColorScheme !== null && systemColorScheme !== void 0 ? systemColorScheme : 'light'),
    _useState2 = _slicedToArray(_useState, 2),
    colorMode = _useState2[0],
    setColorMode = _useState2[1];
  var toggleColorMode = function toggleColorMode() {
    return setColorMode(function (prev) {
      return prev === 'light' ? 'dark' : 'light';
    });
  };
  var theme = React.useMemo(function () {
    return colorMode === 'light' ? defaultLightTheme : defaultDarkTheme;
  }, [colorMode]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: theme
  }, /*#__PURE__*/React.createElement(ThemeToggleContext.Provider, {
    value: toggleColorMode
  }, children));
};
var useTheme = function useTheme() {
  return React.useContext(ThemeContext);
};
var useToggleColorMode = function useToggleColorMode() {
  return React.useContext(ThemeToggleContext);
};

var _excluded$4 = ["variant", "style", "children"];
function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Text = function Text(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'body' : _ref$variant,
    style = _ref.style,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$4);
  var theme = useTheme();
  var styles = reactNative.StyleSheet.create({
    heading: {
      fontSize: theme.fontSizes.xl,
      fontWeight: 'bold',
      color: theme.colors.text
    },
    subheading: {
      fontSize: theme.fontSizes.lg,
      fontWeight: '600',
      color: theme.colors.text
    },
    body: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text
    },
    caption: {
      fontSize: theme.fontSizes.sm,
      color: theme.colors.muted
    }
  });
  return /*#__PURE__*/React.createElement(reactNative.Text, _objectSpread$4({
    style: [styles[variant], style]
  }, props), children);
};

var _excluded$3 = ["children", "bg", "p", "style"];
function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Box = function Box(_ref) {
  var children = _ref.children,
    bg = _ref.bg,
    p = _ref.p,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded$3);
  var theme = useTheme();
  var themedStyle = reactNative.StyleSheet.create({
    box: {
      backgroundColor: bg ? theme.colors[bg] : undefined,
      padding: p ? theme.spacing[p] : undefined
    }
  });
  return /*#__PURE__*/React.createElement(reactNative.View, _objectSpread$3({
    style: [themedStyle.box, style]
  }, props), children);
};

var Button = function Button(_ref) {
  var children = _ref.children,
    onPress = _ref.onPress,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'solid' : _ref$variant;
  var theme = useTheme();
  var baseStyle = {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  };
  var solidStyle = {
    backgroundColor: theme.colors.primary
  };
  var outlineStyle = {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    backgroundColor: 'transparent'
  };
  var textStyle = {
    color: variant === 'solid' ? '#fff' : theme.colors.primary,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.md
  };
  var combinedStyle = [baseStyle, variant === 'solid' ? solidStyle : outlineStyle, disabled && {
    opacity: 0.6
  }];
  return /*#__PURE__*/React.createElement(reactNative.TouchableOpacity, {
    onPress: onPress,
    disabled: disabled || loading,
    style: combinedStyle
  }, loading ? /*#__PURE__*/React.createElement(reactNative.ActivityIndicator, {
    color: "#fff"
  }) : /*#__PURE__*/React.createElement(reactNative.Text, {
    style: textStyle
  }, children));
};

var _excluded$2 = ["label", "error", "style", "rightElement"];
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Input = function Input(_ref) {
  var label = _ref.label,
    error = _ref.error,
    style = _ref.style,
    rightElement = _ref.rightElement,
    props = _objectWithoutProperties(_ref, _excluded$2);
  var theme = useTheme();
  var styles = reactNative.StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md
    },
    label: {
      marginBottom: theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text
    },
    input: {
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      paddingVertical: 10,
      paddingHorizontal: 12,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      backgroundColor: theme.colors.background
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    inputWithRightElement: {
      flex: 1,
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      paddingVertical: 10,
      paddingHorizontal: 12,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      backgroundColor: theme.colors.background
    },
    error: {
      marginTop: 4,
      color: 'red',
      fontSize: theme.fontSizes.sm
    },
    rightElement: {
      position: 'absolute',
      right: 12,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  return /*#__PURE__*/React.createElement(reactNative.View, {
    style: styles.container
  }, label && /*#__PURE__*/React.createElement(reactNative.Text, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(reactNative.View, {
    style: styles.inputContainer
  }, /*#__PURE__*/React.createElement(reactNative.TextInput, _objectSpread$2({
    style: [rightElement ? styles.inputWithRightElement : styles.input, style],
    placeholderTextColor: theme.colors.muted
  }, props)), /*#__PURE__*/React.createElement(reactNative.View, {
    style: styles.rightElement
  }, rightElement && rightElement)), error && /*#__PURE__*/React.createElement(reactNative.Text, {
    style: styles.error
  }, error));
};

var _excluded$1 = ["label", "error"];
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PasswordInput = function PasswordInput(_ref) {
  var label = _ref.label,
    error = _ref.error,
    props = _objectWithoutProperties(_ref, _excluded$1);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var theme = useTheme();
  var toggleVisibility = function toggleVisibility() {
    return setVisible(function (prev) {
      return !prev;
    });
  };
  return /*#__PURE__*/React.createElement(reactNative.View, null, /*#__PURE__*/React.createElement(Input, _objectSpread$1({
    label: label,
    error: error,
    secureTextEntry: !visible,
    rightElement: /*#__PURE__*/React.createElement(reactNative.TouchableOpacity, {
      onPress: toggleVisibility
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: theme.colors.primary
      }
    }, visible ? 'Hide' : 'Show'))
  }, props)));
};

var _excluded = ["label", "error", "rows", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TextArea = function TextArea(_ref) {
  var label = _ref.label,
    error = _ref.error,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 4 : _ref$rows,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Input, _objectSpread({
    label: label,
    error: error,
    multiline: true,
    numberOfLines: rows,
    style: [{
      textAlignVertical: 'top',
      height: rows * 24
    }, style]
  }, props));
};

exports.Box = Box;
exports.Button = Button;
exports.Container = Container;
exports.Divider = Divider;
exports.Input = Input;
exports.PasswordInput = PasswordInput;
exports.Spacer = Spacer;
exports.Stack = Stack;
exports.Text = Text;
exports.TextArea = TextArea;
exports.ThemeProvider = ThemeProvider;
exports.defaultDarkTheme = defaultDarkTheme;
exports.defaultLightTheme = defaultLightTheme;
exports.useTheme = useTheme;
exports.useToggleColorMode = useToggleColorMode;
//# sourceMappingURL=index.js.map
