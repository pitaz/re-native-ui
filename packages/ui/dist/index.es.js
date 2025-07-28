import React, { useState, useMemo, useContext, createContext, useRef, useEffect, useCallback } from 'react';
import { View, StyleSheet, Appearance, Text as Text$1, TouchableOpacity, ActivityIndicator, TextInput, Modal, FlatList, Switch as Switch$1, Animated, ScrollView } from 'react-native';

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
  return /*#__PURE__*/React.createElement(View, {
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
  return /*#__PURE__*/React.createElement(View, {
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
  return /*#__PURE__*/React.createElement(View, {
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
    return /*#__PURE__*/React.createElement(View, {
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

var _excluded$9 = ["children", "padding", "maxWidth", "style"];
function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Container = function Container(_ref) {
  var children = _ref.children,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 16 : _ref$padding,
    _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === void 0 ? 600 : _ref$maxWidth,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded$9);
  return /*#__PURE__*/React.createElement(View, _objectSpread$b({
    style: [styles$1.container, {
      padding: padding,
      maxWidth: maxWidth
    }, style]
  }, props), children);
};
var styles$1 = StyleSheet.create({
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

function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultLightTheme = {
  colors: {
    primary: "#1E90FF",
    text: "#000",
    background: "#FFF",
    muted: "#888",
    border: "#E0E0E0",
    error: "#FF0000"
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
var defaultDarkTheme = _objectSpread$a(_objectSpread$a({}, defaultLightTheme), {}, {
  colors: _objectSpread$a(_objectSpread$a({}, defaultLightTheme.colors), {}, {
    text: "#FFF",
    background: "#121212",
    border: "#333",
    muted: "#AAA"
  }),
  mode: "dark"
});

var ThemeContext = /*#__PURE__*/createContext(defaultLightTheme);
var ThemeToggleContext = /*#__PURE__*/createContext(function () {});
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;
  var systemColorScheme = Appearance.getColorScheme();
  var _useState = useState(systemColorScheme !== null && systemColorScheme !== void 0 ? systemColorScheme : 'light'),
    _useState2 = _slicedToArray(_useState, 2),
    colorMode = _useState2[0],
    setColorMode = _useState2[1];
  var toggleColorMode = function toggleColorMode() {
    return setColorMode(function (prev) {
      return prev === 'light' ? 'dark' : 'light';
    });
  };
  var theme = useMemo(function () {
    return colorMode === 'light' ? defaultLightTheme : defaultDarkTheme;
  }, [colorMode]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: theme
  }, /*#__PURE__*/React.createElement(ThemeToggleContext.Provider, {
    value: toggleColorMode
  }, children));
};
var useTheme = function useTheme() {
  return useContext(ThemeContext);
};
var useToggleColorMode = function useToggleColorMode() {
  return useContext(ThemeToggleContext);
};

var _excluded$8 = ["variant", "style", "children"];
function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Text = function Text(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'body' : _ref$variant,
    style = _ref.style,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$8);
  var theme = useTheme();
  var styles = StyleSheet.create({
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
  return /*#__PURE__*/React.createElement(Text$1, _objectSpread$9({
    style: [styles[variant], style]
  }, props), children);
};

var _excluded$7 = ["children", "bg", "p", "style"];
function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Box = function Box(_ref) {
  var children = _ref.children,
    bg = _ref.bg,
    p = _ref.p,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded$7);
  var theme = useTheme();
  var themedStyle = StyleSheet.create({
    box: {
      backgroundColor: bg ? theme.colors[bg] : undefined,
      padding: p ? theme.spacing[p] : undefined
    }
  });
  return /*#__PURE__*/React.createElement(View, _objectSpread$8({
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
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress,
    disabled: disabled || loading,
    style: combinedStyle
  }, loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    color: "#fff"
  }) : /*#__PURE__*/React.createElement(Text$1, {
    style: textStyle
  }, children));
};

var _excluded$6 = ["label", "error", "style", "rightIcon", "leftIcon"];
function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Input = function Input(_ref) {
  var label = _ref.label,
    error = _ref.error,
    style = _ref.style,
    rightIcon = _ref.rightIcon,
    leftIcon = _ref.leftIcon,
    props = _objectWithoutProperties(_ref, _excluded$6);
  var theme = useTheme();
  var styles = StyleSheet.create({
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
    inputWithrightIcon: {
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
    leftIcon: {
      position: 'absolute',
      left: 12,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    rightIcon: {
      position: 'absolute',
      right: 12,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, label && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(View, {
    style: styles.inputContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.leftIcon
  }, leftIcon && leftIcon), /*#__PURE__*/React.createElement(TextInput, _objectSpread$7({
    style: [rightIcon ? styles.inputWithrightIcon : styles.input, style],
    placeholderTextColor: theme.colors.muted
  }, props)), /*#__PURE__*/React.createElement(View, {
    style: styles.rightIcon
  }, rightIcon && rightIcon)), error && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.error
  }, error));
};

var _excluded$5 = ["label", "error"];
function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PasswordInput = function PasswordInput(_ref) {
  var label = _ref.label,
    error = _ref.error,
    props = _objectWithoutProperties(_ref, _excluded$5);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var theme = useTheme();
  var toggleVisibility = function toggleVisibility() {
    return setVisible(function (prev) {
      return !prev;
    });
  };
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Input, _objectSpread$6({
    label: label,
    error: error,
    secureTextEntry: !visible,
    rightIcon: /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: toggleVisibility
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: theme.colors.primary
      }
    }, visible ? 'Hide' : 'Show'))
  }, props)));
};

var _excluded$4 = ["label", "error", "rows", "style"];
function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TextArea = function TextArea(_ref) {
  var label = _ref.label,
    error = _ref.error,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 4 : _ref$rows,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded$4);
  return /*#__PURE__*/React.createElement(Input, _objectSpread$5({
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

var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (value) => value instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getEventValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;

var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));

var isPlainObject = (tempObject) => {
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return (isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf'));
};

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    const isFileListInstance = typeof FileList !== 'undefined' ? data instanceof FileList : false;
    if (data instanceof Date) {
        copy = new Date(data);
    }
    else if (!(isWeb && (data instanceof Blob || isFileListInstance)) &&
        (isArray || isObject(data))) {
        copy = isArray ? [] : {};
        if (!isArray && !isPlainObject(data)) {
            copy = data;
        }
        else {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    copy[key] = cloneObject(data[key]);
                }
            }
        }
    }
    else {
        return data;
    }
    return copy;
}

var isKey = (value) => /^\w*$/.test(value);

var isUndefined = (val) => val === undefined;

var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

var get = (object, path, defaultValue) => {
    if (!path || !isObject(object)) {
        return defaultValue;
    }
    const result = (isKey(path) ? [path] : stringToPath(path)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], object);
    return isUndefined(result) || result === object
        ? isUndefined(object[path])
            ? defaultValue
            : object[path]
        : result;
};

var isBoolean = (value) => typeof value === 'boolean';

var set = (object, path, value) => {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            return;
        }
        object[key] = newValue;
        object = object[key];
    }
};

const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

const HookFormContext = React.createContext(null);
HookFormContext.displayName = 'HookFormContext';
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const useFormContext = () => React.useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const FormProvider$1 = (props) => {
    const { children, ...data } = props;
    return (React.createElement(HookFormContext.Provider, { value: data }, children));
};

var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
    const result = {
        defaultValues: control._defaultValues,
    };
    for (const key in formState) {
        Object.defineProperty(result, key, {
            get: () => {
                const _key = key;
                if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                    control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            },
        });
    }
    return result;
};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name, exact } = props || {};
    const [formState, updateFormState] = React.useState(control._formState);
    const _localProxyFormState = React.useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        validatingFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    useIsomorphicLayoutEffect(() => control._subscribe({
        name,
        formState: _localProxyFormState.current,
        exact,
        callback: (formState) => {
            !disabled &&
                updateFormState({
                    ...control._formState,
                    ...formState,
                });
        },
    }), [name, disabled, exact]);
    React.useEffect(() => {
        _localProxyFormState.current.isValid && control._setValid(true);
    }, [control]);
    return React.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
}

var isString = (value) => typeof value === 'string';

