"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationHeader = exports.NotificationCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@blend-ui/core");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _bxChevronRightCircle = _interopRequireDefault(require("@iconify/icons-bx/bx-chevron-right-circle"));

var _icons = require("@blend-ui/icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18n = _interopRequireDefault(require("../lib/i18n"));

var _excluded = ["title", "selectOnChange", "buttonOnClick", "closeClick", "options"],
    _excluded2 = ["AppIcon", "title", "date", "msg", "footer"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

_i18n["default"].init();

var StyledNotification = (0, _styledComponents["default"])(_core.Box).withConfig({
  displayName: "Notifications__StyledNotification",
  componentId: "sc-1pz0a77-0"
})(["width:300px;height:112px;background:#ffffff;border:1px solid #e5f3f2;box-sizing:border-box;border-radius:10px;"]);
var StyledBar = (0, _styledComponents["default"])(_core.Flex).withConfig({
  displayName: "Notifications__StyledBar",
  componentId: "sc-1pz0a77-1"
})(["width:8px;height:112px;background:#99ceca;border-top-left-radius:10px;border-bottom-left-radius:10px;"]);
var StyledTitleText = (0, _styledComponents["default"])(_core.Text).withConfig({
  displayName: "Notifications__StyledTitleText",
  componentId: "sc-1pz0a77-2"
})(["font-size:0.75rem;font-weight:600;line-height:0.938rem;text-transform:capitalize;"]);
var StyledDateText = (0, _styledComponents["default"])(_core.Text).withConfig({
  displayName: "Notifications__StyledDateText",
  componentId: "sc-1pz0a77-3"
})(["font-weight:300;font-size:0.625rem;line-height:0.75rem;"]);
var StyledNotificationText = (0, _styledComponents["default"])(_core.Text).withConfig({
  displayName: "Notifications__StyledNotificationText",
  componentId: "sc-1pz0a77-4"
})(["font-weight:normal;font-size:0.75rem;line-height:0.938rem;color:#1e1d1d;"]);
var StyledNotificationFooterText = (0, _styledComponents["default"])(_core.Text).withConfig({
  displayName: "Notifications__StyledNotificationFooterText",
  componentId: "sc-1pz0a77-5"
})(["font-weight:600;font-size:0.625rem;line-height:0.75rem;color:#5a5757;"]);
var StyledNotificationHeader = (0, _styledComponents["default"])(_core.Text).withConfig({
  displayName: "Notifications__StyledNotificationHeader",
  componentId: "sc-1pz0a77-6"
})(["font-weight:600;font-size:1rem;line-height:1.25rem;color:#1e1d1d;"]);
var StyledSelect = (0, _styledComponents["default"])(_core.Select).withConfig({
  displayName: "Notifications__StyledSelect",
  componentId: "sc-1pz0a77-7"
})(["font-size:0.75rem;line-height:1.875rem;height:30px;color:#00847a;border-color:#00847a;"]);

var NotificationHeader = function NotificationHeader(_ref) {
  var title = _ref.title,
      selectOnChange = _ref.selectOnChange,
      buttonOnClick = _ref.buttonOnClick,
      closeClick = _ref.closeClick,
      options = _ref.options,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Flex, _extends({
    flexDirection: "column",
    width: "300px"
  }, props), /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    flexDirection: "row"
  }, /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    width: 1 / 2,
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(StyledNotificationHeader, null, title)), /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    width: 1 / 2,
    justifyContent: "flex-end",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_icons.BlendIcon, {
    iconify: _bxChevronRightCircle["default"],
    color: "#00847A",
    height: "14px",
    width: "14px",
    onClick: closeClick,
    style: {
      cursor: "pointer"
    }
  }))), /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    flexDirection: "row",
    mt: "25px"
  }, /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    width: 1 / 2,
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(StyledSelect, {
    variation: "outline",
    size: "sm",
    onChange: selectOnChange
  }, options)), /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    width: 1 / 2,
    justifyContent: "flex-end",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    width: "100px",
    onClick: buttonOnClick
  }, _i18n["default"].__("Clear all"))))));
};

exports.NotificationHeader = NotificationHeader;
NotificationHeader.propTypes = {
  title: _propTypes["default"].string,
  options: _propTypes["default"].instanceOf(Array),
  selectOnChange: _propTypes["default"].func,
  buttonOnClick: _propTypes["default"].func,
  closeClick: _propTypes["default"].func
};

var NotificationCard = function NotificationCard(_ref2) {
  var AppIcon = _ref2.AppIcon,
      title = _ref2.title,
      date = _ref2.date,
      msg = _ref2.msg,
      footer = _ref2.footer,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledNotification, props, /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    flexDirection: "row"
  }, /*#__PURE__*/_react["default"].createElement(StyledBar, null), /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    p: 10,
    width: 1
  }, /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    width: "32px"
  }, /*#__PURE__*/_react["default"].createElement(AppIcon, {
    width: "20px",
    height: "20px"
  })), /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    width: "233px",
    height: "92px",
    flexDirection: "column"
  }, /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    flexDirection: "row"
  }, /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    width: 1 / 2,
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(StyledTitleText, null, title)), /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    width: 1 / 2,
    justifyContent: "flex-end",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(StyledDateText, null, date))), /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    height: "45px",
    mt: 10
  }, /*#__PURE__*/_react["default"].createElement(StyledNotificationText, {
    as: "p"
  }, msg)), /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    mt: 10
  }, /*#__PURE__*/_react["default"].createElement(StyledNotificationFooterText, null, footer)))))));
}; //new Date().toDateString()


exports.NotificationCard = NotificationCard;
NotificationCard.propTypes = {
  AppIcon: _propTypes["default"].elementType,
  title: _propTypes["default"].string,
  date: _propTypes["default"].string,
  msg: _propTypes["default"].string,
  footer: _propTypes["default"].string
};
NotificationHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NotificationHeader",
  "props": {
    "title": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "options": {
      "type": {
        "name": "instanceOf",
        "value": "Array"
      },
      "required": false,
      "description": ""
    },
    "selectOnChange": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "buttonOnClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "closeClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};
NotificationCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NotificationCard",
  "props": {
    "AppIcon": {
      "type": {
        "name": "elementType"
      },
      "required": false,
      "description": ""
    },
    "title": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "date": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "msg": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "footer": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};