"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MarketBadge = exports.ListMenuItem = exports.ListMenu = exports.ListItemIconLink = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@blend-ui/core");

var _icons = require("@blend-ui/icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _excluded = ["children", "icon", "onClick", "label", "color"],
    _excluded2 = ["items", "pointerBackground", "pointerIconColor", "pointerTextColor", "backgroundColor"],
    _excluded3 = ["id", "label", "onClick", "icon", "badge", "badgeColor", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SidebarContainer = (0, _styledComponents["default"])(_core.Flex).withConfig({
  displayName: "SidebarMenu__SidebarContainer",
  componentId: "sc-o04naj-0"
})(["width:286px;height:100%;z-index:1;padding-left:64px;padding-right:24px;padding-top:130px;position:fixed;border-radius:0 40px -40px 0;display:inline-block;vertical-align:middle;margin-right:10px;::before,::after{position:absolute;top:65px;width:30px;height:30px;content:\" \";}::before{left:-52px;border-bottom-right-radius:15px;border-width:0 1px 1px 0;}::after{right:-30px;border-bottom-left-radius:11px;border-width:0 1px 1px;}::after,::before{border:1px solid !transparent;transform:rotate(-270deg);}::after{box-shadow:-6px 5px 0 #f6f7f9;}"]);

var ListMenuItem = _styledComponents["default"].li.withConfig({
  displayName: "SidebarMenu__ListMenuItem",
  componentId: "sc-o04naj-1"
})(["list-style:none;width:100%;&:hover{background:", ";.icon{color:", ";}.text{color:", ";}}.focus{background:", " !important;.icon{color:", ";}.text{color:", ";}}.active{background:", " !important;.icon{color:", ";}.text{color:", ";}}background-color:", ";height:50px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;border-radius:8px;padding-left:16px;"], function (props) {
  return props.pointerBackground || "#d7eeff";
}, function (props) {
  return props.pointerIconColor || "#9fcde3";
}, function (props) {
  return props.pointerTextColor || "#9fcde3";
}, function (props) {
  return props.pointerBackground || "#d7eeff";
}, function (props) {
  return props.pointerIconColor || "#9fcde3";
}, function (props) {
  return props.pointerTextColor || "#9fcde3";
}, function (props) {
  return props.pointerBackground || "#d7eeff";
}, function (props) {
  return props.pointerIconColor || "#9fcde3";
}, function (props) {
  return props.pointerTextColor || "#9fcde3";
}, function (props) {
  return props.backgroundColor;
});

exports.ListMenuItem = ListMenuItem;

var ListMenu = _styledComponents["default"].ul.withConfig({
  displayName: "SidebarMenu__ListMenu",
  componentId: "sc-o04naj-2"
})(["margin:0;width:100%;list-style-position:outside;align-items:center;margin-block-start:0px;padding:0;"]);

exports.ListMenu = ListMenu;

var MarketBadge = _styledComponents["default"].span.withConfig({
  displayName: "SidebarMenu__MarketBadge",
  componentId: "sc-o04naj-3"
})(["height:27px;border-radius:100px;display:flex;align-items:center;justify-content:center;padding-right:16px;padding-left:16px;"]);

exports.MarketBadge = MarketBadge;

var MenuBadge = _styledComponents["default"].span.withConfig({
  displayName: "SidebarMenu__MenuBadge",
  componentId: "sc-o04naj-4"
})(["width:91px;height:34px;opacity:0.35;display:flex;border-radius:100px;justify-content:center;align-items:center;"]);

var ListItemIconLink = function ListItemIconLink(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      onClick = _ref.onClick,
      label = _ref.label,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    flexDirection: "row",
    alignItems: "center",
    height: "50px"
  }, /*#__PURE__*/_react["default"].createElement(_icons.BlendIcon, {
    size: "18px",
    iconify: icon,
    className: "icon"
  }), /*#__PURE__*/_react["default"].createElement(_core.Text, _extends({
    className: "text",
    color: color,
    ml: "16px",
    fontSize: "14px",
    textStyle: "h7"
  }, props), label), /*#__PURE__*/_react["default"].createElement(_core.Flex, {
    ml: "16px"
  }, children));
};

exports.ListItemIconLink = ListItemIconLink;
ListItemIconLink.propTypes = {
  children: _propTypes["default"].node,
  icon: _propTypes["default"].object,
  onClick: _propTypes["default"].func,
  label: _propTypes["default"].string,
  color: _propTypes["default"].string
};

var SidebarMenu = function SidebarMenu(_ref2) {
  var items = _ref2.items,
      pointerBackground = _ref2.pointerBackground,
      pointerIconColor = _ref2.pointerIconColor,
      pointerTextColor = _ref2.pointerTextColor,
      backgroundColor = _ref2.backgroundColor,
      props = _objectWithoutProperties(_ref2, _excluded2);

  console.log("SIDEBAR ", props);
  return /*#__PURE__*/_react["default"].createElement(SidebarContainer, {
    bg: "baseWhite"
  }, /*#__PURE__*/_react["default"].createElement(ListMenu, props, items.map(function (_ref3) {
    var id = _ref3.id,
        label = _ref3.label,
        onClick = _ref3.onClick,
        icon = _ref3.icon,
        badge = _ref3.badge,
        badgeColor = _ref3.badgeColor,
        disabled = _ref3.disabled,
        rest = _objectWithoutProperties(_ref3, _excluded3);

    return /*#__PURE__*/_react["default"].createElement(ListMenuItem, _extends({
      key: label,
      onClick: onClick,
      backgroundColor: backgroundColor,
      style: disabled ? {
        pointerEvents: "none"
      } : null,
      pointerBackground: pointerBackground,
      pointerIconColor: pointerIconColor,
      pointerTextColor: pointerTextColor
    }, rest), /*#__PURE__*/_react["default"].createElement(ListItemIconLink, {
      icon: icon,
      label: label
    }, badge ? /*#__PURE__*/_react["default"].createElement(MenuBadge, {
      style: {
        background: badgeColor
      }
    }, /*#__PURE__*/_react["default"].createElement(_core.Text, {
      fontSize: "xs"
    }, badge)) : null));
  })));
};

SidebarMenu.propTypes = {
  items: _propTypes["default"].instanceOf(Array),
  pointerBackground: _propTypes["default"].string,
  pointerIconColor: _propTypes["default"].string,
  pointerTextColor: _propTypes["default"].string,
  backgroundColor: _propTypes["default"].string
};
SidebarMenu.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SidebarMenu",
  "props": {
    "items": {
      "type": {
        "name": "instanceOf",
        "value": "Array"
      },
      "required": false,
      "description": ""
    },
    "pointerBackground": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "pointerIconColor": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "pointerTextColor": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "backgroundColor": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};
var _default = SidebarMenu;
exports["default"] = _default;
ListItemIconLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ListItemIconLink",
  "props": {
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": ""
    },
    "icon": {
      "type": {
        "name": "object"
      },
      "required": false,
      "description": ""
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "color": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};