var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
        return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName),
            get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2, _internal_visited = new WeakSet()) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
        return true;
    }
    _internal_visited.add(object1);
    _internal_visited.add(object2);
    for (const key of keys1) {
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if ((isDateObject(val1) && isDateObject(val2)) ||
                (isObject(val1) && isObject(val2)) ||
                (Array.isArray(val1) && Array.isArray(val2))
                ? !deepEqual(val1, val2, _internal_visited)
                : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}

/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */
function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, exact, compute, } = props || {};
    const _defaultValue = React.useRef(defaultValue);
    const _compute = React.useRef(compute);
    const _computeFormValues = React.useRef(undefined);
    _compute.current = compute;
    const defaultValueMemo = React.useMemo(() => control._getWatch(name, _defaultValue.current), [control, name]);
    const [value, updateValue] = React.useState(_compute.current ? _compute.current(defaultValueMemo) : defaultValueMemo);
    useIsomorphicLayoutEffect(() => control._subscribe({
        name,
        formState: {
            values: true,
        },
        exact,
        callback: (formState) => {
            if (!disabled) {
                const formValues = generateWatchOutput(name, control._names, formState.values || control._formValues, false, _defaultValue.current);
                if (_compute.current) {
                    const computedFormValues = _compute.current(formValues);
                    if (!deepEqual(computedFormValues, _computeFormValues.current)) {
                        updateValue(computedFormValues);
                        _computeFormValues.current = computedFormValues;
                    }
                }
                else {
                    updateValue(formValues);
                }
            }
        },
    }), [control, disabled, name, exact]);
    React.useEffect(() => control._removeUnmounted());
    return value;
}

/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */
function useController(props) {
    const methods = useFormContext();
    const { name, disabled, control = methods.control, shouldUnregister, defaultValue, } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const defaultValueMemo = React.useMemo(() => get(control._formValues, name, get(control._defaultValues, name, defaultValue)), [control, name, defaultValue]);
    const value = useWatch({
        control,
        name,
        defaultValue: defaultValueMemo,
        exact: true,
    });
    const formState = useFormState({
        control,
        name,
        exact: true,
    });
    const _props = React.useRef(props);
    const _registerProps = React.useRef(control.register(name, {
        ...props.rules,
        value,
        ...(isBoolean(props.disabled) ? { disabled: props.disabled } : {}),
    }));
    _props.current = props;
    const fieldState = React.useMemo(() => Object.defineProperties({}, {
        invalid: {
            enumerable: true,
            get: () => !!get(formState.errors, name),
        },
        isDirty: {
            enumerable: true,
            get: () => !!get(formState.dirtyFields, name),
        },
        isTouched: {
            enumerable: true,
            get: () => !!get(formState.touchedFields, name),
        },
        isValidating: {
            enumerable: true,
            get: () => !!get(formState.validatingFields, name),
        },
        error: {
            enumerable: true,
            get: () => get(formState.errors, name),
        },
    }), [formState, name]);
    const onChange = React.useCallback((event) => _registerProps.current.onChange({
        target: {
            value: getEventValue(event),
            name: name,
        },
        type: EVENTS.CHANGE,
    }), [name]);
    const onBlur = React.useCallback(() => _registerProps.current.onBlur({
        target: {
            value: get(control._formValues, name),
            name: name,
        },
        type: EVENTS.BLUR,
    }), [name, control._formValues]);
    const ref = React.useCallback((elm) => {
        const field = get(control._fields, name);
        if (field && elm) {
            field._f.ref = {
                focus: () => elm.focus && elm.focus(),
                select: () => elm.select && elm.select(),
                setCustomValidity: (message) => elm.setCustomValidity(message),
                reportValidity: () => elm.reportValidity(),
            };
        }
    }, [control._fields, name]);
    const field = React.useMemo(() => ({
        name,
        value,
        ...(isBoolean(disabled) || formState.disabled
            ? { disabled: formState.disabled || disabled }
            : {}),
        onChange,
        onBlur,
        ref,
    }), [name, disabled, formState.disabled, onChange, onBlur, ref, value]);
    React.useEffect(() => {
        const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
        control.register(name, {
            ..._props.current.rules,
            ...(isBoolean(_props.current.disabled)
                ? { disabled: _props.current.disabled }
                : {}),
        });
        const updateMounted = (name, value) => {
            const field = get(control._fields, name);
            if (field && field._f) {
                field._f.mount = value;
            }
        };
        updateMounted(name, true);
        if (_shouldUnregisterField) {
            const value = cloneObject(get(control._options.defaultValues, name));
            set(control._defaultValues, name, value);
            if (isUndefined(get(control._formValues, name))) {
                set(control._formValues, name, value);
            }
        }
        !isArrayField && control.register(name);
        return () => {
            (isArrayField
                ? _shouldUnregisterField && !control._state.action
                : _shouldUnregisterField)
                ? control.unregister(name)
                : updateMounted(name, false);
        };
    }, [name, control, isArrayField, shouldUnregister]);
    React.useEffect(() => {
        control._setDisabledField({
            disabled,
            name,
        });
    }, [disabled, name, control]);
    return React.useMemo(() => ({
        field,
        formState,
        fieldState,
    }), [field, formState, fieldState]);
}

/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */
const Controller = (props) => props.render(useController(props));

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? {
        ...errors[name],
        types: {
            ...(errors[name] && errors[name].types ? errors[name].types : {}),
            [type]: message || true,
        },
    }
    : {};

var convertToArrayPayload = (value) => (Array.isArray(value) ? value : [value]);

var createSubject = () => {
    let _observers = [];
    const next = (value) => {
        for (const observer of _observers) {
            observer.next && observer.next(value);
        }
    };
    const subscribe = (observer) => {
        _observers.push(observer);
        return {
            unsubscribe: () => {
                _observers = _observers.filter((o) => o !== observer);
            },
        };
    };
    const unsubscribe = () => {
        _observers = [];
    };
    return {
        get observers() {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe,
    };
};

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var isFileInput = (element) => element.type === 'file';

var isFunction = (value) => typeof value === 'function';

var isHTMLElement = (value) => {
    if (!isWeb) {
        return false;
    }
    const owner = value ? value.ownerDocument : 0;
    return (value instanceof
        (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement));
};

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioInput = (element) => element.type === 'radio';

var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

var live = (ref) => isHTMLElement(ref) && ref.isConnected;

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const paths = Array.isArray(path)
        ? path
        : isKey(path)
            ? [path]
            : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
        delete childObject[key];
    }
    if (index !== 0 &&
        ((isObject(childObject) && isEmptyObject(childObject)) ||
            (Array.isArray(childObject) && isEmptyArray(childObject)))) {
        unset(object, paths.slice(0, -1));
    }
    return object;
}

var objectHasFunction = (data) => {
    for (const key in data) {
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};

function markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                fields[key] = Array.isArray(data[key]) ? [] : {};
                markFieldsDirty(data[key], fields[key]);
            }
            else if (!isNullOrUndefined(data[key])) {
                fields[key] = true;
            }
        }
    }
    return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                if (isUndefined(formValues) ||
                    isPrimitive(dirtyFieldsFromValues[key])) {
                    dirtyFieldsFromValues[key] = Array.isArray(data[key])
                        ? markFieldsDirty(data[key], [])
                        : { ...markFieldsDirty(data[key]) };
                }
                else {
                    getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
                }
            }
            else {
                dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
            }
        }
    }
    return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === ''
            ? NaN
            : value
                ? +value
                : value
        : valueAsDate && isString(value)
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(_f) {
    const ref = _f.ref;
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [...ref.selectedOptions].map(({ value }) => value);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}

var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var isRegex = (value) => value instanceof RegExp;

var getRuleValue = (rule) => isUndefined(rule)
    ? rule
    : isRegex(rule)
        ? rule.source
        : isObject(rule)
            ? isRegex(rule.value)
                ? rule.value.source
                : rule.value
            : rule;

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

const ASYNC_FUNCTION = 'AsyncFunction';
var hasPromiseValidation = (fieldReference) => !!fieldReference &&
    !!fieldReference.validate &&
    !!((isFunction(fieldReference.validate) &&
        fieldReference.validate.constructor.name === ASYNC_FUNCTION) ||
        (isObject(fieldReference.validate) &&
            Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION)));

var hasValidation = (options) => options.mount &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

var isWatched = (name, _names, isBlurEvent) => !isBlurEvent &&
    (_names.watchAll ||
        _names.watch.has(name) ||
        [..._names.watch].some((watchName) => name.startsWith(watchName) &&
            /^\.\w+/.test(name.slice(watchName.length))));

const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f) {
                if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
                    return true;
                }
                else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
                    return true;
                }
                else {
                    if (iterateFieldsByAction(currentField, action)) {
                        break;
                    }
                }
            }
            else if (isObject(currentField)) {
                if (iterateFieldsByAction(currentField, action)) {
                    break;
                }
            }
        }
    }
    return;
};

