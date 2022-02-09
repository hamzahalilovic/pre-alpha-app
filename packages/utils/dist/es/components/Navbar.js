"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NavbarContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@blend-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _excluded = ["children", "backgroundColor"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NavbarContainer = (0, _styledComponents["default"])(_core.Flex).withConfig({
  displayName: "Navbar__NavbarContainer",
  componentId: "sc-fodoa7-0"
})(["height:65px;width:100%;padding-left:64px;position:sticky;top:0;z-index:1;"]);
exports.NavbarContainer = NavbarContainer;

var Navbar = function Navbar(_ref) {
  var children = _ref.children,
      backgroundColor = _ref.backgroundColor,
      props = _objectWithoutProperties(_ref, _excluded);

  console.log("Navbar ", props);
  return /*#__PURE__*/_react["default"].createElement(NavbarContainer, {
    bg: backgroundColor
  }, children);
};

Navbar.propTypes = {
  children: _propTypes["default"].node,
  backgroundColor: _propTypes["default"].string
};
Navbar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Navbar",
  "props": {
    "children": {
      "type": {
        "name": "node"
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
var _default = Navbar;
exports["default"] = _default;