function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name,
        };
    }
    const names = name.split('.');
    while (names.length) {
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return { name };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError,
            };
        }
        if (foundError && foundError.root && foundError.root.type) {
            return {
                name: `${fieldName}.root`,
                error: foundError.root,
            };
        }
        names.pop();
    }
    return {
        name,
    };
}

var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(_proxyFormState).length ||
        Object.keys(formState).find((key) => _proxyFormState[key] ===
            (!isRoot || VALIDATION_MODE.all)));
};

var shouldSubscribeByName = (name, signalName, exact) => !name ||
    !signalName ||
    name === signalName ||
    convertToArrayPayload(name).some((currentName) => currentName &&
        (exact
            ? currentName === signalName
            : currentName.startsWith(signalName) ||
                signalName.startsWith(currentName)));

var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
    if (mode.isOnAll) {
        return false;
    }
    else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);

var updateFieldArrayRootError = (errors, error, name) => {
    const fieldArrayErrors = convertToArrayPayload(get(errors, name));
    set(fieldArrayErrors, 'root', error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
};

var isMessage = (value) => isString(value);

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, } = field._f;
    const inputValue = get(formValues, name);
    if (!mount || disabledFieldNames.has(name)) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) &&
        isUndefined(ref.value) &&
        isUndefined(inputValue)) ||
        (isHTMLElement(ref) && ref.value === '') ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message),
        };
    };
    if (isFieldArray
        ? !Array.isArray(inputValue) || !inputValue.length
        : required &&
            ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
                (isBoolean(inputValue) && !inputValue) ||
                (isCheckBox && !getCheckboxValue(refs).isValid) ||
                (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber ||
                (inputValue ? +inputValue : inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time) => new Date(new Date().toDateString() + ' ' + time);
            const isTime = ref.type == 'time';
            const isWeek = ref.type == 'week';
            if (isString(maxOutput.value) && inputValue) {
                exceedMax = isTime
                    ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value)
                    : isWeek
                        ? inputValue > maxOutput.value
                        : valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value) && inputValue) {
                exceedMin = isTime
                    ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value)
                    : isWeek
                        ? inputValue < minOutput.value
                        : valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) &&
        !isEmpty &&
        (isString(inputValue) || (isFieldArray && Array.isArray(inputValue)))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > +maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message),
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message),
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult,
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};

const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true,
};
function createFormControl(props = {}) {
    let _options = {
        ...defaultOptions,
        ...props,
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isReady: false,
        isLoading: isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: _options.errors || {},
        disabled: _options.disabled || false,
    };
    let _fields = {};
    let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values)
        ? cloneObject(_options.defaultValues || _options.values) || {}
        : {};
    let _formValues = _options.shouldUnregister
        ? {}
        : cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false,
    };
    let _names = {
        mount: new Set(),
        disabled: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        validatingFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    };
    let _proxySubscribeFormState = {
        ..._proxyFormState,
    };
    const _subjects = {
        array: createSubject(),
        state: createSubject(),
    };
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback) => (wait) => {
        clearTimeout(timer);
        timer = setTimeout(callback, wait);
    };
    const _setValid = async (shouldUpdateValid) => {
        if (!_options.disabled &&
            (_proxyFormState.isValid ||
                _proxySubscribeFormState.isValid ||
                shouldUpdateValid)) {
            const isValid = _options.resolver
                ? isEmptyObject((await _runSchema()).errors)
                : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) {
                _subjects.state.next({
                    isValid,
                });
            }
        }
    };
    const _updateIsValidating = (names, isValidating) => {
        if (!_options.disabled &&
            (_proxyFormState.isValidating ||
                _proxyFormState.validatingFields ||
                _proxySubscribeFormState.isValidating ||
                _proxySubscribeFormState.validatingFields)) {
            (names || Array.from(_names.mount)).forEach((name) => {
                if (name) {
                    isValidating
                        ? set(_formState.validatingFields, name, isValidating)
                        : unset(_formState.validatingFields, name);
                }
            });
            _subjects.state.next({
                validatingFields: _formState.validatingFields,
                isValidating: !isEmptyObject(_formState.validatingFields),
            });
        }
    };
    const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
        if (args && method && !_options.disabled) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState &&
                Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if ((_proxyFormState.touchedFields ||
                _proxySubscribeFormState.touchedFields) &&
                shouldUpdateFieldsAndState &&
                Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid,
            });
        }
        else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error) => {
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors,
        });
    };
    const _setErrors = (errors) => {
        _formState.errors = errors;
        _subjects.state.next({
            errors: _formState.errors,
            isValid: false,
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
            isUndefined(defaultValue) ||
                (ref && ref.defaultChecked) ||
                shouldSkipSetValueAs
                ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f))
                : setFieldValue(name, defaultValue);
            _state.mount && _setValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name,
        };
        if (!_options.disabled) {
            if (!isBlurEvent || shouldDirty) {
                if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
                    isPreviousDirty = _formState.isDirty;
                    _formState.isDirty = output.isDirty = _getDirty();
                    shouldUpdateField = isPreviousDirty !== output.isDirty;
                }
                const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
                isPreviousDirty = !!get(_formState.dirtyFields, name);
                isCurrentFieldPristine
                    ? unset(_formState.dirtyFields, name)
                    : set(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                shouldUpdateField =
                    shouldUpdateField ||
                        ((_proxyFormState.dirtyFields ||
                            _proxySubscribeFormState.dirtyFields) &&
                            isPreviousDirty !== !isCurrentFieldPristine);
            }
            if (isBlurEvent) {
                const isPreviousFieldTouched = get(_formState.touchedFields, name);
                if (!isPreviousFieldTouched) {
                    set(_formState.touchedFields, name, isBlurEvent);
                    output.touchedFields = _formState.touchedFields;
                    shouldUpdateField =
                        shouldUpdateField ||
                            ((_proxyFormState.touchedFields ||
                                _proxySubscribeFormState.touchedFields) &&
                                isPreviousFieldTouched !== isBlurEvent);
                }
            }
            shouldUpdateField && shouldRender && _subjects.state.next(output);
        }
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState) => {
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) &&
            isBoolean(isValid) &&
            _formState.isValid !== isValid;
        if (_options.delayError && error) {
            delayErrorCallback = debounce(() => updateErrors(name, error));
            delayErrorCallback(_options.delayError);
        }
        else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error
                ? set(_formState.errors, name, error)
                : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) ||
            !isEmptyObject(fieldState) ||
            shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...(shouldUpdateValid && isBoolean(isValid) ? { isValid } : {}),
                errors: _formState.errors,
                name,
            };
            _formState = {
                ..._formState,
                ...updatedFormState,
            };
            _subjects.state.next(updatedFormState);
        }
    };
    const _runSchema = async (name) => {
        _updateIsValidating(name, true);
        const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
        _updateIsValidating(name);
        return result;
    };
    const executeSchemaAndUpdateState = async (names) => {
        const { errors } = await _runSchema(names);
        if (names) {
            for (const name of names) {
                const error = get(errors, name);
                error
                    ? set(_formState.errors, name, error)
                    : unset(_formState.errors, name);
            }
        }
        else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true,
    }) => {
        for (const name in fields) {
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const isPromiseFunction = field._f && hasPromiseValidation(field._f);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([name], true);
                    }
                    const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([name]);
                    }
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid &&
                        (get(fieldError, _f.name)
                            ? isFieldArrayRoot
                                ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name)
                                : set(_formState.errors, _f.name, fieldError[_f.name])
                            : unset(_formState.errors, _f.name));
                }
                !isEmptyObject(fieldValue) &&
                    (await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context));
            }
        }
        return context.valid;
    };
    const _removeUnmounted = () => {
        for (const name of _names.unMount) {
            const field = get(_fields, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every((ref) => !live(ref))
                    : !live(field._f.ref)) &&
                unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data) => !_options.disabled &&
        (name && data && set(_formValues, name, data),
            !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
        ...(_state.mount
            ? _formValues
            : isUndefined(defaultValue)
                ? _defaultValues
                : isString(names)
                    ? { [names]: defaultValue }
                    : defaultValue),
    }, isGlobal, defaultValue);
    const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        let fieldValue = value;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled &&
                    set(_formValues, name, getFieldValueAs(value, fieldReference));
                fieldValue =
                    isHTMLElement(fieldReference.ref) && isNullOrUndefined(value)
                        ? ''
                        : value;
                if (isMultipleSelect(fieldReference.ref)) {
                    [...fieldReference.ref.options].forEach((optionRef) => (optionRef.selected = fieldValue.includes(optionRef.value)));
                }
                else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.forEach((checkboxRef) => {
                            if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                                if (Array.isArray(fieldValue)) {
                                    checkboxRef.checked = !!fieldValue.find((data) => data === checkboxRef.value);
                                }
                                else {
                                    checkboxRef.checked =
                                        fieldValue === checkboxRef.value || !!fieldValue;
                                }
                            }
                        });
                    }
                    else {
                        fieldReference.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));
                    }
                }
                else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                }
                else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.state.next({
                            name,
                            values: cloneObject(_formValues),
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) &&
            updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value, options) => {
        for (const fieldKey in value) {
            if (!value.hasOwnProperty(fieldKey)) {
                return;
            }
            const fieldValue = value[fieldKey];
            const fieldName = name + '.' + fieldKey;
            const field = get(_fields, fieldName);
            (_names.array.has(name) ||
                isObject(fieldValue) ||
                (field && !field._f)) &&
                !isDateObject(fieldValue)
                ? setValues(fieldName, fieldValue, options)
                : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: cloneObject(_formValues),
            });
            if ((_proxyFormState.isDirty ||
                _proxyFormState.dirtyFields ||
                _proxySubscribeFormState.isDirty ||
                _proxySubscribeFormState.dirtyFields) &&
                options.shouldDirty) {
                _subjects.state.next({
                    name,
                    dirtyFields: getDirtyFields(_defaultValues, _formValues),
                    isDirty: _getDirty(name, cloneValue),
                });
            }
        }
        else {
            field && !field._f && !isNullOrUndefined(cloneValue)
                ? setValues(name, cloneValue, options)
                : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({ ..._formState, name });
        _subjects.state.next({
            name: _state.mount ? name : undefined,
            values: cloneObject(_formValues),
        });
    };
    const onChange = async (event) => {
        _state.mount = true;
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = get(_fields, name);
        const _updateIsFieldValueUpdated = (fieldValue) => {
            isFieldValueUpdated =
                Number.isNaN(fieldValue) ||
                    (isDateObject(fieldValue) && isNaN(fieldValue.getTime())) ||
                    deepEqual(fieldValue, get(_formValues, name, fieldValue));
        };
        const validationModeBeforeSubmit = getValidationModes(_options.mode);
        const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type
                ? getFieldValue(field._f)
                : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = (!hasValidation(field._f) &&
                !_options.resolver &&
                !get(_formState.errors, name) &&
                !field._f.deps) ||
                skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                field._f.onBlur && field._f.onBlur(event);
                delayErrorCallback && delayErrorCallback(0);
            }
            else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent &&
                _subjects.state.next({
                    name,
                    type: event.type,
                    values: cloneObject(_formValues),
                });
            if (shouldSkipValidation) {
                if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                    if (_options.mode === 'onBlur') {
                        if (isBlurEvent) {
                            _setValid();
                        }
                    }
                    else if (!isBlurEvent) {
                        _setValid();
                    }
                }
                return (shouldRender &&
                    _subjects.state.next({ name, ...(watched ? {} : fieldState) }));
            }
            !isBlurEvent && watched && _subjects.state.next({ ..._formState });
            if (_options.resolver) {
                const { errors } = await _runSchema([name]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = isEmptyObject(errors);
                }
            }
            else {
                _updateIsValidating([name], true);
                error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                _updateIsValidating([name]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    if (error) {
                        isValid = false;
                    }
                    else if (_proxyFormState.isValid ||
                        _proxySubscribeFormState.isValid) {
                        isValid = await executeBuiltInValidation(_fields, true);
                    }
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps &&
                    trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const _focusInput = (ref, key) => {
        if (get(_formState.errors, key) && ref.focus) {
            ref.focus();
            return 1;
        }
        return;
    };
    const trigger = async (name, options = {}) => {
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name
                ? !fieldNames.some((name) => get(errors, name))
                : isValid;
        }
        else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
                const field = get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _setValid();
        }
        else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...(!isString(name) ||
                ((_proxyFormState.isValid || _proxySubscribeFormState.isValid) &&
                    isValid !== _formState.isValid)
                ? {}
                : { name }),
            ...(_options.resolver || !name ? { isValid } : {}),
            errors: _formState.errors,
        });
        options.shouldFocus &&
            !validationResult &&
            iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames) => {
        const values = {
            ...(_state.mount ? _formValues : _defaultValues),
        };
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const getFieldState = (name, formState) => ({
        invalid: !!get((formState || _formState).errors, name),
        isDirty: !!get((formState || _formState).dirtyFields, name),
        error: get((formState || _formState).errors, name),
        isValidating: !!get(_formState.validatingFields, name),
        isTouched: !!get((formState || _formState).touchedFields, name),
    });
    const clearErrors = (name) => {
        name &&
            convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {},
        });
    };
    const setError = (name, error, options) => {
        const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
        const currentError = get(_formState.errors, name) || {};
        // Don't override existing error messages elsewhere in the object tree.
        const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
        set(_formState.errors, name, {
            ...restOfErrorTree,
            ...error,
            ref,
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue) => isFunction(name)
        ? _subjects.state.subscribe({
            next: (payload) => 'values' in payload &&
                name(_getWatch(undefined, defaultValue), payload),
        })
        : _getWatch(name, defaultValue, true);
    const _subscribe = (props) => _subjects.state.subscribe({
        next: (formState) => {
            if (shouldSubscribeByName(props.name, formState.name, props.exact) &&
                shouldRenderFormState(formState, props.formState || _proxyFormState, _setFormState, props.reRenderRoot)) {
                props.callback({
                    values: { ..._formValues },
                    ..._formState,
                    ...formState,
                    defaultValues: _defaultValues,
                });
            }
        },
    }).unsubscribe;
    const subscribe = (props) => {
        _state.mount = true;
        _proxySubscribeFormState = {
            ..._proxySubscribeFormState,
            ...props.formState,
        };
        return _subscribe({
            ...props,
            formState: _proxySubscribeFormState,
        });
    };
    const unregister = (name, options = {}) => {
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                unset(_fields, fieldName);
                unset(_formValues, fieldName);
            }
            !options.keepError && unset(_formState.errors, fieldName);
            !options.keepDirty && unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && unset(_formState.touchedFields, fieldName);
            !options.keepIsValidating &&
                unset(_formState.validatingFields, fieldName);
            !_options.shouldUnregister &&
                !options.keepDefaultValue &&
                unset(_defaultValues, fieldName);
        }
        _subjects.state.next({
            values: cloneObject(_formValues),
        });
        _subjects.state.next({
            ..._formState,
            ...(!options.keepDirty ? {} : { isDirty: _getDirty() }),
        });
        !options.keepIsValid && _setValid();
    };
    const _setDisabledField = ({ disabled, name, }) => {
        if ((isBoolean(disabled) && _state.mount) ||
            !!disabled ||
            _names.disabled.has(name)) {
            disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
        }
    };
    const register = (name, options = {}) => {
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
        set(_fields, name, {
            ...(field || {}),
            _f: {
                ...(field && field._f ? field._f : { ref: { name } }),
                name,
                mount: true,
                ...options,
            },
        });
        _names.mount.add(name);
        if (field) {
            _setDisabledField({
                disabled: isBoolean(options.disabled)
                    ? options.disabled
                    : _options.disabled,
                name,
            });
        }
        else {
            updateValidAndValue(name, true, options.value);
        }
        return {
            ...(disabledIsDefined
                ? { disabled: options.disabled || _options.disabled }
                : {}),
            ...(_options.progressive
                ? {
                    required: !!options.required,
                    min: getRuleValue(options.min),
                    max: getRuleValue(options.max),
                    minLength: getRuleValue(options.minLength),
                    maxLength: getRuleValue(options.maxLength),
                    pattern: getRuleValue(options.pattern),
                }
                : {}),
            name,
            onChange,
            onBlur: onChange,
            ref: (ref) => {
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value)
                        ? ref.querySelectorAll
                            ? ref.querySelectorAll('input,select,textarea')[0] || ref
                            : ref
                        : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox
                        ? refs.find((option) => option === fieldRef)
                        : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...(radioOrCheckbox
                                ? {
                                    refs: [
                                        ...refs.filter(live),
                                        fieldRef,
                                        ...(Array.isArray(get(_defaultValues, name)) ? [{}] : []),
                                    ],
                                    ref: { type: fieldRef.type, name },
                                }
                                : { ref: fieldRef }),
                        },
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                }
                else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) &&
                        !(isNameInFieldArray(_names.array, name) && _state.action) &&
                        _names.unMount.add(name);
                }
            },
        };
    };
    const _focusError = () => _options.shouldFocusError &&
        iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled) => {
        if (isBoolean(disabled)) {
            _subjects.state.next({ disabled });
            iterateFieldsByAction(_fields, (ref, name) => {
                const currentField = get(_fields, name);
                if (currentField) {
                    ref.disabled = currentField._f.disabled || disabled;
                    if (Array.isArray(currentField._f.refs)) {
                        currentField._f.refs.forEach((inputRef) => {
                            inputRef.disabled = currentField._f.disabled || disabled;
                        });
                    }
                }
            }, 0, false);
        }
    };
    const handleSubmit = (onValid, onInvalid) => async (e) => {
        let onValidError = undefined;
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist &&
                e.persist();
        }
        let fieldValues = cloneObject(_formValues);
        _subjects.state.next({
            isSubmitting: true,
        });
        if (_options.resolver) {
            const { errors, values } = await _runSchema();
            _formState.errors = errors;
            fieldValues = cloneObject(values);
        }
        else {
            await executeBuiltInValidation(_fields);
        }
        if (_names.disabled.size) {
            for (const name of _names.disabled) {
                unset(fieldValues, name);
            }
        }
        unset(_formState.errors, 'root');
        if (isEmptyObject(_formState.errors)) {
            _subjects.state.next({
                errors: {},
            });
            try {
                await onValid(fieldValues, e);
            }
            catch (error) {
                onValidError = error;
            }
        }
        else {
            if (onInvalid) {
                await onInvalid({ ..._formState.errors }, e);
            }
            _focusError();
            setTimeout(_focusError);
        }
        _subjects.state.next({
            isSubmitted: true,
            isSubmitting: false,
            isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
            submitCount: _formState.submitCount + 1,
            errors: _formState.errors,
        });
        if (onValidError) {
            throw onValidError;
        }
    };
    const resetField = (name, options = {}) => {
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, cloneObject(get(_defaultValues, name)));
            }
            else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, cloneObject(options.defaultValue));
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue
                    ? _getDirty(name, cloneObject(get(_defaultValues, name)))
                    : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _setValid();
            }
            _subjects.state.next({ ..._formState });
        }
    };
    const _reset = (formValues, keepStateOptions = {}) => {
        const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const isEmptyResetValues = isEmptyObject(formValues);
        const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                const fieldsToCheck = new Set([
                    ..._names.mount,
                    ...Object.keys(getDirtyFields(_defaultValues, _formValues)),
                ]);
                for (const fieldName of Array.from(fieldsToCheck)) {
                    get(_formState.dirtyFields, fieldName)
                        ? set(values, fieldName, get(_formValues, fieldName))
                        : setValue(fieldName, get(values, fieldName));
                }
            }
            else {
                if (isWeb && isUndefined(formValues)) {
                    for (const name of _names.mount) {
                        const field = get(_fields, name);
                        if (field && field._f) {
                            const fieldReference = Array.isArray(field._f.refs)
                                ? field._f.refs[0]
                                : field._f.ref;
                            if (isHTMLElement(fieldReference)) {
                                const form = fieldReference.closest('form');
                                if (form) {
                                    form.reset();
                                    break;
                                }
                            }
                        }
                    }
                }
                if (keepStateOptions.keepFieldsRef) {
                    for (const fieldName of _names.mount) {
                        setValue(fieldName, get(values, fieldName));
                    }
                }
                else {
                    _fields = {};
                }
            }
            _formValues = _options.shouldUnregister
                ? keepStateOptions.keepDefaultValues
                    ? cloneObject(_defaultValues)
                    : {}
                : cloneObject(values);
            _subjects.array.next({
                values: { ...values },
            });
            _subjects.state.next({
                values: { ...values },
            });
        }
        _names = {
            mount: keepStateOptions.keepDirtyValues ? _names.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: '',
        };
        _state.mount =
            !_proxyFormState.isValid ||
                !!keepStateOptions.keepIsValid ||
                !!keepStateOptions.keepDirtyValues;
        _state.watch = !!_options.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? _formState.submitCount
                : 0,
            isDirty: isEmptyResetValues
                ? false
                : keepStateOptions.keepDirty
                    ? _formState.isDirty
                    : !!(keepStateOptions.keepDefaultValues &&
                        !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? _formState.isSubmitted
                : false,
            dirtyFields: isEmptyResetValues
                ? {}
                : keepStateOptions.keepDirtyValues
                    ? keepStateOptions.keepDefaultValues && _formValues
                        ? getDirtyFields(_defaultValues, _formValues)
                        : _formState.dirtyFields
                    : keepStateOptions.keepDefaultValues && formValues
                        ? getDirtyFields(_defaultValues, formValues)
                        : keepStateOptions.keepDirty
                            ? _formState.dirtyFields
                            : {},
            touchedFields: keepStateOptions.keepTouched
                ? _formState.touchedFields
                : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful
                ? _formState.isSubmitSuccessful
                : false,
            isSubmitting: false,
        });
    };
    const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues)
        ? formValues(_formValues)
        : formValues, keepStateOptions);
    const setFocus = (name, options = {}) => {
        const field = get(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs
                ? fieldReference.refs[0]
                : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect &&
                    isFunction(fieldRef.select) &&
                    fieldRef.select();
            }
        }
    };
    const _setFormState = (updatedFormState) => {
        _formState = {
            ..._formState,
            ...updatedFormState,
        };
    };
    const _resetDefaultValues = () => isFunction(_options.defaultValues) &&
        _options.defaultValues().then((values) => {
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false,
            });
        });
    const methods = {
        control: {
            register,
            unregister,
            getFieldState,
            handleSubmit,
            setError,
            _subscribe,
            _runSchema,
            _focusError,
            _getWatch,
            _getDirty,
            _setValid,
            _setFieldArray,
            _setDisabledField,
            _setErrors,
            _getFieldArray,
            _reset,
            _resetDefaultValues,
            _removeUnmounted,
            _disableForm,
            _subjects,
            _proxyFormState,
            get _fields() {
                return _fields;
            },
            get _formValues() {
                return _formValues;
            },
            get _state() {
                return _state;
            },
            set _state(value) {
                _state = value;
            },
            get _defaultValues() {
                return _defaultValues;
            },
            get _names() {
                return _names;
            },
            set _names(value) {
                _names = value;
            },
            get _formState() {
                return _formState;
            },
            get _options() {
                return _options;
            },
            set _options(value) {
                _options = {
                    ..._options,
                    ...value,
                };
            },
        },
        subscribe,
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState,
    };
    return {
        ...methods,
        formControl: methods,
    };
}

/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */
function useForm(props = {}) {
    const _formControl = React.useRef(undefined);
    const _values = React.useRef(undefined);
    const [formState, updateFormState] = React.useState({
        isDirty: false,
        isValidating: false,
        isLoading: isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: props.errors || {},
        disabled: props.disabled || false,
        isReady: false,
        defaultValues: isFunction(props.defaultValues)
            ? undefined
            : props.defaultValues,
    });
    if (!_formControl.current) {
        if (props.formControl) {
            _formControl.current = {
                ...props.formControl,
                formState,
            };
            if (props.defaultValues && !isFunction(props.defaultValues)) {
                props.formControl.reset(props.defaultValues, props.resetOptions);
            }
        }
        else {
            const { formControl, ...rest } = createFormControl(props);
            _formControl.current = {
                ...rest,
                formState,
            };
        }
    }
    const control = _formControl.current.control;
    control._options = props;
    useIsomorphicLayoutEffect(() => {
        const sub = control._subscribe({
            formState: control._proxyFormState,
            callback: () => updateFormState({ ...control._formState }),
            reRenderRoot: true,
        });
        updateFormState((data) => ({
            ...data,
            isReady: true,
        }));
        control._formState.isReady = true;
        return sub;
    }, [control]);
    React.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
    React.useEffect(() => {
        if (props.mode) {
            control._options.mode = props.mode;
        }
        if (props.reValidateMode) {
            control._options.reValidateMode = props.reValidateMode;
        }
    }, [control, props.mode, props.reValidateMode]);
    React.useEffect(() => {
        if (props.errors) {
            control._setErrors(props.errors);
            control._focusError();
        }
    }, [control, props.errors]);
    React.useEffect(() => {
        props.shouldUnregister &&
            control._subjects.state.next({
                values: control._getWatch(),
            });
    }, [control, props.shouldUnregister]);
    React.useEffect(() => {
        if (control._proxyFormState.isDirty) {
            const isDirty = control._getDirty();
            if (isDirty !== formState.isDirty) {
                control._subjects.state.next({
                    isDirty,
                });
            }
        }
    }, [control, formState.isDirty]);
    React.useEffect(() => {
        if (props.values && !deepEqual(props.values, _values.current)) {
            control._reset(props.values, {
                keepFieldsRef: true,
                ...control._options.resetOptions,
            });
            _values.current = props.values;
            updateFormState((state) => ({ ...state }));
        }
        else {
            control._resetDefaultValues();
        }
    }, [control, props.values]);
    React.useEffect(() => {
        if (!control._state.mount) {
            control._setValid();
            control._state.mount = true;
        }
        if (control._state.watch) {
            control._state.watch = false;
            control._subjects.state.next({ ...control._formState });
        }
        control._removeUnmounted();
    });
    _formControl.current.formState = getProxyFormState(formState, control);
    return _formControl.current;
}

const s=(e,s,o)=>{if(e&&"reportValidity"in e){const r=get(o,s);e.setCustomValidity(r&&r.message||""),e.reportValidity();}},o$1=(t,e)=>{for(const o in e.fields){const r=e.fields[o];r&&r.ref&&"reportValidity"in r.ref?s(r.ref,o,t):r.refs&&r.refs.forEach(e=>s(e,o,t));}},r=(s,r)=>{r.shouldUseNativeValidation&&o$1(s,r);const f={};for(const o in s){const n=get(r.fields,o),a=Object.assign(s[o]||{},{ref:n&&n.ref});if(i(r.names||Object.keys(s),o)){const s=Object.assign({},get(f,o));set(s,"root",a),set(f,o,s);}else set(f,o,a);}return f},i=(t,e)=>t.some(t=>t.startsWith(e+"."));

function o(o,n,a){return void 0===n&&(n={}),void 0===a&&(a={}),function(s,i,c){try{return Promise.resolve(function(t,r){try{var u=(n.context&&"development"===process.env.NODE_ENV&&console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"),Promise.resolve(o["sync"===a.mode?"validateSync":"validate"](s,Object.assign({abortEarly:!1},n,{context:i}))).then(function(t){return c.shouldUseNativeValidation&&o$1({},c),{values:a.raw?s:t,errors:{}}}));}catch(e){return r(e)}return u&&u.then?u.then(void 0,r):u}(0,function(e){if(!e.inner)throw e;return {values:{},errors:r((o=e,n=!c.shouldUseNativeValidation&&"all"===c.criteriaMode,(o.inner||[]).reduce(function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),n){var o=e[t.path].types,a=o&&o[t.type];e[t.path]=appendErrors(t.path,n,e,t.type,a?[].concat(a,t.message):t.message);}return e},{})),c)};var o,n;}))}catch(e){return Promise.reject(e)}}}

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormProvider = function FormProvider(_ref) {
  var defaultValues = _ref.defaultValues,
    children = _ref.children,
    schema = _ref.schema;
  var methods = useForm({
    defaultValues: defaultValues,
    mode: 'onChange',
    resolver: schema ? o(schema) : undefined
  });
  return /*#__PURE__*/React.createElement(FormProvider$1, _objectSpread$4({}, methods), children);
};

var _excluded$3 = ["name", "control", "rules"];
function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ControlledInput = function ControlledInput(_ref) {
  var name = _ref.name,
    control = _ref.control,
    rules = _ref.rules,
    rest = _objectWithoutProperties(_ref, _excluded$3);
  return /*#__PURE__*/React.createElement(Controller, {
    control: control,
    name: name,
    rules: rules,
    render: function render(_ref2) {
      var _fieldState$error;
      var _ref2$field = _ref2.field,
        onChange = _ref2$field.onChange,
        onBlur = _ref2$field.onBlur,
        value = _ref2$field.value,
        fieldState = _ref2.fieldState;
      return /*#__PURE__*/React.createElement(Input, _objectSpread$3({
        onChangeText: onChange,
        onBlur: onBlur,
        value: value,
        error: (_fieldState$error = fieldState.error) === null || _fieldState$error === void 0 ? void 0 : _fieldState$error.message
      }, rest));
    }
  });
};

var Select = function Select(_ref) {
  var label = _ref.label,
    placeholder = _ref.placeholder,
    options = _ref.options,
    value = _ref.value,
    onChange = _ref.onChange,
    error = _ref.error;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var theme = useTheme();
  var selected = options.find(function (opt) {
    return opt.value === value;
  });
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: function onPress() {
      return setOpen(true);
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: label,
    value: (selected === null || selected === void 0 ? void 0 : selected.label) || '',
    placeholder: placeholder,
    editable: false,
    pointerEvents: "none",
    rightIcon: /*#__PURE__*/React.createElement(Text$1, null, "\u25BC"),
    error: error
  })), /*#__PURE__*/React.createElement(Modal, {
    visible: open,
    transparent: true,
    animationType: "slide"
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.modalBackdrop,
    activeOpacity: 1,
    onPress: function onPress() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.modalContent, {
      backgroundColor: theme.colors.background
    }]
  }, /*#__PURE__*/React.createElement(FlatList, {
    data: options,
    keyExtractor: function keyExtractor(item) {
      return item.value;
    },
    renderItem: function renderItem(_ref2) {
      var item = _ref2.item;
      return /*#__PURE__*/React.createElement(TouchableOpacity, {
        style: styles.option,
        onPress: function onPress() {
          onChange(item.value);
          setOpen(false);
        }
      }, /*#__PURE__*/React.createElement(Text$1, {
        style: {
          color: theme.colors.text
        }
      }, item.label));
    }
  })))));
};
var styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000088'
  },
  modalContent: {
    padding: 20,
    maxHeight: '50%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  option: {
    paddingVertical: 12
  }
});

var _excluded$2 = ["name", "control", "rules", "options"];
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ControlledSelect = function ControlledSelect(_ref) {
  var name = _ref.name,
    control = _ref.control,
    rules = _ref.rules,
    options = _ref.options,
    rest = _objectWithoutProperties(_ref, _excluded$2);
  return /*#__PURE__*/React.createElement(Controller, {
    control: control,
    name: name,
    rules: rules,
    render: function render(_ref2) {
      var _fieldState$error;
      var _ref2$field = _ref2.field,
        onChange = _ref2$field.onChange,
        value = _ref2$field.value,
        fieldState = _ref2.fieldState;
      return /*#__PURE__*/React.createElement(Select, _objectSpread$2({
        options: options,
        onChange: onChange,
        value: value,
        error: (_fieldState$error = fieldState.error) === null || _fieldState$error === void 0 ? void 0 : _fieldState$error.message
      }, rest));
    }
  });
};

var RadioGroup = function RadioGroup(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    options = _ref.options,
    error = _ref.error;
  var theme = useTheme();
  var styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md
    },
    label: {
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.xs
    },
    outerCircle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: theme.colors.border,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8
    },
    innerCircle: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.primary
    },
    optionLabel: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text
    },
    error: {
      color: 'red',
      fontSize: theme.fontSizes.sm,
      marginTop: 4
    }
  });
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, label && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.label
  }, label), options.map(function (option) {
    return /*#__PURE__*/React.createElement(TouchableOpacity, {
      key: option.value,
      style: styles.option,
      onPress: function onPress() {
        return onChange(option.value);
      }
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.outerCircle
    }, value === option.value && /*#__PURE__*/React.createElement(View, {
      style: styles.innerCircle
    })), /*#__PURE__*/React.createElement(Text$1, {
      style: styles.optionLabel
    }, option.label));
  }), error && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.error
  }, error));
};

var CheckBox = function CheckBox(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    error = _ref.error;
  var theme = useTheme();
  var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      marginBottom: theme.spacing.md
    },
    checkboxWrapper: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    box: {
      width: 22,
      height: 22,
      borderWidth: 1.5,
      borderColor: error ? theme.colors.error : value ? theme.colors.primary : theme.colors.border,
      backgroundColor: value ? theme.colors.primary : theme.colors.background,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
      shadowColor: value ? theme.colors.primary : 'transparent',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: value ? 0.2 : 0,
      shadowRadius: 4,
      elevation: value ? 2 : 0
    },
    check: {
      width: 12,
      height: 12,
      justifyContent: 'center',
      alignItems: 'center'
    },
    checkMark: {
      width: 8,
      height: 4,
      borderLeftWidth: 2,
      borderBottomWidth: 2,
      borderColor: theme.colors.background,
      transform: [{
        rotate: '-45deg'
      }],
      marginTop: -1
    },
    label: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      flex: 1
    },
    error: {
      color: theme.colors.error,
      fontSize: theme.fontSizes.sm,
      marginTop: 4,
      marginLeft: 34 // Align with label text
    }
  });
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.checkboxWrapper,
    onPress: function onPress() {
      return onChange(!value);
    },
    activeOpacity: 0.7
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.box
  }, value && (/*#__PURE__*/React.createElement(View, {
    style: styles.check
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.checkMark
  })))), label && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.label
  }, label)), error && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.error
  }, error));
};

var Switch = function Switch(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    error = _ref.error;
  var theme = useTheme();
  var styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md
    },
    labelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    label: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text
    },
    error: {
      color: 'red',
      fontSize: theme.fontSizes.sm,
      marginTop: 4
    }
  });
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.labelContainer
  }, label && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(Switch$1, {
    value: value,
    onValueChange: onChange,
    thumbColor: value ? theme.colors.primary : theme.colors.muted,
    trackColor: {
      "false": theme.colors.border,
      "true": theme.colors.primary
    }
  })), error && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.error
  }, error));
};

var Slider = function Slider(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    error = _ref.error,
    disabled = _ref.disabled,
    _ref$showTooltip = _ref.showTooltip,
    showTooltip = _ref$showTooltip === void 0 ? false : _ref$showTooltip;
  var theme = useTheme();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    sliderWidth = _useState2[0],
    setSliderWidth = _useState2[1];
  var animatedValue = useRef(new Animated.Value(0)).current;
  var clamp = function clamp(val) {
    return Math.min(Math.max(val, min), max);
  };
  var getPositionForValue = function getPositionForValue(val) {
    var ratio = (val - min) / (max - min);
    return ratio * sliderWidth;
  };
  var getValueForPosition = function getValueForPosition(pos) {
    var ratio = Math.min(Math.max(pos / sliderWidth, 0), 1);
    var rawValue = min + ratio * (max - min);
    return Math.round(rawValue / step) * step;
  };
  var handleTouch = function handleTouch(e) {
    if (sliderWidth === 0 || disabled) return;
    var touchX = e.nativeEvent.pageX;
    var trackElement = e.target;
    trackElement.measure(function (x, y, width, height, pageX, pageY) {
      var relativeX = touchX - pageX;
      var clamped = clamp(getValueForPosition(relativeX));
      onChange(clamped);
      animatedValue.setValue(getPositionForValue(clamped));
    });
  };
  useEffect(function () {
    if (sliderWidth === 0) return;
    var pos = getPositionForValue(value);
    Animated.timing(animatedValue, {
      toValue: pos,
      duration: 150,
      useNativeDriver: false
    }).start();
  }, [value, sliderWidth, animatedValue]);
  var handleLayout = useCallback(function (e) {
    var width = e.nativeEvent.layout.width;
    setSliderWidth(width);
    if (width > 0) {
      animatedValue.setValue(getPositionForValue(value));
    }
  }, [value, animatedValue]);
  var styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md
    },
    label: {
      marginBottom: theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text
    },
    track: {
      height: 40,
      borderRadius: 20,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      position: 'relative',
      alignItems: 'center'
    },
    fill: {
      height: 6,
      borderRadius: 3,
      backgroundColor: theme.colors.primary,
      position: 'absolute',
      left: 0,
      top: 17,
      bottom: 17
    },
    thumb: {
      position: 'absolute',
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.colors.primary,
      top: 8,
      marginLeft: -12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    },
    tooltipContainer: {
      position: 'absolute',
      bottom: 30,
      transform: [{
        translateX: -20
      }],
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 4
    },
    tooltipText: {
      color: 'white',
      fontSize: 12
    },
    error: {
      color: 'red',
      fontSize: theme.fontSizes.sm,
      marginTop: 4
    }
  });
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, label && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.track,
    onLayout: handleLayout,
    onPress: handleTouch,
    activeOpacity: 1
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.fill, {
      width: animatedValue
    }]
  }), showTooltip && (/*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.tooltipContainer, {
      left: animatedValue
    }]
  }, /*#__PURE__*/React.createElement(Text$1, {
    style: styles.tooltipText
  }, value))), /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.thumb, {
      left: animatedValue
    }]
  })), error && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.error
  }, error));
};

var DatePicker = function DatePicker(_ref) {
  var label = _ref.label,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? new Date() : _ref$value,
    onChange = _ref.onChange,
    error = _ref.error,
    _ref$minimumYear = _ref.minimumYear,
    minimumYear = _ref$minimumYear === void 0 ? 1950 : _ref$minimumYear,
    _ref$maximumYear = _ref.maximumYear,
    maximumYear = _ref$maximumYear === void 0 ? new Date().getFullYear() : _ref$maximumYear;
  var theme = useTheme();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = useState(value),
    _useState4 = _slicedToArray(_useState3, 2),
    tempDate = _useState4[0],
    setTempDate = _useState4[1];
  var styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md
    },
    label: {
      marginBottom: theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text
    },
    pickerTrigger: {
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      backgroundColor: theme.colors.background
    },
    triggerText: {
      color: theme.colors.text,
      fontSize: theme.fontSizes.md
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalContent: {
      backgroundColor: theme.colors.background,
      margin: 20,
      borderRadius: 12,
      padding: 16
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12
    },
    pickerRow: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    column: {
      flex: 1,
      height: 150
    },
    item: {
      padding: 10,
      textAlign: 'center',
      fontSize: theme.fontSizes.md,
      color: theme.colors.text
    },
    selected: {
      fontWeight: 'bold',
      color: theme.colors.primary
    },
    errorText: {
      color: 'red',
      fontSize: theme.fontSizes.sm,
      marginTop: 4
    }
  });
  var years = Array.from({
    length: maximumYear - minimumYear + 1
  }, function (_, i) {
    return minimumYear + i;
  });
  var months = Array.from({
    length: 12
  }, function (_, i) {
    return i + 1;
  });
  var days = Array.from({
    length: 31
  }, function (_, i) {
    return i + 1;
  });
  var updateDate = function updateDate(type, val) {
    var newDate = new Date(tempDate);
    if (type === 'year') newDate.setFullYear(val);
    if (type === 'month') newDate.setMonth(val - 1);
    if (type === 'day') newDate.setDate(val);
    setTempDate(newDate);
  };
  var formatDate = function formatDate(d) {
    return "".concat(d.getFullYear(), "-").concat((d.getMonth() + 1).toString().padStart(2, '0'), "-").concat(d.getDate().toString().padStart(2, '0'));
  };
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, label && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.pickerTrigger,
    onPress: function onPress() {
      return setVisible(true);
    }
  }, /*#__PURE__*/React.createElement(Text$1, {
    style: styles.triggerText
  }, formatDate(value))), error && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.errorText
  }, error), /*#__PURE__*/React.createElement(Modal, {
    transparent: true,
    visible: visible,
    animationType: "fade"
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.modalBackground
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.modalContent
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.header
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: function onPress() {
      return setVisible(false);
    }
  }, /*#__PURE__*/React.createElement(Text$1, null, "Cancel")), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: function onPress() {
      onChange(tempDate);
      setVisible(false);
    }
  }, /*#__PURE__*/React.createElement(Text$1, {
    style: {
      color: theme.colors.primary
    }
  }, "Confirm"))), /*#__PURE__*/React.createElement(View, {
    style: styles.pickerRow
  }, [{
    data: years,
    key: 'year',
    selected: tempDate.getFullYear()
  }, {
    data: months,
    key: 'month',
    selected: tempDate.getMonth() + 1
  }, {
    data: days,
    key: 'day',
    selected: tempDate.getDate()
  }].map(function (_ref2) {
    var data = _ref2.data,
      key = _ref2.key,
      selected = _ref2.selected;
    return /*#__PURE__*/React.createElement(FlatList, {
      key: key,
      data: data,
      style: styles.column,
      keyExtractor: function keyExtractor(item) {
        return item.toString();
      },
      showsVerticalScrollIndicator: false,
      renderItem: function renderItem(_ref3) {
        var item = _ref3.item;
        return /*#__PURE__*/React.createElement(TouchableOpacity, {
          onPress: function onPress() {
            return updateDate(key, item);
          }
        }, /*#__PURE__*/React.createElement(Text$1, {
          style: [styles.item, selected === item && styles.selected]
        }, item));
      }
    });
  }))))));
};

var _excluded$1 = ["length", "value", "onChangeText", "error", "label"];
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var OTPInput = function OTPInput(_ref) {
  var _ref$length = _ref.length,
    length = _ref$length === void 0 ? 6 : _ref$length,
    value = _ref.value,
    onChangeText = _ref.onChangeText,
    error = _ref.error,
    label = _ref.label,
    inputProps = _objectWithoutProperties(_ref, _excluded$1);
  var theme = useTheme();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    focusedIndex = _useState2[0],
    setFocusedIndex = _useState2[1];
  var inputs = useRef([]);
  var styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md
    },
    label: {
      marginBottom: theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text
    },
    inputRow: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    inputBox: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 6,
      width: 40,
      height: 50,
      textAlign: 'center',
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      backgroundColor: theme.colors.background
    },
    inputBoxFocused: {
      borderColor: theme.colors.primary
    },
    error: {
      marginTop: 4,
      color: 'red',
      fontSize: theme.fontSizes.sm
    }
  });
  var handleChange = function handleChange(text, index) {
    if (!/^[0-9]?$/.test(text)) return;
    var updated = value.split('');
    updated[index] = text;
    var newValue = updated.join('');
    onChangeText(newValue);
    if (text && index < length - 1) {
      var _inputs$current;
      (_inputs$current = inputs.current[index + 1]) === null || _inputs$current === void 0 || _inputs$current.focus();
    }
  };
  var handleKeyPress = function handleKeyPress(e, index) {
    if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
      var _inputs$current2;
      (_inputs$current2 = inputs.current[index - 1]) === null || _inputs$current2 === void 0 || _inputs$current2.focus();
    }
  };
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, label && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(View, {
    style: styles.inputRow
  }, Array.from({
    length: length
  }).map(function (_, i) {
    return /*#__PURE__*/React.createElement(TextInput, _objectSpread$1({
      key: i,
      ref: function ref(_ref2) {
        inputs.current[i] = _ref2;
      },
      value: value[i] || '',
      onChangeText: function onChangeText(text) {
        return handleChange(text, i);
      },
      onKeyPress: function onKeyPress(e) {
        return handleKeyPress(e, i);
      },
      style: [styles.inputBox, focusedIndex === i && styles.inputBoxFocused],
      onFocus: function onFocus() {
        return setFocusedIndex(i);
      },
      keyboardType: "numeric",
      maxLength: 1
    }, inputProps));
  })), error && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.error
  }, error));
};

var _excluded = ["label", "value", "onChangeText", "error", "maskType", "maskPattern"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var formatPhone = function formatPhone(val) {
  var digits = val.replace(/\D/g, '').slice(0, 10);
  var parts = [];
  if (digits.length > 0) parts.push('(' + digits.slice(0, 3));
  if (digits.length >= 4) parts.push(') ' + digits.slice(3, 6));
  if (digits.length >= 7) parts.push('-' + digits.slice(6, 10));
  return parts.join('');
};
var formatCard = function formatCard(val) {
  return val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
};
var MaskedInput = function MaskedInput(_ref) {
  var label = _ref.label,
    value = _ref.value,
    _onChangeText = _ref.onChangeText,
    error = _ref.error,
    maskType = _ref.maskType,
    maskPattern = _ref.maskPattern,
    props = _objectWithoutProperties(_ref, _excluded);
  var theme = useTheme();
  var formatValue = function formatValue(val) {
    switch (maskType) {
      case 'phone':
        return formatPhone(val);
      case 'card':
        return formatCard(val);
      case 'custom':
        return maskPattern ? maskPattern(val) : val;
      default:
        return val;
    }
  };
  var styles = StyleSheet.create({
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
      paddingVertical: 12,
      paddingHorizontal: 14,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      backgroundColor: theme.colors.background
    },
    error: {
      marginTop: 4,
      color: 'red',
      fontSize: theme.fontSizes.sm
    }
  });
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, label && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(TextInput, _objectSpread({
    value: value,
    onChangeText: function onChangeText(text) {
      return _onChangeText(formatValue(text));
    },
    style: styles.input,
    placeholderTextColor: theme.colors.muted,
    keyboardType: "numeric"
  }, props)), error && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.error
  }, error));
};

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

var TagInput = function TagInput(_ref) {
  var label = _ref.label,
    tags = _ref.tags,
    onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Add a tag' : _ref$placeholder,
    error = _ref.error,
    maxTags = _ref.maxTags;
  var theme = useTheme();
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    input = _useState2[0],
    setInput = _useState2[1];
  var inputRef = useRef(null);
  var handleAddTag = function handleAddTag() {
    var trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      if (!maxTags || tags.length < maxTags) {
        onChange([].concat(_toConsumableArray(tags), [trimmed]));
      }
    }
    setInput('');
  };
  var handleKeyPress = function handleKeyPress(e) {
    if (e.nativeEvent.key === 'Backspace' && input === '' && tags.length) {
      onChange(tags.slice(0, -1));
    }
  };
  var handleInputChange = function handleInputChange(text) {
    if (text.endsWith(' ') || text.endsWith(',') || text.endsWith('\n')) {
      handleAddTag();
    } else {
      setInput(text);
    }
  };
  var removeTag = function removeTag(index) {
    var updated = _toConsumableArray(tags);
    updated.splice(index, 1);
    onChange(updated);
  };
  var styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md
    },
    label: {
      marginBottom: theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text
    },
    tagContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      backgroundColor: theme.colors.background
    },
    tag: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 4,
      paddingHorizontal: 8,
      backgroundColor: theme.colors.primary,
      borderRadius: 16
    },
    tagText: {
      color: theme.colors.background,
      fontSize: theme.fontSizes.sm,
      marginRight: 6
    },
    removeBtn: {
      paddingHorizontal: 4
    },
    input: {
      flexGrow: 1,
      minWidth: 80,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text
    },
    error: {
      marginTop: 4,
      color: 'red',
      fontSize: theme.fontSizes.sm
    }
  });
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, label && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(ScrollView, {
    horizontal: false,
    contentContainerStyle: styles.tagContainer
  }, tags.map(function (tag, idx) {
    return /*#__PURE__*/React.createElement(View, {
      key: idx,
      style: styles.tag
    }, /*#__PURE__*/React.createElement(Text$1, {
      style: styles.tagText
    }, tag), /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: function onPress() {
        return removeTag(idx);
      },
      style: styles.removeBtn
    }, /*#__PURE__*/React.createElement(Text$1, {
      style: {
        color: theme.colors.background
      }
    }, "\xD7")));
  }), /*#__PURE__*/React.createElement(TextInput, {
    ref: inputRef,
    value: input,
    onChangeText: handleInputChange,
    onKeyPress: handleKeyPress,
    placeholder: placeholder,
    placeholderTextColor: theme.colors.muted,
    style: styles.input,
    returnKeyType: "done",
    onSubmitEditing: handleAddTag
  })), error && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.error
  }, error));
};

var StepperInput = function StepperInput(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? Infinity : _ref$max,
    error = _ref.error,
    disabled = _ref.disabled;
  var theme = useTheme();
  var increase = function increase() {
    if (value + step <= max) onChange(value + step);
  };
  var decrease = function decrease() {
    if (value - step >= min) onChange(value - step);
  };
  var styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md
    },
    label: {
      marginBottom: theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text
    },
    stepperContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      overflow: 'hidden',
      backgroundColor: theme.colors.background
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      backgroundColor: theme.colors.background
    },
    buttonText: {
      fontSize: theme.fontSizes.lg,
      color: theme.colors.text
    },
    valueContainer: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center'
    },
    valueText: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text
    },
    error: {
      marginTop: 4,
      color: 'red',
      fontSize: theme.fontSizes.sm
    }
  });
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, label && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(View, {
    style: styles.stepperContainer
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: decrease,
    style: styles.button,
    disabled: disabled || value <= min
  }, /*#__PURE__*/React.createElement(Text$1, {
    style: styles.buttonText
  }, "\u2212")), /*#__PURE__*/React.createElement(View, {
    style: styles.valueContainer
  }, /*#__PURE__*/React.createElement(Text$1, {
    style: styles.valueText
  }, value)), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: increase,
    style: styles.button,
    disabled: disabled || value >= max
  }, /*#__PURE__*/React.createElement(Text$1, {
    style: styles.buttonText
  }, "+"))), error && /*#__PURE__*/React.createElement(Text$1, {
    style: styles.error
  }, error));
};

export { Box, Button, CheckBox, Container, ControlledInput, ControlledSelect, DatePicker, Divider, FormProvider, Input, MaskedInput, OTPInput, PasswordInput, RadioGroup, Select, Slider, Spacer, Stack, StepperInput, Switch, TagInput, Text, TextArea, ThemeProvider, defaultDarkTheme, defaultLightTheme, useTheme, useToggleColorMode };
//# sourceMappingURL=index.es.js.map
